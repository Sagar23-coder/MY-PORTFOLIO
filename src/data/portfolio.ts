// Single source of truth for portfolio content.
// All content here is taken from Sagar's resume and his public GitHub repositories.
// To add a project or certification, append an entry to the relevant array.

export const profile = {
  name: "Sagar Joshi",
  role: "AI/ML Engineer & Full-Stack Developer",
  location: "Haldwani, Uttarakhand, India",
  email: "sj471846@gmail.com",
  phone: "+91 9557394928",
  github: "https://github.com/Sagar23-coder",
  githubHandle: "Sagar23-coder",
  linkedin: "https://www.linkedin.com/in/sagar-joshi-775b15343/",
  resume: "/Sagar_Joshi_Resume.pdf",
  resumeFilename: "Sagar_Joshi_Resume.pdf",
  availability: "Open to AI Engineer & ML internships",
  summary:
    "Detail-oriented B.Tech Computer Science & Engineering (AI & ML) student specializing in Retrieval-Augmented Generation (RAG) pipelines, Large Language Models (LLMs), and vector databases alongside full-stack application development.",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export const focusAreas = [
  {
    title: "Applied AI & LLMs",
    body: "Retrieval-Augmented Generation pipelines, vector embeddings, vector databases and LLM fine-tuning.",
    icon: "brain",
  },
  {
    title: "Machine Learning",
    body: "Regression and classification models with scikit-learn — preprocessing, feature engineering and evaluation.",
    icon: "chart",
  },
  {
    title: "Full-Stack & Mobile",
    body: "React Native + Expo apps backed by Node.js, Express and PHP REST APIs with JWT authentication.",
    icon: "layers",
  },
] as const;

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Ruhanix Creations OPC Pvt. Ltd.",
    location: "India",
    period: "Jun 2026 – Aug 2026",
    points: [
      "Engineered full-stack web and mobile applications using React Native, Expo, Node.js, Express, and PHP.",
      "Implemented secure RESTful APIs with JWT authentication for session management and user access control.",
      "Designed responsive interfaces and integrated machine learning models into live application backends.",
    ],
    stack: ["React Native", "Expo", "Node.js", "Express", "PHP", "JWT", "REST APIs"],
  },
];

export const education = {
  degree: "Bachelor of Technology — Computer Science & Engineering (AI & ML)",
  school: "Amrapali University",
  location: "Haldwani, Uttarakhand",
  period: "Expected June 2028",
};

export type ProjectCategory = "AI / ML" | "Full-Stack" | "Mobile" | "Desktop";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  built: string;
  details: string[];
  stack: string[];
  categories: ProjectCategory[];
  featured?: boolean;
  repo?: string;
  sourceNote?: string;
  visual: "rag" | "mobile" | "quiz" | "regression" | "tree";
};

