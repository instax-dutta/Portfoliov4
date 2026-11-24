import { projects } from "./projects"

export const SITE = {
  url: "https://sdad.pro",
  name: "Sai Dutta Abhishek Dash",
  shortName: "SDAD",
  role: "Founder & Engineer",
  email: "contact@sdad.pro",
  location: "Odisha, India",
  city: "Dhenkanal, Odisha",
  dateModified: "2026-11-25",
  datePublished: "2024-01-01",
  lastUpdatedLabel: "Last updated: November 2026",
  sameAs: [
    "https://github.com/instax-dutta",
    "https://www.linkedin.com/in/sdabhishekdash/",
    "https://x.com/abhishekdash69",
    "https://huggingface.co/saidutta69",
  ],
} as const

const groupCounts = projects.reduce<Record<string, number>>((acc, p) => {
  acc[p.group] = (acc[p.group] ?? 0) + 1
  return acc
}, {})

const GROUP_NOUNS: Record<string, [singular: string, plural: string]> = {
  "AI & Language Infrastructure": ["AI and language infrastructure project", "AI and language infrastructure projects"],
  "Security & Systems": ["security and systems project", "security and systems projects"],
  "Platforms & Products": ["platform and product project", "platform and product projects"],
  "Creative Coding": ["creative coding project", "creative coding projects"],
  "AI Agent Skills": ["AI agent skill", "AI agent skills"],
}

const groupSentence = (() => {
  const entries = Object.entries(groupCounts)
  return entries
    .map(([group, count], i) => {
      const [singular, plural] = GROUP_NOUNS[group] ?? [group, `${group}s`]
      const prefix = i === 0 ? "" : i === entries.length - 1 ? (entries.length > 2 ? ", and " : " and ") : ", "
      return `${prefix}${count} ${count === 1 ? singular : plural}`
    })
    .join("")
})()

const agentSkillCount = groupCounts["AI Agent Skills"] ?? 0

export const STATS = {
  products: "22",
  shippedSystems: String(projects.length),
  repositories: "225+",
  hfArtifacts: "130+",
  agentSkills: String(agentSkillCount),
  ventures: "3",
  odiaSpeakers: "38 million",
} as const

export type AnswerSection = {
  /** Question-form heading. Rendered visually hidden so the visual design is untouched. */
  question: string
  /** Answer-first passage sized to the 134-167 word AI extraction window. */
  answer: string
}

const INLINE_LINK = /\[([^\]]+)\]\(([^)]+)\)/g

export function faqSchema(page: string, url: string) {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    "inLanguage": "en",
    "isPartOf": { "@id": "https://sdad.pro/#website" },
    "mainEntity": (answerSections[page] ?? []).map((section) => ({
      "@type": "Question",
      "name": section.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": section.answer.replace(INLINE_LINK, "$1"),
      },
    })),
  }
}

