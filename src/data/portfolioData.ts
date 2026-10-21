export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  category: "FinTech & Web" | "Systems & Python" | "Data Science & AI";
  organization?: string;
  summary: string;
  description: string;
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
    level: string; // e.g. "Advanced", "Proficient", "Experienced"
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
      "Computer Science student at Jazan University with a 4.80 / 5.00 GPA and Lead Developer experienced in architecting modern web applications, scalable data pipelines, and real-time interactive dashboards.",
    location: "Najran, Saudi Arabia",
    status: {
      available: true,
      text: "Available for new opportunities & projects",
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
    { name: "Jazan University", role: "B.Sc. Computer Science" },
    { name: "Coursera", role: "Certified Data Science & Python" },
  ],

  competencies: [
    {
      number: "01",
      title: "Frontend Architecture & UI/UX",
      description:
        "Designing sleek, component-driven interfaces with Next.js App Router, React 19, TypeScript, and Tailwind CSS. Obsessed with high performance, micro-interactions, and accessibility.",
      icon: "layout",
      tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
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

  projects: [
    {
      id: "unified-financial-system",
      title: "Unified Financial File System",
      subtitle: "AI-Driven FinTech Data Aggregator & Credit Advisor",
      role: "Lead Developer",
      organization: "Tuwaiq Academy & Alinma Bank FinTech Hackathon",
      category: "FinTech & Web",
      summary:
        "Spearheaded front-end and system integration for an AI-powered financial aggregation platform designed to unify customer profiles and automate credit-risk evaluation.",
      description:
        "Developed during the high-stakes Tuwaiq Academy & Alinma Bank FinTech Hackathon, this enterprise-grade platform centralizes multi-source banking APIs into clean, unified profiles. It features a real-time interactive analytics dashboard for internal loan officers, eliminating telemarketing redundancies, while an embedded AI assistant calculates individual credit factors to provide automated, actionable debt restructuring advice.",
      techStack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion", "REST APIs"],
      keyHighlights: [
        "Integrated multi-source RESTful APIs to centralize, sanitize, and unify client financial data across banking departments.",
        "Built real-time interactive analytics dashboards with Next.js, React, and Recharts enabling precision loan risk evaluation.",
        "Engineered an automated AI advisory module analyzing individual credit factors to generate tailored scoring recommendations.",
        "Crafted smooth, responsive micro-interactions using Tailwind CSS and Framer Motion to clearly convey financial metrics to stakeholders.",
      ],
      metrics: [
        { label: "Data Centralization", value: "100%" },
        { label: "Dashboard Latency", value: "< 120ms" },
        { label: "Role", value: "Lead Architect" },
      ],
      featured: true,
      links: {
        liveDemo: "https://raqamat.vercel.app",
        github: "https://github.com/MOHALI0/Raqamat",
      },
      imageGradient: "from-blue-600 via-indigo-600 to-cyan-500",
    },
    {
      id: "raqamat-platform",
      title: "Raqamat FinTech Analytics Engine",
      subtitle: "Enterprise Risk Assessment, AML & Financing Suite",
      role: "Full-Stack Developer",
      organization: "Independent FinTech Innovation",
      category: "FinTech & Web",
      summary:
        "A full-stack banking intelligence dashboard featuring Anti-Money Laundering (AML) monitoring, customer 360 dossiers, financing capacity modeling, and role-based permissions.",
      description:
        "A modern web application built with Next.js 16 and Tailwind CSS v4. Incorporates comprehensive banking compliance modules, automated risk score calculation, credit capacity simulation, and workflow approvals tailored for Saudi financial institutions (SAMA compliance alignment).",
      techStack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Lucide Icons", "Recharts", "Zod Validation"],
      keyHighlights: [
        "Interactive KPI monitoring for financial capacity, monthly obligations, and risk factors.",
        "Anti-Money Laundering (AML) transaction compliance checks with automated alerting thresholds.",
        "Dynamic workflow state machine managing request review, compliance approval, and disbursement tracking.",
        "Clean glassmorphism aesthetic with high-contrast accessibility and dark/light mode themes.",
      ],
      metrics: [
        { label: "Compliance Alignment", value: "SAMA Ready" },
        { label: "Workflow States", value: "6 Stages" },
      ],
      featured: true,
      links: {
        github: "https://github.com/MOHALI0/Raqamat",
      },
      imageGradient: "from-emerald-600 via-teal-600 to-cyan-600",
    },
    {
      id: "autonomous-coffee-machine",
      title: "Autonomous Coffee Dispensing Architecture",
      subtitle: "Object-Oriented System Modeling & Telemetry Engine",
      role: "Software Developer",
      category: "Systems & Python",
      summary:
        "Scalable Python system implementing finite state machine logic for recipe composition, live ingredient inventory tracking, and simulated multi-currency payment handling.",
      description:
        "Engineered an automated beverage preparation simulator adhering to strict Object-Oriented Programming (OOP) paradigms. The system features real-time inventory threshold monitoring, dynamic currency transaction verification with exact change computation, and an interactive diagnostic shell for maintenance audits.",
      techStack: ["Python 3", "OOP Architecture", "State Machines", "Error Handling", "CLI Shell"],
      keyHighlights: [
        "Engineered decoupled classes for resource telemetry, payment processing, and drink preparation recipes.",
        "Built automatic inventory deduction and low-stock alerting to prevent mid-cycle formulation failures.",
        "Implemented secure transaction rollback logic guaranteeing zero coin loss upon transaction cancellation.",
      ],
      metrics: [
        { label: "Architecture", value: "Modular OOP" },
        { label: "Inventory Accuracy", value: "100%" },
      ],
      featured: false,
      links: {
        github: "https://github.com/MOHALI0",
      },
      imageGradient: "from-amber-600 via-orange-600 to-rose-600",
    },
    {
      id: "data-science-pipeline",
      title: "Python Data Science & Analytics Suite",
      subtitle: "Exploratory Analysis, Numerical Pipelines & Statistical Modeling",
      role: "Data Analyst & Programmer",
      organization: "Coursera & Academic Research",
      category: "Data Science & AI",
      summary:
        "Comprehensive numerical processing and statistical analysis suite utilizing NumPy and Pandas for data munging, regression models, and exploratory visualizations.",
      description:
        "Developed a suite of Python data exploration scripts supporting academic research and practical data analysis. Includes automated handling of sparse data, tabular aggregations, correlation matrix evaluations, and visual plotting of complex statistical distributions.",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Wrangling", "Statistical Inference"],
      keyHighlights: [
        "Built automated ETL pipelines transforming raw, unorganized CSV datasets into clean multidimensional DataFrames.",
        "Conducted deep statistical profiling to detect anomalies, outliers, and trend distributions.",
        "Formed the practical foundation for Coursera Data Science in Python certification.",
      ],
      metrics: [
        { label: "Data Quality", value: "Zero Null Leaks" },
        { label: "Libraries", value: "NumPy / Pandas" },
      ],
      featured: false,
      links: {
        github: "https://github.com/MOHALI0",
      },
      imageGradient: "from-purple-600 via-violet-600 to-indigo-600",
    },
    {
      id: "crypto-decoder-game",
      title: "Cryptographic Decoder & Algorithmic Search Engine",
      subtitle: "Cipher Decryption Utilities & Logarithmic Search Simulation",
      role: "Systems & Security Programmer",
      category: "Systems & Python",
      summary:
        "Security-focused algorithmic tools implementing custom cipher translation, pattern substitution, and optimal binary search game logic.",
      description:
        "A suite of algorithms tackling string manipulation, substitution cryptography, and logarithmic search operations. Includes custom ASCII rotation decoders and an adaptive number guessing engine optimized for minimal time complexity O(log n).",
      techStack: ["Python", "Algorithms", "Cryptography", "Binary Search", "Data Structures"],
      keyHighlights: [
        "Implemented symmetric shift encryption/decryption routines with arbitrary offset handling.",
        "Designed optimal divide-and-conquer binary search feedback loop ensuring minimal guess attempts.",
        "Robust input validation and defensive programming against malicious terminal inputs.",
      ],
      metrics: [
        { label: "Search Complexity", value: "O(log n)" },
        { label: "Cipher Versatility", value: "Custom Keys" },
      ],
      featured: false,
      links: {
        github: "https://github.com/MOHALI0",
      },
      imageGradient: "from-zinc-700 via-slate-700 to-zinc-900",
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
        { name: "Tailwind CSS", level: "Advanced", iconName: "tailwind", highlight: true },
        { name: "Framer Motion", level: "Proficient", iconName: "motion", highlight: true },
        { name: "HTML5 & Semantic Web", level: "Advanced", iconName: "html" },
        { name: "CSS3 / Modern Layouts", level: "Advanced", iconName: "css" },
        { name: "Recharts & Data Viz", level: "Proficient", iconName: "chart" },
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
        { name: "RESTful API Integration", level: "Advanced", iconName: "api", highlight: true },
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
      title: "Lead Developer | Unified Financial File System",
      role: "Lead Front-End Architect & Integrator",
      organization: "Tuwaiq Academy & Alinma Bank FinTech Hackathon",
      location: "Riyadh / Saudi Arabia",
      badge: "FinTech Hackathon Lead",
      badgeType: "award",
      description:
        "Led engineering and technical presentation for a flagship AI financial aggregator designed to centralize consumer banking records across organizational branches, earning commendation from senior industry mentors.",
      achievements: [
        "Architected complete front-end system with Next.js, React, and TypeScript within intense hackathon timeline.",
        "Integrated multi-source mock banking APIs and automated credit evaluation modules.",
        "Delivered a live functioning demo and executive deck to fintech judging panels.",
      ],
      tags: ["Next.js", "AI Credit", "Hackathon", "Leadership"],
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
