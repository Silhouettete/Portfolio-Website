#!/usr/bin/env node
/**
 * Regenerates data/translations.ts using LibreTranslate for Japanese and
 * Thai — free, open-source, no API key, no card. Burmese isn't supported
 * by LibreTranslate/Argos Translate yet, so it stays hand-translated
 * below in BURMESE_STRINGS — edit it directly if you want to tweak the
 * wording.
 *
 * Usage:
 *   node scripts/translate.mjs
 *
 * By default this hits the free public instance at
 * https://translate.argosopentech.com — a shared community server, so
 * be patient and rerun if a request times out. To self-host instead
 * (faster, no shared rate limits, fully offline after setup):
 *
 *   docker run -ti --rm -p 5000:5000 libretranslate/libretranslate
 *   LIBRETRANSLATE_URL=http://localhost:5000 node scripts/translate.mjs
 *
 * Workflow:
 *   1. Edit data/baseStrings.json (English copy only).
 *   2. Rerun this script.
 *   3. data/translations.ts is regenerated for en/ja/th (my stays as-is).
 *
 * Requires Node 18+ (uses the built-in fetch).
 */

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const LIBRETRANSLATE_URL =
  process.env.LIBRETRANSLATE_URL || "https://translate.argosopentech.com";
// Only needed if you point this at a hosted instance that requires one.
// The public demo instance and a self-hosted Docker instance do not.
const API_KEY = process.env.LIBRETRANSLATE_API_KEY;

const TARGET_LANGS = {
  ja: "ja",
  th: "th",
};

