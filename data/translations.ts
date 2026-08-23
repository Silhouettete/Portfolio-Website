export type Language = "en" | "ja" | "th" | "my";

export const languageLabels: Record<Language, string> = {
  en: "EN",
  ja: "日本語",
  th: "ไทย",
  my: "မြန်မာ",
};

export const translations = {
  en: {
    portfolioBy: "Portfolio by Swan Pyae Aung",
    heroTitle:
      "Hi, I'm Swan Pyae Aung. Software Engineer from Myanmar, based in Bangkok.",
    ctaProjects: "Check Out My Works!",
    ctaResume: "Download My Resume!",

    aboutEyebrow: "Get To Know Me",
    aboutHeadingPre: "About ",
    aboutHeadingHighlight: "Me",
    aboutP1:
      "I'm a Software Engineer from Myanmar, currently based in Bangkok. I build full-stack products using TypeScript, React, and Node.js, from identifying the user problem through to shipping to production.",
    aboutP2:
      "I interned at FPT Software on a client project for NXP Semiconductors, where I designed and implemented a containerized CI/CD pipeline with Docker and Jenkins.",
    aboutP3:
      "I graduated with First-Class Honours and a 3.98 GPA from Rangsit University. Currently expanding through Full Stack Open and open-source contributions. Available for immediate relocation across Southeast Asia.",
    aboutP4:
      "I use AI tools such as Claude, ChatGPT, and Gemini to accelerate ideation, UX writing, research synthesis, and heuristic reviews. AI helps me challenge assumptions and explore alternatives, while final design judgment remains my responsibility.",
    statGpaLabel: "GPA",
    statHonoursLabel: "Class Honours",
    techStackLabel: "Tech Stack",
    currentlyLearningLabel: "Currently Learning",

    softSkillsLabel: "Soft Skills",
    softSkillCommunication: "Communication",
    softSkillTeamwork: "Teamwork & Collaboration",
    softSkillProblemSolving: "Problem Solving",
    softSkillAdaptability: "Adaptability",
    softSkillTimeManagement: "Time Management",
    softSkillContinuousLearning: "Continuous Learning",
    filterAll: "All",
    filterUiUx: "UI/UX",
    filterDev: "Development",
    categoryUiUx: "UI/UX Design",
    categoryDev: "Development",
    checkLiveSite: "Check Live Site / repo",
    projectsHeadingPre: "A Collection of ",
    projectsHeadingHighlight: "My Projects",
    projectSmartKidsTitle: "Smart Kids — Game and Learn",
    projectSmartKidsDesc:
      "Multi-platform UX design for a children's English learning app. Designed 16+ screens across web, mobile, and Apple Vision Pro.",

    projectHotelTitle: "Hotel Self-Check-in",
    projectHotelDesc:
      "Designed and built a self check-in system for a hotel ERP hackathon. Led UX decisions across 10+ screens — designing dual auth flows (Booking ID + email), identity verification with live selfie, and a confirmation slip — then implemented it in Flutter.",

    projectJobBoardTitle: "AI-powered Job Board",
    projectJobBoardDesc:
      "Full-stack job platform built with Next.js and PostgreSQL, covering authentication, listings, search, applications, and file uploads with Docker containerization.",

    projectChatbotTitle: "University FAQ Chatbot",
    projectChatbotDesc:
      "Replaced a static FAQ page with a Gemini API-powered chatbot delivering instant multilingual responses to international students.",

    projectDashboardTitle: "Employee Dashboard",
    projectDashboardDesc:
      "Flask web app that processes employee and interview Excel data — validating, merging with Pandas, and generating timestamped dashboard reports.",
    experienceHeading: "My Experience",
    testimonialsHeading: "Testimonials",
    experienceFptTitle: "Software Engineering Intern @FPT Software",
    experienceFptDuration: "July 2025 - October 2025",
    experienceFptDesc:
      "Helped design and implement an automated CI/CD pipeline platform that improved deployment consistency and reduced manual setup using Docker, Nexus, and Ansible.",
    experienceHackathonTitle: "Project Lead (CimSO ERP Hackathon)",
    experienceHackathonDesc:
      "Led development of a hackathon project from ideation to delivery, building user-facing features and ensuring timely completion within a fast-paced, collaborative environment.",

    footerHeading: "Let's Get In Touch!",
    footerDescription: "If you need help or have a question, I'm here for you.",
    footerLinkedIn: "LinkedIn",
    footerEmail: "Gmail",
    footerGitHub: "GitHub",

    navAbout: "About",
    navProjects: "Projects",
    navTestimonials: "Testimonials",
    navContact: "Contact",

    testimonialFptQuote:
      "Demonstrated a solid understanding of project requirements and completed assigned tasks reliably. Showed good teamwork skills and collaborated effectively in a remote working environment.",
    testimonialFptTitle: "Project Supervisor, FPT Software (Client: NXP)",
  },
  ja: {
    portfolioBy: "スワン・ピャエ・アウン ポートフォリオ",
    heroTitle:
      "こんにちは、スワン・ピャエ・アウンです。ミャンマー出身、バンコク在住のソフトウェアエンジニアです。",
    ctaProjects: "作品を見る",
    ctaResume: "履歴書をダウンロード",

    aboutEyebrow: "私について知る",
    aboutHeadingPre: "",
    aboutHeadingHighlight: "私について",
    aboutP1:
      "私はミャンマー出身、現在バンコクを拠点に活動するソフトウェアエンジニアです。TypeScript、React、Node.jsを用いて、課題の発見から本番環境へのリリースまで一貫してフルスタック開発を行っています。",
    aboutP2:
      "FPTソフトウェアにてインターンとして勤務し、NXPセミコンダクターズのクライアントプロジェクトでDockerとJenkinsを用いたコンテナ化CI/CDパイプラインの設計・実装を担当しました。",
    aboutP3:
      "ランシット大学を首席相当の成績（GPA 3.98）で卒業しました。現在はFull Stack Openやオープンソースへの貢献を通じてスキルを広げています。東南アジア全域での早期の移住に対応可能です。",
    aboutP4:
      "Claude、ChatGPT、GeminiなどのAIツールを活用し、アイデア出し、UXライティング、リサーチの統合、ヒューリスティック評価を加速させています。AIは前提を疑い、選択肢を探るのに役立ちますが、最終的なデザイン判断は私自身の責任です。",
    statGpaLabel: "GPA",
    statHonoursLabel: "優等学位",
    techStackLabel: "技術スタック",
    currentlyLearningLabel: "現在学習中",

    softSkillsLabel: "ソフトスキル",
    softSkillCommunication: "コミュニケーション",
    softSkillTeamwork: "チームワーク・協働",
    softSkillProblemSolving: "問題解決力",
    softSkillAdaptability: "適応力",
    softSkillTimeManagement: "タイムマネジメント",
    softSkillContinuousLearning: "継続的な学習",
    filterAll: "すべて",
    filterUiUx: "UI/UX",
    filterDev: "開発",
    categoryUiUx: "UI/UXデザイン",
    categoryDev: "開発",
    checkLiveSite: "サイト / リポジトリを見る",
    projectsHeadingPre: "",
    projectsHeadingHighlight: "プロジェクト集",
    projectSmartKidsTitle: "Smart Kids — ゲームと学習",
    projectSmartKidsDesc:
      "子ども向け英語学習アプリのマルチプラットフォームUXデザイン。Web、モバイル、Apple Vision Pro向けに16以上の画面を設計しました。",

    projectHotelTitle: "ホテル・セルフチェックイン",
    projectHotelDesc:
      "ホテルERPハッカソン向けのセルフチェックインシステムを設計・開発しました。10以上の画面でUX設計をリードし、Booking ID＋メールによる認証、セルフィーを使った本人確認、確認票の設計を行い、Flutterで実装しました。",

    projectJobBoardTitle: "AI搭載ジョブボード",
    projectJobBoardDesc:
      "Next.jsとPostgreSQLで構築したフルスタック求人プラットフォーム。認証、求人掲載、検索、応募、Dockerによるファイルアップロードとコンテナ化に対応しています。",

    projectChatbotTitle: "大学FAQチャットボット",
    projectChatbotDesc:
      "静的なFAQページをGemini API搭載のチャットボットに置き換え、留学生に多言語で即時回答を提供します。",

    projectDashboardTitle: "従業員ダッシュボード",
    projectDashboardDesc:
      "従業員・面接データのExcelファイルを処理するFlaskアプリ。Pandasでデータを検証・統合し、タイムスタンプ付きのダッシュボードレポートを生成します。",
    experienceHeading: "職務経歴",
    testimonialsHeading: "推薦の声",

    experienceFptTitle: "FPT Software ソフトウェアエンジニアリングインターン",
    experienceFptDuration: "2025年7月 - 2025年10月",
    experienceFptDesc:
      "Docker、Nexus、Ansibleを使用した自動CI/CDパイプラインの設計・実装を支援し、デプロイの一貫性を向上させ、手動セットアップを削減しました。",
    experienceHackathonTitle: "プロジェクトリード（CimSO ERP Hackathon）",
    experienceHackathonDesc:
      "アイデア出しから成果物の完成までハッカソンプロジェクトをリードし、ユーザー向け機能の開発と、短期間での確実なプロジェクト完了を担当しました。",

    footerHeading: "お問い合わせはこちら",
    footerDescription:
      "ご質問やお手伝いが必要な場合は、お気軽にご連絡ください。",
    footerLinkedIn: "LinkedIn",
    footerEmail: "Gmail",
    footerGitHub: "GitHub",

    navAbout: "About",
    navProjects: "プロジェクト",
    navTestimonials: "推薦の声",
    navContact: "お問い合わせ",

    testimonialFptQuote:
      "プロジェクトの要件をしっかり理解し、担当したタスクを確実に完了しました。また、優れたチームワークを発揮し、リモート環境でも効果的に協力しました。",
    testimonialFptTitle:
      "プロジェクトスーパーバイザー、FPT Software（NXPクライアント）",
  },
  th: {
    portfolioBy: "พอร์ตโฟลิโอโดย Swan Pyae Aung",
    heroTitle:
      "สวัสดีครับ ผม Swan Pyae Aung วิศวกรซอฟต์แวร์ชาวเมียนมา ปัจจุบันอาศัยอยู่ที่กรุงเทพฯ",
    ctaProjects: "ดูผลงานของผม",
    ctaResume: "ดาวน์โหลดเรซูเม่",

    aboutEyebrow: "ทำความรู้จักผม",
    aboutHeadingPre: "",
    aboutHeadingHighlight: "เกี่ยวกับฉัน",
    aboutP1:
      "ผมเป็นวิศวกรซอฟต์แวร์ชาวเมียนมา ปัจจุบันอาศัยอยู่ที่กรุงเทพฯ ผมพัฒนาผลิตภัณฑ์แบบฟูลสแตกด้วย TypeScript, React และ Node.js ตั้งแต่การค้นหาปัญหาของผู้ใช้ไปจนถึงการนำขึ้นใช้งานจริง",
    aboutP2:
      "ผมเคยฝึกงานที่ FPT Software ในโปรเจกต์ของลูกค้า NXP Semiconductors โดยออกแบบและพัฒนา CI/CD pipeline แบบ containerized ด้วย Docker และ Jenkins",
    aboutP3:
      "ผมสำเร็จการศึกษาเกียรตินิยมอันดับหนึ่งด้วยเกรดเฉลี่ย 3.98 จากมหาวิทยาลัยรังสิต ปัจจุบันกำลังพัฒนาทักษะเพิ่มเติมผ่าน Full Stack Open และการมีส่วนร่วมในโครงการโอเพนซอร์ส พร้อมย้ายที่ทำงานได้ทันทีทั่วภูมิภาคเอเชียตะวันออกเฉียงใต้",
    aboutP4:
      "ผมใช้เครื่องมือ AI อย่าง Claude, ChatGPT และ Gemini เพื่อช่วยเร่งกระบวนการคิดไอเดีย การเขียน UX การสังเคราะห์งานวิจัย และการรีวิวตาม heuristic โดย AI ช่วยให้ผมตั้งคำถามกับสมมติฐานและสำรวจทางเลือกต่าง ๆ แต่การตัดสินใจด้านดีไซน์ขั้นสุดท้ายยังคงเป็นความรับผิดชอบของผม",
    statGpaLabel: "เกรดเฉลี่ย",
    statHonoursLabel: "เกียรตินิยมอันดับหนึ่ง",
    techStackLabel: "เทคโนโลยีที่ใช้",
    currentlyLearningLabel: "กำลังเรียนรู้",

    softSkillsLabel: "ทักษะทางสังคม",
    softSkillCommunication: "การสื่อสาร",
    softSkillTeamwork: "การทำงานเป็นทีม",
    softSkillProblemSolving: "การแก้ปัญหา",
    softSkillAdaptability: "การปรับตัว",
    softSkillTimeManagement: "การบริหารเวลา",
    softSkillContinuousLearning: "การเรียนรู้อย่างต่อเนื่อง",
    filterAll: "ทั้งหมด",
    filterUiUx: "UI/UX",
    filterDev: "การพัฒนา",
    categoryUiUx: "ออกแบบ UI/UX",
    categoryDev: "การพัฒนา",
    checkLiveSite: "ดูเว็บไซต์จริง / repo",
    projectsHeadingPre: "",
    projectsHeadingHighlight: "ผลงานโปรเจกต์ของผม",
    projectSmartKidsTitle: "Smart Kids — Game and Learn",
    projectSmartKidsDesc:
      "ออกแบบ UX สำหรับแอปเรียนภาษาอังกฤษสำหรับเด็กที่รองรับหลายแพลตฟอร์ม ออกแบบมากกว่า 16 หน้าสำหรับ Web, Mobile และ Apple Vision Pro",

    projectHotelTitle: "Hotel Self-Check-in",
    projectHotelDesc:
      "ออกแบบและพัฒนาระบบเช็กอินด้วยตนเองสำหรับโรงแรมในงาน ERP Hackathon เป็นผู้นำด้าน UX มากกว่า 10 หน้าจอ ตั้งแต่การออกแบบระบบยืนยันตัวตนด้วย Booking ID + อีเมล การยืนยันตัวตนด้วยการถ่ายเซลฟี่แบบสด ไปจนถึงใบยืนยันการเช็กอิน และนำไปพัฒนาด้วย Flutter",

    projectJobBoardTitle: "AI-powered Job Board",
    projectJobBoardDesc:
      "แพลตฟอร์มหางานแบบ Full-stack ที่พัฒนาด้วย Next.js และ PostgreSQL รองรับการยืนยันตัวตน การลงประกาศงาน การค้นหา การสมัครงาน และการอัปโหลดไฟล์ พร้อมการทำ Containerization ด้วย Docker",

    projectChatbotTitle: "University FAQ Chatbot",
    projectChatbotDesc:
      "พัฒนา Chatbot ด้วย Gemini API เพื่อแทนที่หน้า FAQ แบบเดิม โดยสามารถตอบคำถามแบบหลายภาษาได้ทันทีสำหรับนักศึกษาต่างชาติ",

    projectDashboardTitle: "Employee Dashboard",
    projectDashboardDesc:
      "เว็บแอปที่พัฒนาด้วย Flask สำหรับประมวลผลข้อมูลพนักงานและข้อมูลการสัมภาษณ์จาก Excel โดยใช้ Pandas ในการตรวจสอบและรวมข้อมูล พร้อมสร้างรายงาน Dashboard ที่มี Timestamp",
    experienceHeading: "ประสบการณ์ทำงาน",
    testimonialsHeading: "คำรับรอง",

    experienceFptTitle: "นักศึกษาฝึกงานด้านวิศวกรรมซอฟต์แวร์ @FPT Software",
    experienceFptDuration: "กรกฎาคม 2025 - ตุลาคม 2025",
    experienceFptDesc:
      "ช่วยออกแบบและพัฒนาแพลตฟอร์ม CI/CD แบบอัตโนมัติ ซึ่งช่วยเพิ่มความสม่ำเสมอในการ Deploy และลดขั้นตอนการตั้งค่าด้วยตนเอง โดยใช้ Docker, Nexus และ Ansible",
    experienceHackathonTitle: "หัวหน้าโครงการ (CimSO ERP Hackathon)",
    experienceHackathonDesc:
      "เป็นผู้นำโครงการตั้งแต่การคิดไอเดียจนถึงการส่งมอบ พัฒนาฟีเจอร์สำหรับผู้ใช้และดูแลให้โครงการเสร็จตามเวลาภายใต้สภาพแวดล้อมที่รวดเร็วและทำงานร่วมกันเป็นทีม",

    footerHeading: "ติดต่อผม",
    footerDescription:
      "หากคุณต้องการความช่วยเหลือหรือมีคำถาม สามารถติดต่อผมได้เลย",
    footerLinkedIn: "LinkedIn",
    footerEmail: "Gmail",
    footerGitHub: "GitHub",

    navAbout: "เกี่ยวกับฉัน",
    navProjects: "โปรเจกต์",
    navTestimonials: "คำรับรอง",
    navContact: "ติดต่อ",

    testimonialFptQuote:
      "แสดงให้เห็นถึงความเข้าใจในข้อกำหนดของโครงการเป็นอย่างดี และสามารถทำงานที่ได้รับมอบหมายให้สำเร็จได้อย่างน่าเชื่อถือ มีทักษะการทำงานเป็นทีมที่ดีและสามารถทำงานร่วมกับผู้อื่นในสภาพแวดล้อมการทำงานระยะไกลได้อย่างมีประสิทธิภาพ",
    testimonialFptTitle: "Project Supervisor, FPT Software (Client: NXP)",
  },
  my: {
    portfolioBy: "Swan Pyae Aung ၏ ပေါ့ဖော်လီရို",
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
    filterAll: "အားလုံး",
    filterUiUx: "UI/UX",
    filterDev: "ဒီဗလော့ပ်မန့်",
    categoryUiUx: "UI/UX ဒီဇိုင်း",
    categoryDev: "ဒီဗလော့ပ်မန့်",
    checkLiveSite: "Live Site / repo ကို ကြည့်ရှုပါ",
    experienceHeading: "ကျွန်ုပ်၏ အလုပ်အတွေ့အကြုံ",
    projectsHeadingPre: "",
    projectsHeadingHighlight: "ပရောဂျက်များစုစည်းမှု",
    testimonialsHeading: "အသိအမှတ်ပြုချက်များ",
    projectSmartKidsTitle: "Smart Kids — Game and Learn",
    projectSmartKidsDesc:
      "ကလေးများအတွက် အင်္ဂလိပ်စာလေ့လာနိုင်သော App တစ်ခုအတွက် Platform မျိုးစုံအသုံးပြုနိုင်သည့် UX Design ကို ပြုလုပ်ခဲ့ပါသည်။ Web၊ Mobile နှင့် Apple Vision Pro အတွက် Screen ၁၆ ခုကျော်ကို ဒီဇိုင်းရေးဆွဲခဲ့ပါသည်။",

    projectHotelTitle: "Hotel Self-Check-in",
    projectHotelDesc:
      "Hotel ERP Hackathon အတွက် Self Check-in System ကို ဒီဇိုင်းရေးဆွဲပြီး တည်ဆောက်ခဲ့ပါသည်။ Screen ၁၀ ခုကျော်၏ UX ဆုံးဖြတ်ချက်များကို ဦးဆောင်ခဲ့ပြီး Booking ID + Email ဖြင့် Authentication၊ Live Selfie ဖြင့် Identity Verification နှင့် Confirmation Slip တို့ကို ဒီဇိုင်းရေးဆွဲကာ Flutter ဖြင့် တည်ဆောက်ခဲ့ပါသည်။",

    projectJobBoardTitle: "AI-powered Job Board",
    projectJobBoardDesc:
      "Next.js နှင့် PostgreSQL ကို အသုံးပြုတည်ဆောက်ထားသော Full-stack Job Platform ဖြစ်ပြီး Authentication၊ Job Listings၊ Search၊ Applications နှင့် File Uploads များကို ထည့်သွင်းထားပါသည်။ Docker ဖြင့် Containerization ပြုလုပ်ထားပါသည်။",

    projectChatbotTitle: "University FAQ Chatbot",
    projectChatbotDesc:
      "Static FAQ Page အစား Gemini API အသုံးပြုထားသော Chatbot ဖြင့် အစားထိုးခဲ့ပြီး နိုင်ငံတကာကျောင်းသားများအတွက် ဘာသာစကားမျိုးစုံဖြင့် ချက်ချင်းအဖြေပေးနိုင်အောင် တည်ဆောက်ခဲ့ပါသည်။",

    projectDashboardTitle: "Employee Dashboard",
    projectDashboardDesc:
      "Flask ဖြင့် တည်ဆောက်ထားသော Web App ဖြစ်ပြီး Employee နှင့် Interview Excel Data များကို လုပ်ဆောင်ပေးပါသည်။ Pandas ကို အသုံးပြု၍ Data များကို စစ်ဆေးခြင်း၊ ပေါင်းစည်းခြင်းနှင့် Timestamp ပါဝင်သော Dashboard Report များကို ထုတ်ပေးပါသည်။",
    experienceFptTitle: "FPT Software တွင် Software Engineering Intern",
    experienceFptDuration: "ဇူလိုင် ၂၀၂၅ - အောက်တိုဘာ ၂၀၂၅",
    experienceFptDesc:
      "Docker၊ Nexus နှင့် Ansible တို့ကို အသုံးပြု၍ အလိုအလျောက် CI/CD pipeline platform တစ်ခုကို ဒီဇိုင်းရေးဆွဲခြင်းနှင့် တည်ဆောက်ခြင်းတွင် ပါဝင်ကူညီခဲ့ပြီး deployment ပိုမိုတည်ငြိမ်စေရန်နှင့် manual setup လုပ်ရသည့်အဆင့်များကို လျှော့ချနိုင်ခဲ့ပါသည်။",

    experienceHackathonTitle: "Project Lead (CimSO ERP Hackathon)",
    experienceHackathonDesc:
      "Hackathon project တစ်ခုကို idea ထုတ်ခြင်းမှ project ပြီးမြောက်သည်အထိ ဦးဆောင်ခဲ့ပြီး user-facing features များကို တည်ဆောက်ကာ အချိန်တိုအတွင်း ပူးပေါင်းလုပ်ဆောင်ပြီး project ကို အချိန်မီပြီးစီးအောင် ဆောင်ရွက်ခဲ့ပါသည်။",

    footerHeading: "ဆက်သွယ်လိုပါသလား?",
    footerDescription:
      "အကူအညီလိုအပ်ပါက သို့မဟုတ် မေးခွန်းရှိပါက ကျွန်ုပ်ထံ ဆက်သွယ်နိုင်ပါသည်။",
    footerLinkedIn: "LinkedIn",
    footerEmail: "Gmail",
    footerGitHub: "GitHub",

    navAbout: "ကျွန်ုပ်အကြောင်း",
    navProjects: "ပရောဂျက်များ",
    navTestimonials: "အသိအမှတ်ပြုချက်များ",
    navContact: "ဆက်သွယ်ရန်",

    testimonialFptQuote:
      "Project requirements များကို ကောင်းမွန်စွာ နားလည်ပြီး တာဝန်ပေးအပ်ထားသော လုပ်ငန်းများကို ယုံကြည်စိတ်ချရစွာ ပြီးမြောက်အောင် ဆောင်ရွက်နိုင်ခဲ့ပါသည်။ Teamwork skill ကောင်းမွန်ပြီး remote working environment တွင်လည်း ထိရောက်စွာ ပူးပေါင်းလုပ်ဆောင်နိုင်ခဲ့ပါသည်။",
    testimonialFptTitle: "Project Supervisor, FPT Software (Client: NXP)",
  },
} as const;

export type Translations = (typeof translations)[Language];