export const projects: Project[] = [
  {
    slug: "ai-rag-search",
    title: "AI RAG Search Engine & Document Query System",
    tagline: "Ask questions of a document collection and get grounded, context-aware answers.",
    problem:
      "Keyword search over large document sets often misses context, making it hard to get precise answers to natural-language questions.",
    built:
      "A Retrieval-Augmented Generation (RAG) system that uses vector embeddings to retrieve relevant passages from document datasets and passes them to an LLM to generate answers.",
    details: [
      "Documents are embedded and stored in a vector database for semantic retrieval.",
      "Retrieved context is combined with the user query and answered by an LLM, orchestrated with LangChain.",
      "Fine-tuned open-source LLMs with a focus on more precise answers, lower search latency and better response quality.",
    ],
    stack: ["Python", "LLMs", "LangChain", "RAG", "Vector DB"],
    categories: ["AI / ML"],
    featured: true,
    sourceNote: "Repository not public yet",
    visual: "rag",
  },
  {
    slug: "ruhanix-crowdfunding",
    title: "Ruhanix Crowdfunding Platform",
    tagline: "A cross-platform mobile crowdfunding app with its own REST API backend.",
    problem:
      "Campaign creators and backers need a single mobile experience on both Android and iOS, connected to a reliable backend.",
    built:
      "A full-stack, cross-platform mobile crowdfunding application with custom REST API integration, built during my internship at Ruhanix Creations.",
    details: [
      "Cross-platform mobile client built with React Native and Expo.",
      "Node.js and Express REST API powering the app's data and user flows.",
      "MySQL database for persistent, database-driven functionality.",
    ],
    stack: ["React Native", "Expo", "Node.js", "Express", "MySQL"],
    categories: ["Full-Stack", "Mobile"],
    featured: true,
    sourceNote: "Company project — source is private",
    visual: "mobile",
  },
  {
    slug: "online-quiz-system",
    title: "Online Quiz System",
    tagline: "A desktop quiz application with admin and student roles and automatic grading.",
    problem:
      "Managing quizzes, questions and student results by hand is slow and error-prone — and academic software is often hard to maintain.",
    built:
      "An interactive Python desktop application with custom UI dialogs, automated score evaluation and SQLite storage, developed as a Total Quality Management (TQM) project focused on maintainability.",
    details: [
      "Admin module: create, update and delete quizzes and questions, configure settings and view student results.",
      "Student module: register, log in, attempt multiple-choice quizzes and view results.",
      "Automatic grading that evaluates submissions, calculates scores and stores attempts.",
      "Maintainability features: modular structure, centralized config, system settings, activity logs and code comments.",
    ],
    stack: ["Python", "Tkinter", "CustomTkinter", "SQLite"],
    categories: ["Desktop"],
    featured: true,
    repo: "https://github.com/Sagar23-coder/Online-Quiz-System-TQM",
    visual: "quiz",
  },
  {
    slug: "house-price-prediction",
    title: "House Price Prediction System",
    tagline: "Regression model that forecasts house prices from property area.",
    problem: "Estimating a fair house price is difficult without a data-driven baseline.",
    built:
      "A regression workflow in Python with scikit-learn that learns the relationship between house area (sq. ft.) and price, with interactive prediction.",
    details: [
      "Loads and prepares the area/price dataset with pandas and NumPy.",
      "Trains a linear regression model with scikit-learn.",
      "Visualizes the data and fitted regression line with Matplotlib.",
      "Accepts an area as input and returns a predicted price.",
    ],
    stack: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib", "Jupyter"],
    categories: ["AI / ML"],
    repo: "https://github.com/Sagar23-coder/House-Price-Prediction",
    visual: "regression",
  },
  {
    slug: "salary-decision-tree",
    title: "Decision Tree Classifier for Salary Analysis",
    tagline: "Predicts whether an employee earns more than 100K from company, role and degree.",
    problem:
      "Organizations want to understand how company, job role and education influence salary levels.",
    built:
      "A decision-tree classification model that analyzes salary data and predicts compensation tiers, with an interpretable tree visualization.",
    details: [
      "Encodes categorical features (company, job, degree) using LabelEncoder.",
      "Trains a DecisionTreeClassifier with entropy criterion and max depth of 3.",
      "Visualizes the decision tree to explain how each feature drives the prediction.",
    ],
    stack: ["Python", "scikit-learn", "pandas", "Matplotlib", "Jupyter"],
    categories: ["AI / ML"],
    repo: "https://github.com/Sagar23-coder/Decision-Tree-Classifier-for-Salary-Analysis",
    visual: "tree",
  },
];

export const projectFilters = ["All", "AI / ML", "Full-Stack", "Mobile", "Desktop"] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export function filterProjects(list: Project[], filter: ProjectFilter): Project[] {
  if (filter === "All") return list;
  return list.filter((p) => p.categories.includes(filter));
}

export const skillGroups = [
  {
    title: "AI & Machine Learning",
    icon: "brain",
    items: [
      "RAG",
      "LLMs",
      "Fine-tuning",
      "Vector Databases",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
    ],
  },
  {
    title: "Programming Languages",
    icon: "code",
    items: ["Python", "JavaScript", "SQL", "C / C++"],
  },
  {
    title: "Web & Mobile Development",
    icon: "layers",
    items: ["React Native", "Expo", "Node.js", "Express.js", "PHP", "REST APIs", "HTML / CSS"],
  },
  {
    title: "Databases & Tools",
    icon: "database",
    items: ["MySQL", "SQLite", "Oracle", "Git", "GitHub", "CI/CD Workflows", "Vercel", "Railway"],
  },
] as const;

export const certifications = [
  { name: "Certified System Administrator", issuer: "ServiceNow" },
  { name: "Data Analytics Specialist & Language Processing Certification", issuer: "YuvaIntern" },
  { name: "AI-ML Engineer Certification", issuer: "NSDC Approved" },
  { name: "Applied Machine Learning — Virtual Experience", issuer: "Forage" },
  { name: "Data Visualization, Python, SQL, JavaScript", issuer: "HackerRank" },
];

// Public repositories on github.com/Sagar23-coder (languages as reported by GitHub).
export const githubRepos = [
  {
    name: "Online-Quiz-System-TQM",
    language: "Python",
    description: "Tkinter desktop quiz app with admin/student roles, auto-grading and SQLite.",
    url: "https://github.com/Sagar23-coder/Online-Quiz-System-TQM",
  },
  {
    name: "House-Price-Prediction",
    language: "Jupyter Notebook",
    description: "Predicting house prices using linear regression in Python.",
    url: "https://github.com/Sagar23-coder/House-Price-Prediction",
  },
  {
    name: "Decision-Tree-Classifier-for-Salary-Analysis",
    language: "Jupyter Notebook",
    description: "Decision tree classifier predicting whether salary exceeds 100K.",
    url: "https://github.com/Sagar23-coder/Decision-Tree-Classifier-for-Salary-Analysis",
  },
  {
    name: "Insurance-Prediction",
    language: "Jupyter Notebook",
    description: "Logistic regression predicting insurance purchase from customer age.",
    url: "https://github.com/Sagar23-coder/Insurance-Prediction",
  },
];