// LibreTranslate/Argos Translate has no Burmese model yet, so this stays
// hand-translated rather than machine-generated. Edit directly to tweak.
const BURMESE_STRINGS = {
  portfolioBy: "Swan Pyae Aung ၏ ပုံစံစာအုပ်",
  heroTitle:
    "မင်္ဂလာပါ၊ ကျွန်တော် Swan Pyae Aung ပါ။ မြန်မာနိုင်ငံသား Software Engineer တစ်ဦးဖြစ်ပြီး ဘန်ကောက်မြို့တွင် နေထိုင်လျက်ရှိပါသည်။",
  ctaProjects: "လုပ်ငန်းများကို ကြည့်ရှုရန်",
  ctaResume: "ကျွန်ုပ်၏ Resume ကို ဒေါင်းလုဒ်ရယူပါ",
  aboutEyebrow: "ကျွန်ုပ်အကြောင်း သိရှိပါ",
  aboutHeadingPre: "",
  aboutHeadingHighlight: "ကျွန်ုပ်အကြောင်း",
  aboutP1:
    "ကျွန်တော်သည် မြန်မာနိုင်ငံသား Software Engineer တစ်ဦးဖြစ်ပြီး လက်ရှိတွင် ဘန်ကောက်မြို့တွင် နေထိုင်လျက်ရှိပါသည်။ TypeScript, React နှင့် Node.js များကို အသုံးပြု၍ အသုံးပြုသူ၏ ပြဿနာများကို ရှာဖွေခြင်းမှ စတင်ကာ production အထိ full-stack product များကို တည်ဆောက်ပါသည်။",
  aboutP2:
    "FPT Software တွင် NXP Semiconductors ၏ client project တစ်ခုအတွက် internship ဆောင်ရွက်ခဲ့ပြီး Docker နှင့် Jenkins ကို အသုံးပြု၍ containerized CI/CD pipeline တစ်ခုကို ဒီဇိုင်းရေးဆွဲ တည်ဆောက်ခဲ့ပါသည်။",
  aboutP3:
    "Rangsit University မှ GPA 3.98 ဖြင့် ပထမဆင့်ဂုဏ်ထူးဖြင့် ဘွဲ့ရရှိခဲ့ပါသည်။ လက်ရှိတွင် Full Stack Open နှင့် open-source contributions များမှတစ်ဆင့် ကျွမ်းကျင်မှုများကို ဆက်လက်တိုးချဲ့လျက်ရှိပါသည်။ အရှေ့တောင်အာရှတစ်ဝှမ်းလုံးသို့ ချက်ချင်း ပြောင်းရွှေ့နိုင်ပါသည်။",
  aboutP4:
    "Claude, ChatGPT နှင့် Gemini ကဲ့သို့သော AI tools များကို idea ထုတ်ခြင်း၊ UX writing၊ research ပေါင်းစပ်ခြင်းနှင့် heuristic reviews များကို အရှိန်မြှင့်ရန် အသုံးပြုပါသည်။ AI သည် ယူဆချက်များကို မေးခွန်းထုတ်ရန်နှင့် ရွေးချယ်စရာများကို စူးစမ်းရန် ကူညီပေးသော်လည်း နောက်ဆုံး design ဆုံးဖြတ်ချက်မှာမူ ကျွန်ုပ်၏ တာဝန်ဖြစ်ပါသည်။",
  statGpaLabel: "GPA",
  statHonoursLabel: "ပထမဆင့်ဂုဏ်ထူး",
  techStackLabel: "အသုံးပြုသော နည်းပညာများ",
  currentlyLearningLabel: "လက်ရှိလေ့လာနေသည်",
  softSkillsLabel: "Soft Skills များ",
  softSkillCommunication: "ဆက်သွယ်ရေး",
  softSkillTeamwork: "အဖွဲ့လိုက်ပူးပေါင်းဆောင်ရွက်ခြင်း",
  softSkillProblemSolving: "ပြဿနာဖြေရှင်းခြင်း",
  softSkillAdaptability: "လိုက်လျောညီထွေဖြစ်မှု",
  softSkillTimeManagement: "အချိန်စီမံခန့်ခွဲမှု",
  softSkillContinuousLearning: "အဆက်မပြတ် လေ့လာခြင်း",
  experienceHeading: "ကျွန်ုပ်၏ အလုပ်အတွေ့အကြုံ",
  testimonialsHeading: "အသိအမှတ်ပြုချက်များ",
  projectsHeadingPre: "",
  projectsHeadingHighlight: "ကျွန်ုပ်၏ ပရောဂျက်များ",
  filterAll: "အားလုံး",
  filterUiUx: "UI/UX",
  filterDev: "ဒီဗလော့ပ်မန့်",
  categoryUiUx: "UI/UX ဒီဇိုင်း",
  categoryDev: "ဒီဗလော့ပ်မန့်",
  checkLiveSite: "Live Site / repo ကို ကြည့်ရှုပါ",
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function translateOne(text, target) {
  const body = { q: text, source: "en", target, format: "text" };
  if (API_KEY) body.api_key = API_KEY;

  const res = await fetch(`${LIBRETRANSLATE_URL}/translate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`LibreTranslate error (${res.status}): ${errText}`);
  }

  const data = await res.json();
  return data.translatedText;
}

async function translateAll(baseStrings, target) {
  const out = {};
  for (const [key, text] of Object.entries(baseStrings)) {
    out[key] = await translateOne(text, target);
    await sleep(250); // be polite to the shared public instance
  }
  return out;
}

async function main() {
  const raw = await readFile(
    path.join(ROOT, "data", "baseStrings.json"),
    "utf-8",
  );
  const baseStrings = JSON.parse(raw);

  const result = { en: baseStrings, my: BURMESE_STRINGS };

  for (const [lang, code] of Object.entries(TARGET_LANGS)) {
    console.log(
      `Translating ${Object.keys(baseStrings).length} strings to ${lang} via ${LIBRETRANSLATE_URL}...`,
    );
    result[lang] = await translateAll(baseStrings, code);
  }

  const fileContents = `// AUTO-GENERATED by scripts/translate.mjs — do not edit en/ja/th by hand.
// To change English copy: edit data/baseStrings.json, then rerun the script.
// Burmese has no LibreTranslate model yet, so it's hand-maintained directly
// in this script (see BURMESE_STRINGS) — edit it there if you want to tweak it.

export type Language = "en" | "ja" | "th" | "my";

export const languageLabels: Record<Language, string> = {
  en: "EN",
  ja: "日本語",
  th: "ไทย",
  my: "မြန်မာ",
};

export const translations = ${JSON.stringify(result, null, 2)} as const;

export type Translations = (typeof translations)[Language];
`;

  await writeFile(
    path.join(ROOT, "data", "translations.ts"),
    fileContents,
    "utf-8",
  );
  console.log("✔ data/translations.ts regenerated.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
