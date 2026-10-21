export interface Project {
  id: string;
  title: string;
  arabicTitle?: string;
  team?: string;
  subtitle: string;
  role: string;
  category: string;
  organization?: string;
  summary: string;
  description: string;
  problemStatement?: string;
  solutionVision?: string;
  impactStatement?: string;
  departmentalDashboards?: {
    name: string;
    arabicName: string;
    roleDesc: string;
  }[];
  dataSources?: string[];
  dataPipeline?: string[];
  techStack: string[];
  keyHighlights: string[];
  metrics?: { label: string; value: string }[];
  featured: boolean;
  links: {
    liveDemo?: string;
    github?: string;
    caseStudy?: string;
  };
  imageGradient: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    iconName: string;
    highlight?: boolean;
  }[];
}

export interface Milestone {
  period: string;
  year: string;
  title: string;
  role: string;
  organization: string;
  location: string;
  badge: string;
  badgeType: "award" | "education" | "leadership" | "certification";
  description: string;
  achievements: string[];
  tags: string[];
}

export interface CompetencyPillar {
  number: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export const portfolioData = {
  personal: {
    name: "Mohammed Ali Saleh Al Sidran",
    shortName: "Mohammed",
    nickname: "Moh",
    tagline: "Software Engineer & Full-Stack Developer",
    heroHeading: "Building digital products, scalable systems, and intelligent experiences.",
    heroBio:
      "Computer Science student at Jazan University with a 4.80 / 5.00 GPA and Lead Developer of the Unified Financial File System (Raqamat Team). Specializing in Next.js, TypeScript, Open Banking architectures, and real-time analytics platforms.",
    location: "Najran, Saudi Arabia",
    status: {
      available: true,
      text: "Available for new opportunities & FinTech innovation",
    },
    contact: {
      email: "mohali22611@gmail.com",
      phone: "+966 53 113 0542",
      linkedin: "https://linkedin.com/in/mohali22611",
      github: "https://github.com/MOHALI0",
      whatsapp: "https://wa.me/966531130542",
    },
    stats: [
      { label: "Cumulative GPA", value: "4.80 / 5.0" },
      { label: "Volunteer Impact", value: "130+ Hours" },
      { label: "FinTech Hackathon", value: "Lead Dev" },
      { label: "Core Competency", value: "Full-Stack & AI" },
    ],
  },

  partners: [
    { name: "Tuwaiq Academy", role: "Hackathon Sponsor & Organizer" },
    { name: "Alinma Bank", role: "FinTech Challenge Partner" },
    { name: "Google Developer Student Clubs", role: "Event Organizer & Core Member" },
    { name: "Jazan University", role: "B.Sc. Computer Science (4.80 GPA)" },
    { name: "Coursera", role: "Certified Data Science & Python" },
  ],

  competencies: [
    {
      number: "01",
      title: "Frontend Architecture & UI/UX",
      description:
        "Designing sleek, component-driven interfaces with Next.js App Router, React 19, TypeScript, and Tailwind CSS. Obsessed with high performance, micro-interactions, and accessibility.",
      icon: "layout",
      tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
    },
    {
      number: "02",
      title: "Full-Stack & System Integration",
      description:
        "Connecting frontend client applications to multi-source RESTful APIs, securing workflows, and automating data aggregation pipelines across business divisions.",
      icon: "server",
      tags: ["RESTful APIs", "Node.js", "Java OOP", "System Design", "State Machines"],
    },
    {
      number: "03",
      title: "Data Analysis & Algorithmic Logic",
      description:
        "Parsing complex datasets, engineering scoring algorithms, and visualizing metrics with NumPy, Pandas, SQL, and interactive charts (Recharts).",
      icon: "chart",
      tags: ["Python", "SQL", "Pandas", "NumPy", "Data Visualizations"],
    },
    {
      number: "04",
      title: "Community Leadership & Delivery",
      description:
        "Leading hackathon teams to deliver working prototypes under tight deadlines, organizing developer community events with GDSC, and giving back with 130+ certified volunteer hours.",
      icon: "users",
      tags: ["GDSC", "Team Leadership", "Agile Sprint", "Public Speaking"],
    },
  ] as CompetencyPillar[],

  // ONLY the Unified Financial File System project as explicitly requested
  projects: [
    {
      id: "unified-financial-system",
      title: "Unified Financial File System",
      arabicTitle: "الهوية المالية الذكية (Smart Financial Identity)",
      team: "فريق رقمات (Raqamat Team)",
      subtitle: "Open Banking & AI-Driven Financial Identity Platform",
      role: "Lead Developer & System Architect",
      organization: "Tuwaiq Academy & Alinma Bank FinTech Hackathon 2026",
      category: "FinTech & Open Banking",
      summary:
        "An AI-powered Open Banking aggregation platform engineered by Raqamat Team (فريق رقمات) for the Tuwaiq Academy & Alinma Bank Hackathon. It centralizes fragmented client financial data into a single verified identity, eliminating redundant document uploads and empowering internal bank divisions with tailored decision-making dashboards.",
      description:
        "Current retail and corporate banking services suffer from repetitive data entry, disparate verification procedures, and elongated customer journeys that restrict banks from making swift credit decisions. The Smart Financial Identity (الهوية المالية الذكية) bridges this divide by aggregating customer-consented Open Banking data, banking transactions, and SIMAH credit bureau metrics into an authenticated single record. Powered by Next.js 16, React 19, and Tailwind CSS v4, the platform translates raw client financials into dedicated operational views for Sales, Marketing, Risk Management, and AML/Fraud Compliance.",
      problemStatement:
        "Traditional banking requires customers to re-enter financial data and upload verification paperwork repeatedly across branches and services. This friction lengthens customer onboarding, increases abandonment, and delays credit risk evaluations.",
      solutionVision:
        "A unified digital financial file (ملف مالي موحد) built on Open Banking protocols and artificial intelligence. After explicit customer consent, the platform aggregates multi-source banking APIs, cleans and categorizes transaction history, and yields departmental dashboards tailored to each division's regulatory mandate.",
      impactStatement:
        "Accelerates loan underwriting and onboarding journeys, cuts telemarketing cold-call friction through data-backed product matching, and strengthens compliance against financial crime with automated risk thresholds.",
      departmentalDashboards: [
        {
          name: "Sales Dashboard",
          arabicName: "إدارة المبيعات",
          roleDesc:
            "Instant financing capacity calculation, pre-approved loan qualification, and personalized product recommendations based on verified affordability.",
        },
        {
          name: "Marketing Dashboard",
          arabicName: "إدارة التسويق",
          roleDesc:
            "Lifestyle and behavioral spending cluster analysis, enabling precision campaign targeting while eliminating redundant telemarketing calls.",
        },
        {
          name: "Risk Management Dashboard",
          arabicName: "إدارة المخاطر",
          roleDesc:
            "Real-time Debt Burden Ratio (DBR) calculations, credit limit simulations, and AI-driven factor breakdown aligned with Saudi central bank (SAMA) standards.",
        },
        {
          name: "Compliance & AML Dashboard",
          arabicName: "مكافحة الاحتيال وغسيل الأموال",
          roleDesc:
            "Automated Anti-Money Laundering transaction velocity checks, anomaly pattern recognition, and compliance risk threshold monitoring.",
        },
      ],
      dataSources: [
        "Customer-authorized profile inputs",
        "Open Banking transactional APIs (consented)",
        "SIMAH (الشركة السعودية للمعلومات الائتمانية) credit bureau data",
        "Predictive scoring indicators generated by AI models",
      ],
      dataPipeline: [
        "Data validation & completeness auditing",
        "Deduplication & redundant record removal",
        "Multi-currency & format normalization",
        "Classification & AI feature generation for financial health metrics",
      ],
      techStack: [
        "Next.js 16 (App Router)",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Recharts v3",
        "Framer Motion",
        "GSAP v3",
        "PostCSS & CSS Variables",
        "Open Banking REST APIs",
      ],
      keyHighlights: [
        "Spearheaded front-end architecture and system integration for Raqamat Team (فريق رقمات) at the Tuwaiq & Alinma Hackathon.",
        "Engineered 4 dedicated departmental dashboards: Sales, Marketing, Risk Management, and AML/Compliance.",
        "Integrated multi-source Open Banking data pipelines with automated data validation, deduplication, and normalization.",
        "Created real-time financial health visualizations (Recharts v3) and high-impact UI micro-interactions (GSAP & Framer Motion).",
        "Designed AI-assisted debt restructuring recommendations and automated credit scoring advice for users.",
      ],
      metrics: [
        { label: "Data Redundancy", value: "0% (Unified File)" },
        { label: "Targeted Dashboards", value: "4 Banking Divisions" },
        { label: "Performance", value: "< 120ms Fast Load" },
        { label: "Compliance Alignment", value: "SAMA & SIMAH Ready" },
      ],
      featured: true,
      links: {
        liveDemo: "https://unified-system-raqamat.netlify.app/",
        github: "https://github.com/MOHALI0/Raqamat",
      },
      imageGradient: "from-emerald-600 via-teal-600 to-cyan-500",
    },
  ] as Project[],

  skills: [
    {
      title: "Frontend Engineering",
      description: "Modern web standards, reactive state architectures, and intuitive user experiences.",
      skills: [
        { name: "Next.js (App Router)", level: "Advanced", iconName: "next", highlight: true },
        { name: "React 19", level: "Advanced", iconName: "react", highlight: true },
        { name: "TypeScript", level: "Proficient", iconName: "typescript", highlight: true },
        { name: "Tailwind CSS v4", level: "Advanced", iconName: "tailwind", highlight: true },
        { name: "Framer Motion", level: "Proficient", iconName: "motion", highlight: true },
        { name: "GSAP v3", level: "Proficient", iconName: "sparkles", highlight: true },
        { name: "Recharts v3 & Data Viz", level: "Proficient", iconName: "chart", highlight: true },
        { name: "HTML5 & Semantic Web", level: "Advanced", iconName: "html" },
      ],
    },
    {
      title: "Programming & Backend",
      description: "Strong algorithmic foundations, object-oriented principles, and API communications.",
      skills: [
        { name: "Python 3", level: "Advanced", iconName: "python", highlight: true },
        { name: "Java (OOP)", level: "Proficient", iconName: "java", highlight: true },
        { name: "SQL & Databases", level: "Proficient", iconName: "database", highlight: true },
        { name: "JavaScript (ES6+)", level: "Advanced", iconName: "javascript" },
        { name: "Open Banking REST APIs", level: "Advanced", iconName: "api", highlight: true },
        { name: "Data Structures & Algos", level: "Proficient", iconName: "code" },
      ],
    },
    {
      title: "Data Science & Analytical Tools",
      description: "Extracting actionable insights from raw data, building pipelines and statistical models.",
      skills: [
        { name: "Pandas", level: "Proficient", iconName: "pandas", highlight: true },
        { name: "NumPy", level: "Proficient", iconName: "numpy", highlight: true },
        { name: "Data Aggregation & Cleaning", level: "Advanced", iconName: "filter" },
        { name: "Credit Risk Scoring Logic", level: "Experienced", iconName: "shield" },
        { name: "Statistical Modeling", level: "Intermediate", iconName: "activity" },
      ],
    },
    {
      title: "Developer Tools & Workflow",
      description: "Version control, Linux environments, testing, and agile team execution.",
      skills: [
        { name: "Git & Version Control", level: "Advanced", iconName: "git", highlight: true },
        { name: "GitHub & Collaboration", level: "Advanced", iconName: "github" },
        { name: "Linux / Kali Environment", level: "Proficient", iconName: "terminal" },
        { name: "VS Code & Debugging", level: "Advanced", iconName: "vscode" },
        { name: "Software Engineering Best Practices", level: "Proficient", iconName: "layers" },
      ],
    },
  ] as SkillCategory[],

  milestones: [
    {
      period: "2026",
      year: "2026",
      title: "Lead Developer | Unified Financial File System (الهوية المالية الذكية)",
      role: "Lead Front-End Architect & Integrator — فريق رقمات (Raqamat Team)",
      organization: "Tuwaiq Academy & Alinma Bank FinTech Hackathon",
      location: "Riyadh / Saudi Arabia",
      badge: "FinTech Hackathon Lead",
      badgeType: "award",
      description:
        "Spearheaded engineering and technical presentation for the Smart Financial Identity platform with Raqamat Team. Built an AI-driven Open Banking dashboard centralizing client financials and creating dedicated workflows for Sales, Marketing, Risk, and AML compliance.",
      achievements: [
        "Architected full Next.js 16 + React 19 interactive platform with live Netlify deployment.",
        "Integrated Open Banking mock pipelines with automated deduplication and data cleaning.",
        "Delivered a live functioning demo (https://unified-system-raqamat.netlify.app/) and presentation pitch.",
      ],
      tags: ["Next.js 16", "Open Banking", "FinTech", "Leadership"],
    },
    {
      period: "2025 — Present",
      year: "2025+",
      title: "Event Organizer & Active Member",
      role: "Student Leader & Community Facilitator",
      organization: "Google Developer Student Clubs (GDSC)",
      location: "Jazan University",
      badge: "GDSC Leader",
      badgeType: "leadership",
      description:
        "Driving student developer growth by organizing technical workshops, hackathons, and hands-on coding sessions centered around modern web development, algorithms, and cloud tools.",
      achievements: [
        "Co-organized university-wide technical bootcamps and speaker workshops.",
        "Mentored junior computer science students in programming fundamentals and Git workflow.",
        "Bridged communications between external industry speakers and academic attendees.",
      ],
      tags: ["GDSC", "Community", "Workshops", "Mentorship"],
    },
    {
      period: "2024 — 2030 (Expected)",
      year: "2024+",
      title: "B.Sc. in Computer Science (GPA: 4.80 / 5.00)",
      role: "Undergraduate Student",
      organization: "Jazan University",
      location: "Jazan, Saudi Arabia",
      badge: "High Honors (4.80 GPA)",
      badgeType: "education",
      description:
        "Pursuing comprehensive computer science studies with consistent Dean's list academic standing. Rigorous focus on Data Structures & Algorithms, Object-Oriented Design in Java, Database Management (SQL), and Software Engineering.",
      achievements: [
        "Maintained an exceptional cumulative GPA of 4.80 / 5.00.",
        "Completed in-depth coursework: Algorithms, Software Architecture, Database Systems, Computer Networks.",
        "Applied theoretical principles directly to hackathons and production software architectures.",
      ],
      tags: ["Academic Excellence", "Computer Science", "Algorithms", "Java / SQL"],
    },
    {
      period: "Certified Ongoing",
      year: "2025",
      title: "Certified Community Volunteer (130+ Hours)",
      role: "Civic & Community Contributor",
      organization: "National Volunteer Portal / Saudi Initiatives",
      location: "Saudi Arabia",
      badge: "130+ Certified Hours",
      badgeType: "leadership",
      description:
        "Completed over 130 formally certified volunteer hours contributing to community initiatives, student events, and civic programs in alignment with Saudi Vision 2030 volunteerism goals.",
      achievements: [
        "Awarded official accreditation for dedicated civic service and event logistics.",
        "Demonstrated consistent reliability, time management, and team collaboration.",
      ],
      tags: ["Civic Duty", "Community Service", "Vision 2030", "Teamwork"],
    },
    {
      period: "2025",
      year: "2025",
      title: "Data Science & AI Certifications",
      role: "Continuous Professional Development",
      organization: "Coursera & University of Michigan",
      location: "Online / Credentialed",
      badge: "Certified Specialist",
      badgeType: "certification",
      description:
        "Earned verified credentials in practical data science, numerical computing, and AI prerequisites using Python, NumPy, and Pandas.",
      achievements: [
        "Introduction to Data Science in Python (Credential ID: HBFVELV1XMHI).",
        "Python Basics for Artificial Intelligence & Applied Data Handling.",
      ],
      tags: ["Data Science", "Python", "NumPy", "Pandas"],
    },
  ] as Milestone[],
};