export const answerSections: Record<string, AnswerSection[]> = {
  home: [
    {
      question: "Who is Sai Dutta Abhishek Dash?",
      answer:
        `Sai Dutta Abhishek Dash is a founder and engineer based in Odisha, India, who builds AI infrastructure, language technology for underserved markets, and security systems at production scale. He has shipped 22 production products, maintains 225+ public repositories across GitHub and Hugging Face, including 130+ models and datasets. He leads three deep-tech AI ventures and is open to investment conversations, strategic partnerships, and technical advisory roles. He holds a Bachelor's Degree in Computer Science from GIET University Gunupur, completed in 2025, and is an AWS Certified Cloud Practitioner. His engineering work spans model evaluation, on-device security, privacy-first platforms, developer tooling, and ${agentSkillCount} AI agent skills. He ships open source by default and publishes code, datasets, benchmarks, and machine-readable profiles so his work can be inspected. He also advises startups and enterprises on AI infrastructure, security engineering, and language technology. He works worldwide.`,
    },
    {
      question: "What has Sai Dutta Abhishek Dash built?",
      answer:
        "Sai Dutta Abhishek Dash has shipped 22 production systems across AI infrastructure, security, platforms, and agent tooling. Highlights include [sysone-bench](/projects/sysone-bench), an independent byte-identical benchmark with 50 measurements and a sealed manifest, and [T4-Bench](/projects/t4-bench), which records inference, fine-tuning, image, video, and agent workloads on consumer Tesla T4 GPUs. PhishScout pairs local phishing detection with the PhishTrap data pipeline, while MarkItDownJS converts documents into AI-ready Markdown and Gupshup supplies a privacy-scrubbed Hinglish chat corpus. Agent infrastructure includes truemotion, a local MCP motion-graphics studio with rendered-frame feedback, and gmail-automator, a quota-safe Gmail gateway. Product work includes Binify, Ansora, and winnow. His agent skills cover brand design, idea validation, fine-tuning, startup audits, and product comparison. Every entry is documented with its architecture, stack, and verifiable implementation details.",
    },
    {
      question: "What is Maelis Research and why does it exist?",
      answer:
        "Maelis Research is a language AI venture founded in 2026 by Sai Dutta Abhishek Dash, based in Dhenkanal, Odisha. It exists because 38 million people speak Odia and no commercial Odia-specific AI API existed before it, while Norwegian with 5 million speakers, Greek with 13 million, and Dutch with 25 million all have robust language AI support. Maelis Research builds an Odia-optimized tokenizer for Brahmic scripts, the Lekhani Odia-exclusive large language model family, Shruti speech recognition, and Anuvada translation. It has also published the odia-eval-benchmark with 121,947 rows across 7 task families and 34 datasets on Hugging Face. Published artifacts carry their own licenses; see each repository or dataset card. Maelis Research is the first of his 3 active ventures and publishes its work openly on Hugging Face under the MaelisResearch organisation. It targets speech and translation alongside core language modelling.",
    },
    {
      question: "How can you contact or work with Sai Dutta Abhishek Dash?",
      answer:
        "Sai Dutta Abhishek Dash can be reached by email at contact@sdad.pro, and he typically responds within 24 hours. He is based in Odisha, India and works remotely with clients and partners worldwide. He is open to investment conversations, strategic partnerships, technical collaborations, and advisory roles. His advisory practice covers [5 service lines](/advisory): AI infrastructure consulting, security engineering, language technology, full-stack product engineering, and technical advisory work including due diligence, product strategy, and investment evaluation. He works with startups building AI products, enterprises integrating large language models, teams needing edge inference, and investors evaluating deep-tech AI companies. Detailed service offerings are published at https://sdad.pro/advisory.md. Enquiries are welcome from startups building AI products, enterprises integrating large language models, fintech and healthtech teams needing privacy-first architecture, and investors evaluating deep-tech AI companies. His profile, project list, and service details are published at https://sdad.pro.",
    },
    {
      question: "Where can I find Sai Dutta Abhishek Dash online?",
      answer:
        "Sai Dutta Abhishek Dash maintains professional profiles on GitHub at github.com/instax-dutta, LinkedIn at linkedin.com/in/sdabhishekdash, X at x.com/abhishekdash69, and Hugging Face at huggingface.co/saidutta69. His GitHub and Hugging Face accounts host 225+ public repositories, including 130+ models and datasets. His venture Maelis Research publishes at maelis.in and huggingface.co/MaelisResearch, while his agency Offsage operates at offsage.com. All 22 shipped production systems are listed on the projects page, and a machine-readable profile is published at https://sdad.pro/llms-full.txt. Everything is published publicly, with licenses and access terms varying by artifact. A concise machine-readable index is available at https://sdad.pro/llms.txt. Every project entry links to public code, data, or a live site, and the technical agency he co-founded is listed at offsage.com.",
    },
    {
      question: "Is Sai Dutta Abhishek Dash available for consulting work?",
      answer:
        "Yes. Sai Dutta Abhishek Dash is open to advisory roles, technical collaborations, and strategic partnerships, and he publishes his full service offering on the [advisory page](/advisory). His advisory practice covers five service lines: AI infrastructure consulting, security engineering, language technology, full-stack product engineering, and technical advisory work. Four engagement models are offered: a monthly advisory retainer for ongoing guidance, project engagements of 2 to 12 weeks, technical audits of 1 to 2 weeks, and live workshops of 1 to 5 days. He works remotely with clients and partners worldwide from Odisha, India, and typically responds to enquiries within 24 hours. Typical clients include AI startups, enterprises integrating large language models, and investors evaluating deep-tech AI companies. Advisory engagements typically start with a technical audit of 1 to 2 weeks delivered as a written report, which is the fastest way to scope a larger project engagement.",
    },
  ],
  about: [
    {
      question: "Who is Sai Dutta Abhishek Dash and what does he build?",
      answer:
        `Sai Dutta Abhishek Dash is a founder and engineer based in Odisha, India, building AI infrastructure, language technology for underserved markets, and security systems at production scale. He has shipped 22 production products, maintains 225+ public repositories across GitHub and Hugging Face, and hosts 130+ public models and datasets on Hugging Face. His work spans LLM evaluation, on-device security, privacy-first platforms, developer tooling, and ${agentSkillCount} AI agent skills. He leads 3 deep-tech AI ventures, including Maelis Research, founded in 2026 to build an Odia-specific AI API (in development) for a population of 38 million speakers. He is a 2025 Computer Science graduate of GIET University Gunupur and an AWS Certified Cloud Practitioner. His advisory practice spans five service lines covering consulting, engineering, and technical due diligence, and he works with partners worldwide from Odisha, India. He ships open source by default.`,
    },
    {
      question: "What are Sai Dutta Abhishek Dash's core technical skills?",
      answer:
        "Sai Dutta Abhishek Dash's technical skills fall into four groups. Languages and frameworks: Python, TypeScript, JavaScript, Rust, C++, Java, Go, React, Next.js, Node.js, PostgreSQL, and MongoDB. AI and data: PyTorch, TensorFlow, scikit-learn, NumPy, Pandas, OpenCV, Ollama, Hugging Face, and LangChain. Infrastructure: Docker, Linux, AWS, Kubernetes, GitHub Actions, Nginx, Bash, Vercel, and Netlify. Specializations: AI infrastructure, language AI, on-device security, security engineering, developer tooling, open source, product engineering, and privacy engineering. He applies these across [22 shipped production systems](/projects), from sysone-bench and T4-Bench to TypeScript platforms such as Vulscany and Binify, and is an AWS Certified Cloud Practitioner. He also works with XGBoost, Keras, and Google Vertex for applied modelling and evaluation, and with Turso, NeonDB, and Upstash Redis for data infrastructure. His toolkit spans more than 40 named technologies in total.",
    },
    {
      question: "What are Sai Dutta Abhishek Dash's focus areas?",
      answer:
        `Sai Dutta Abhishek Dash focuses on four areas. AI and language infrastructure covers measured model evaluation, GPU benchmarking, document processing, and language data for underserved markets, including Odia work at Maelis Research. Security and privacy covers code security agents such as Vulscany, phishing detection and data pipelines such as PhishScout and PhishTrap, and privacy-first systems such as Binify. Product engineering covers production systems from concept to deployment, full-stack and AI-powered, built to scale. Open source and community covers 225+ public repositories across GitHub and Hugging Face plus ${agentSkillCount} AI agent skills. Current security work includes Vulscany, PraharShield, DadGuard, and PhishScout. Product engineering spans Binify, Ansora, and winnow. The connecting theme is verification: benchmarks, data pipelines, and agent tools are designed to produce evidence rather than assertions.`,
    },
  ],
  projects: [
    {
      question: "How many products has Sai Dutta Abhishek Dash shipped?",
      answer:
        `Sai Dutta Abhishek Dash has shipped ${projects.length} production systems spanning AI infrastructure, security, platforms, and AI agent skills. The portfolio contains ${groupSentence}. Flagship systems include sysone-bench, an independent decision-model benchmark with sealed manifests; T4-Bench, a measured GPU-workload suite; MarkItDownJS for document ingestion; and PhishScout with the PhishTrap data pipeline. Security work includes Vulscany, PraharShield, and DadGuard. Agent infrastructure includes truemotion and gmail-automator, while product work includes Binify, Ansora, and winnow. The AI agent skill collection covers fine-tuning, startup audits, product comparison, brand design, idea validation, code review, and roadmap learning. He maintains 225+ public repositories across GitHub and Hugging Face. Every project is documented with its language, architecture, and verifiable implementation details, and the full list is available at https://sdad.pro/projects.`,
    },
    {
      question: "What is sysone-bench and why does it matter?",
      answer:
        "sysone-bench is an independent, byte-identical head-to-head benchmark for System One decision models. It runs 50 distinct measurements against a sealed manifest, uses checksummed artifacts and seed 42, and publishes the raw protocol so results can be reproduced by anyone. The closed Jev reference scores 0.9065 while the best open model scores 0.8702 under the same inputs, and the full result set includes per-task scores rather than only a headline average. The repository includes 36 test files, continuous integration, a public results site at sysone.sdad.pro, and reproducibility tooling. It matters because model comparisons are only useful when every contender sees identical bytes, decoding settings, prompts, and scoring rules. Without that control, leaderboards measure infrastructure differences as much as model quality. sysone-bench closes that gap for decision models and gives developers a transparent baseline they can audit rather than trust. The project is published at https://github.com/instax-dutta/sysone-bench.",
    },
    {
      question: "What does T4-Bench measure?",
      answer:
        "T4-Bench is a measured benchmark suite for LLM inference, fine-tuning, image, video, and agent workloads on two consumer Kaggle Tesla T4 GPUs. It preserves CSV and JSON results, reports, logs, runner scripts, and generated media rather than publishing headline numbers alone. Recorded results include LFM2.5-8B-A1B at 119 tokens per second, FLUX.2 klein at 374 images per hour, and an Unsloth NF4 fine-tuning run at 7.1 GB versus 14.9 GB for the stock path. Those figures matter because they show what actually fits and runs on affordable hardware, not only on datacenter GPUs. The benchmark site is https://t4b.sdad.pro and the source repository is public at https://github.com/instax-dutta/T4-Bench. T4-Bench complements sysone-bench: one measures decision quality under byte-identical inputs, the other measures throughput and memory under real hardware constraints. Together they show the practical cost of running modern AI workloads.",
    },
    {
      question: "How do PhishScout and PhishTrap work together?",
      answer:
        "PhishScout is a local phishing-detection system paired with PhishTrap, an original auto-refreshing phishing URL dataset pipeline. PhishTrap fetches OpenPhish, Phishing.Database, PhishStats, and Tranco every six hours, canonicalizes URLs, tracks freshness, prunes expired entries, creates deterministic stratified splits, and validates the dataset before publication. PhishScout is designed for router, browser-extension, and edge-device deployment where network access or cloud inference is undesirable. The security value comes from the full loop: fresh data, reproducible preparation, local detection, and public validation gates. This is a data-engineering story as much as a model story, because phishing signals decay quickly and a stale training set gives false confidence. The dataset ships with documented feature definitions and a repeatable rebuild path. Source code is at https://github.com/instax-dutta/PhishScout and https://github.com/instax-dutta/PhishTrap, with the dataset at https://huggingface.co/datasets/saidutta69/PhishTrap.",
    },
    {
      question: "What agent infrastructure has Sai Dutta Abhishek Dash built?",
      answer:
        "Sai Dutta Abhishek Dash has built local agent infrastructure focused on safe, measurable execution. truemotion is an MCP motion-graphics studio where agents author HTML and GSAP scenes, inspect rendered frames, receive measured feedback, and export frame-accurate MP4s. It ships 11 MCP tools, deterministic seek-safe timelines, resumable rendering, and 103 tests plus golden-frame, crash, audio, CSP, schema, and concurrency suites. gmail-automator is a self-hosted Gmail MCP and REST gateway with encrypted OAuth custody, durable queues, rolling 24-hour quota accounting, paced sending, and an 85% quota ceiling. It includes 14 tools and 61 test files, with release workflows and terminal handling for daily-limit rejections. Both projects treat agent actions as operational systems that need verification, recovery, and hard safety limits rather than simple prompt wrappers. They are published at https://github.com/instax-dutta/truemotion and https://github.com/instax-dutta/gmail-automator.",
    },
    {
      question: "Which of Sai Dutta Abhishek Dash's projects have a live web app?",
      answer:
        "Four of the 22 systems shipped by Sai Dutta Abhishek Dash run as live web applications. sysone-bench is an independent decision-model benchmark at sysone.sdad.pro. T4-Bench is a measured GPU-workload benchmark site at t4b.sdad.pro. Binify is a zero-knowledge encrypted pastebin at bin.sdad.pro, where content is encrypted in the browser with the Web Crypto API before transmission so the server never sees plaintext. Ansora is a self-hostable serverless blogging platform at blog.sdad.pro, where every post is a Markdown file and every save is a git commit. PhishTrap is published as a downloadable dataset at huggingface.co/datasets/saidutta69/PhishTrap, and Gupshup is published at huggingface.co/datasets/saidutta69/Gupshup. The remaining systems are published as source code, benchmarks, data pipelines, or agent skills on GitHub and Hugging Face.",
    },
  ],
  experience: [
    {
      question: "What is Sai Dutta Abhishek Dash's professional background?",
      answer:
        "Sai Dutta Abhishek Dash is a founder and engineer whose background spans founder-led deep-tech ventures, a technical agency, enterprise software, and machine learning internships. He founded Maelis Research in August 2026 to build language AI infrastructure for Odia and low-resource Indian languages, serving a population of 38 million Odia speakers. He co-founded [Offsage](/experience) in September 2025, a technical agency delivering automation and SaaS for startups and scaling teams. He worked at Tech Mahindra in Bhubaneswar from May to September 2025, joining as Associate Trainee and being promoted to Associate. Earlier, he founded and led RacerNodes, a game server hosting startup, from May 2022 to July 2023. He holds a Bachelor's Degree in Computer Science from GIET University Gunupur, completed in 2025. Alongside venture work he completed 8 industry internships in machine learning, NLP, computer vision, and backend development between February 2024 and July 2024.",
    },
    {
      question: "What is Maelis Research and what has it built?",
      answer:
        "Maelis Research is a language AI venture founded in August 2026 by Sai Dutta Abhishek Dash, based in Dhenkanal, Odisha. Maelis Research is building an Odia-specific AI API (in development) for a population of 38 million Odia speakers. Its work includes an Odia-optimized tokenizer that is an Odia-optimized tokenizer for Brahmic scripts, the Lekhani Odia-exclusive large language model family, Shruti speech recognition, and Anuvada translation. It has also published a unified Odia evaluation benchmark on Hugging Face, containing 121,947 rows across 7 task families and 34 datasets. Its website is at https://maelis.in. The venture is one of 3 deep-tech AI companies he leads, alongside the technical agency Offsage, co-founded in September 2025. It is published on Hugging Face under the MaelisResearch organisation. Published artifacts carry their own licenses; see each repository or dataset card.",
    },
    {
      question: "What experience does Sai Dutta Abhishek Dash have with enterprise software and machine learning?",
      answer:
        "Sai Dutta Abhishek Dash completed 8 industry internships between February 2024 and July 2024, spanning machine learning, software engineering, automation, NLP, computer vision, and backend development. Those internships involved TensorFlow, PyTorch, scikit-learn, OpenCV, and MLOps practice, and produced deployed models rather than coursework. He built and deployed multiple machine learning applications, worked across NLP, computer vision, and predictive analytics projects, and developed production-ready automation and backend solutions. At Tech Mahindra in Bhubaneswar from May to September 2025 he completed a comprehensive enterprise training program covering enterprise technologies, software development practices, and industry standards, and was quickly promoted from Associate Trainee to Associate. He subsequently co-founded Offsage in September 2025, where he led engineering delivery for startups and scaling teams across automation and SaaS projects, establishing a discipline-first web engineering practice. He is based in Bhubaneswar during his Tech Mahindra tenure.",
    },
    {
      question: "What is Offsage?",
      answer:
        "Offsage is a technical agency co-founded by Sai Dutta Abhishek Dash in September 2025 that delivers business automation, SaaS development, and web engineering for startups and scaling teams. Offsage positions itself as smart engineering for ambitious brands, with a discipline-first approach to web work: React Server Components, mobile-first responsive design, conversion-optimized layout, and measured animation systems rather than decorative motion. The agency was built in India and deploys globally, and it is the second of the 3 deep-tech ventures he leads, alongside Maelis Research and the earlier gaming startup RacerNodes. At Offsage he led engineering delivery end to end, taking clients from a first automation script through to full-scale SaaS, and established the discipline-first web engineering practice the agency runs on. Offsage operates at offsage.com. He describes the practice as discipline-first: measurable animation systems and conversion-optimized layout rather than decoration. Offsage is remote-first and ships globally.",
    },
  ],
  skills: [
    {
      question: "What technologies does Sai Dutta Abhishek Dash use?",
      answer:
        "Sai Dutta Abhishek Dash's engineering toolkit covers four categories and more than 40 technologies. Languages and frameworks: Python, TypeScript, JavaScript, Rust, C++, Java, Go, React, Next.js, Tailwind CSS, and Node.js. AI and data: TensorFlow, PyTorch, scikit-learn, NumPy, Pandas, Keras, XGBoost, OpenCV, Matplotlib, Seaborn, Plotly, Ollama, Hugging Face, and Google Vertex. Infrastructure: AWS, Docker, Git, CI/CD, Bash, Linux, Netlify, Vercel, GitHub Actions, Jenkins, and Kubernetes. Specializations: AI infrastructure, security engineering, developer tooling, self-hosted platforms, open source, distributed systems, cloud architecture, and privacy engineering. The specializations are backed by shipped work: AI infrastructure includes sysone-bench, T4-Bench, and finetune-llm; agent infrastructure includes truemotion and gmail-automator; security engineering includes Vulscany, PraharShield, DadGuard, and PhishScout. He is AWS Certified as a Cloud Practitioner and maintains 225+ public repositories across GitHub and Hugging Face.",
    },
    {
      question: "Which programming languages is Sai Dutta Abhishek Dash proficient in?",
      answer:
        "Sai Dutta Abhishek Dash works primarily in Python, TypeScript, and Java, with working proficiency in Rust, C++, JavaScript, Go, R, and Bash. Python powers PhishScout and PhishTrap, T4-Bench, gmail-automator, sysone-bench, and finetune-llm. TypeScript and React power the production web platforms Vulscany, Binify, Ansora, and MarkItDownJS. Java is used for winnow and PraharShield, JavaScript for truemotion, C# for DadGuard, and shell automation for benchmark and deployment workflows. SQL appears through PostgreSQL, MongoDB, Turso, NeonDB, and Upstash Redis. The language choice follows the workload: systems benchmarks stay close to the metal, web platforms use TypeScript, security tooling uses Python or Java, and agent infrastructure uses whatever runtime gives the safest boundary. He is also comfortable with C++ for performance-sensitive work and with R for statistical analysis.",
    },
    {
      question: "What are Sai Dutta Abhishek Dash's engineering specializations?",
      answer:
        "Sai Dutta Abhishek Dash specializes in eight engineering domains: AI infrastructure, security engineering, developer tooling, self-hosted platforms, open source, distributed systems, cloud architecture, and privacy engineering. These specializations are grounded in shipped work rather than coursework. AI infrastructure includes sysone-bench, T4-Bench, and finetune-llm. Agent infrastructure includes truemotion and gmail-automator. Security engineering includes Vulscany, PraharShield, DadGuard, and PhishScout. Privacy engineering includes Binify and the PhishTrap data pipeline. Self-hosted platforms include Ansora and winnow. Developer tooling includes MarkItDownJS and the AI agent skills collection. Each domain has a public artifact with a repository, dataset, benchmark site, or live deployment attached, so the specialization is demonstrated rather than asserted. The common thread is measured engineering: timeout budgets, quota limits, checksums, deterministic splits, and verification gates appear repeatedly across the portfolio.",
    },
    {
      question: "What AI and machine learning frameworks does Sai Dutta Abhishek Dash use?",
      answer:
        "Sai Dutta Abhishek Dash works across the mainstream Python machine learning stack and the modern local-LLM toolchain. For model development he uses PyTorch and TensorFlow as the two primary deep learning frameworks, with scikit-learn for classical supervised learning and XGBoost for tabular and gradient-boosted models. For data work he uses NumPy, Pandas, and OpenCV, and for visualisation and reporting Matplotlib, Seaborn, and Plotly. For shipping and running models he uses Ollama for local inference, Hugging Face for model and dataset hosting, LangChain for orchestration, and Google Vertex for managed cloud inference. Keras is used as the high-level API layer on top of TensorFlow. This toolchain supports [PhishScout](/projects/phishscout) and the Maelis Research Odia language model family. He publishes 130+ models and datasets on Hugging Face on Hugging Face, and his AWS machine learning coursework covers managed Bedrock services and project planning for machine learning systems in production.",
    },
  ],
  credentials: [
    {
      question: "What is Sai Dutta Abhishek Dash's educational background?",
      answer:
        "Sai Dutta Abhishek Dash holds a Bachelor's Degree in Computer Science from GIET University Gunupur, completed in 2025, with academic interests in AI infrastructure, security engineering, distributed systems, and software architecture. Before university he completed Intermediate at Delhi Public School in Dhenkanal, Odisha in 2021, in the science stream with Mathematics and Computer Science, and High School at Maharshi Vidya Mandir in Rayagada, Odisha in 2019, with a foundation in Science and Mathematics. He supplements his degree with industry certifications, most notably AWS Certified Cloud Practitioner, plus AWS machine learning coursework completed in 2024. His academic focus maps directly to shipped work such as sysone-bench, T4-Bench, and gmail-automator. The full credential list is published at https://sdad.pro/credentials. He is based in Odisha, India, and works with partners worldwide.",
    },
    {
      question: "What certifications and courses has Sai Dutta Abhishek Dash completed?",
      answer:
        "Sai Dutta Abhishek Dash is an AWS Certified Cloud Practitioner, certified in 2024. His professional development also includes 6 further certifications completed in 2024 through Amazon Web Services and Udemy: Amazon Bedrock Getting Started, Amazon Q Developer, Planning a Machine Learning Project, an AWS Bedrock workshop on building a generative AI chatbot, Python for Data Science and Machine Learning, and Project Management. The AWS certifications cover managed generative AI infrastructure and machine learning project planning, while the Python course covers the data science and machine learning stack. He applies these credentials directly in production, running AI infrastructure on AWS and shipping model serving, edge inference, and security systems. The full credential list is published at https://sdad.pro/credentials, alongside his GIET University degree record. His 2024 AWS certifications align with the generative AI and machine learning work he now ships through Maelis Research, including the Lekhani Odia language model family and the odia-eval-benchmark.",
    },
  ],
  contact: [
    {
      question: "How do I contact Sai Dutta Abhishek Dash?",
      answer:
        "You can contact Sai Dutta Abhishek Dash by email at contact@sdad.pro, and he typically responds within 24 hours. He is based in Odisha, India and works with clients and partners worldwide, so remote engagement is standard. The contact form on this page is the fastest route for project enquiries, and direct email is best for investment conversations, strategic partnerships, and advisory roles. Enquiries are welcome from startups building AI products, enterprises integrating large language models, teams needing edge inference, and language preservation initiatives. He also maintains profiles on GitHub at github.com/instax-dutta, LinkedIn at linkedin.com/in/sdabhishekdash, and Hugging Face at huggingface.co/saidutta69, where he hosts 130+ public models and datasets. Portfolio and full profile details are at https://sdad.pro, where his complete project list spans AI infrastructure, language AI, security systems, and developer tooling. He is open to investment conversations and advisory roles.",
    },
    {
      question: "What services and collaborations does Sai Dutta Abhishek Dash offer?",
      answer:
        "Sai Dutta Abhishek Dash offers [5 service lines](/advisory) through his advisory practice. AI infrastructure consulting covers LLM integration, inference optimization, on-device machine learning, model quantization, distillation, edge deployment, and AI agent architecture. Security engineering covers code security scanning, privacy-first architecture, forensic tooling, and network security. Language technology covers low-resource language AI, NLP benchmarking and evaluation, and cultural adaptation. Full-stack product engineering covers Next.js and TypeScript web applications, developer tools, SDKs, APIs, and open source work across 225+ repositories. Advisory roles cover technical due diligence, product strategy, build-versus-buy decisions, and investment evaluation for deep-tech AI companies. These service lines are grounded in 22 shipped open-source systems and 225+ public repositories across GitHub and Hugging Face rather than abstract capability. Typical clients include startups building AI products, enterprises integrating large language models, fintech and healthtech teams needing privacy-first architecture, and government or NGO projects focused on underserved Indian languages.",
    },
  ],
  advisory: [
    {
      question: "What services does Sai Dutta Abhishek Dash offer?",
      answer:
        "Sai Dutta Abhishek Dash offers five advisory and engineering service lines. AI infrastructure consulting covers LLM integration, inference optimization, on-device machine learning, model quantization, distillation, edge deployment, and AI agent architecture with verification loops. Security engineering covers code security scanning, privacy-first architecture, forensic tooling, and network security. Language technology covers low-resource language AI, NLP benchmarking and evaluation, and cultural adaptation. Full-stack product engineering covers Next.js and TypeScript web applications, developer tools, SDKs, APIs, and infrastructure. Advisory roles cover technical due diligence, product strategy, build-versus-buy decisions, and investment evaluation of AI and ML startups. All five lines are grounded in 22 shipped open-source systems and 225+ public repositories across GitHub and Hugging Face rather than abstract capability. Full service details, engagement models, and technical credentials are published on the [advisory page](/advisory), and enquiries are welcome at contact@sdad.pro. Work is delivered remotely worldwide from Odisha, India, and most engagements begin with a scoped technical audit or a live workshop.",
    },
    {
      question: "How much does it cost to work with Sai Dutta Abhishek Dash?",
      answer:
        "Prices are quoted individually rather than published, but the engagement structure is fixed. Four models are offered. An advisory retainer runs monthly on an async-plus-calls basis and is intended for ongoing technical guidance. A project engagement runs 2 to 12 weeks at full-time capacity and is scoped to a specific product or engineering outcome. A technical audit runs 1 to 2 weeks, delivered asynchronously as a written report, and covers architecture review or a security audit. A workshop runs 1 to 5 days of live training for team upskilling on AI, machine learning, or security. The fastest route to a quote is email at contact@sdad.pro, where enquiries typically receive a response within 24 hours. He works remotely with clients and partners worldwide from Odisha, India. His hourly and project rates are set per engagement after a scoping call, and the technical audit is the usual entry point. The same five service lines apply whether the engagement is advisory or hands-on delivery.",
    },
    {
      question: "Who is Sai Dutta Abhishek Dash's advisory work best suited for?",
      answer:
        "Sai Dutta Abhishek Dash's advisory work is best suited to four kinds of client. Startups building AI products need someone who has already shipped inference, agents, and ML systems rather than someone reading about them. Enterprises integrating large language models need architecture and cost guidance, particularly where inference must run on edge hardware or inside a privacy boundary. Fintech, healthtech, and privacy-focused product teams need code security scanning, client-side encryption, and forensic process design. Government bodies, regional businesses, and NGOs working on low-resource Indian languages need tokenizer, speech, translation, and evaluation work that the commercial market has largely skipped. For investors, his practice includes technical due diligence on AI startups and build-versus-buy decisions. He holds a Bachelor's Degree in Computer Science from GIET University Gunupur and is an AWS Certified Cloud Practitioner, so the advisory work sits on top of shipped production systems rather than study.",
    },
  ],
}
