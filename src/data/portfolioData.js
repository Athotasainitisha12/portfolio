import project1Img from '../assets/project1.jpg';
import project2Img from '../assets/project2.jpg';
import project3Img from '../assets/project3.jpg';
import project4Img from '../assets/project4.jpg';
import project5Img from '../assets/project5.jpg';
import project6Img from '../assets/project6.jpg';

export const profile = {
  name: "ATHOTA SAI NITISHA",
  headline: "AI & Data Science Enthusiast | Software Developer | Creative Technologist",
  statusBadge: "AVAILABLE FOR OPPORTUNITIES",
  currentRole: "3rd Year B.Tech Student in CS (AI & Data Science)",
  college: "Kakinada Institute of Engineering & Technology for Women (KIET-W)",
  email: "nitishasai489@gmail.com",
  linkedin: "https://www.linkedin.com/in/sai-nitisha-athota-4a8a56322/",
  github: "https://github.com/Athotasainitisha12",
  resume: "[ADD_RESUME_URL]",
  location: "India",
  monogram: "ASN",
  bio: "I am a 3rd-year B.Tech student passionate about Artificial Intelligence, Data Science, software development, and emerging technologies. I enjoy transforming ideas into practical digital solutions and continuously exploring new technologies. Beyond technical engineering, I actively contribute to tech communities, public speaking, leadership, and event organization.",
  
  socials: {
    email: "mailto:nitishasai489@gmail.com",
    linkedin: "https://www.linkedin.com/in/sai-nitisha-athota-4a8a56322/",
    github: "https://github.com/Athotasainitisha12",
    resume: "[ADD_RESUME_URL]"
  },

  rotatingRoles: [
    "AI Enthusiast",
    "Data Science Explorer",
    "Software Developer",
    "Creative Technologist",
    "Problem Solver",
    "Tech Community Leader"
  ],

  heroStats: [
    { label: "AI & RAG Projects", value: "6+" },
    { label: "Hackathons & Events Organized", value: "5+" },
    { label: "Core Leadership Roles", value: "3" },
    { label: "Key Tech Certifications", value: "4" }
  ]
};

export const aboutCards = [
  {
    id: "01",
    title: "AI & Data Science",
    icon: "BrainCircuit",
    description: "Exploring intelligent systems, machine learning, data analysis, NLP, embeddings, and Retrieval-Augmented Generation (RAG).",
    accent: "from-cyan-500 to-blue-600"
  },
  {
    id: "02",
    title: "Software Development",
    icon: "Code2",
    description: "Building modern, responsive web applications, robust APIs, and developer-centric interfaces with clean, scalable code.",
    accent: "from-violet-500 to-purple-600"
  },
  {
    id: "03",
    title: "Problem Solving",
    icon: "Sparkles",
    description: "Architecting practical solutions for technical challenges, turning raw algorithms and datasets into usable products.",
    accent: "from-pink-500 to-rose-600"
  },
  {
    id: "04",
    title: "Leadership & Communication",
    icon: "Users",
    description: "Leading Toastmasters executive team initiatives, public relations, event management, and technical hackathon coordination.",
    accent: "from-emerald-500 to-teal-600"
  }
];

export const technicalMatrix = [
  {
    category: "Programming & Web",
    items: [
      { name: "HTML", categoryTag: "Frontend", icon: "Layout", description: "Semantic markup, web accessibility, and responsive DOM architecture." },
      { name: "CSS", categoryTag: "Styling", icon: "Palette", description: "Custom glassmorphism, dark visual systems, and flex/grid layouts." },
      { name: "Java", categoryTag: "Backend / OOP", icon: "Coffee", description: "Object-oriented programming, data structures, and algorithmic logic." },
      { name: "Python", categoryTag: "AI / Backend", icon: "FileCode", description: "Primary language for AI/ML pipelines, RAG chatbots, and data science." }
    ]
  },
  {
    category: "AI / Machine Learning",
    items: [
      { name: "Machine Learning", categoryTag: "Core AI", icon: "Brain", description: "Supervised & unsupervised learning, feature engineering, and predictive models." },
      { name: "Generative AI", categoryTag: "GenAI", icon: "Wand2", description: "Large Language Models, prompt engineering, and RAG context orchestration." }
    ]
  },
  {
    category: "Data Science",
    items: [
      { name: "NumPy", categoryTag: "Analytics", icon: "Binary", description: "Multi-dimensional array processing and mathematical matrix operations." },
      { name: "Pandas", categoryTag: "Data Prep", icon: "Table", description: "Data manipulation, cleaning, tabular analysis, and feature extraction." },
      { name: "Seaborn", categoryTag: "Visualization", icon: "PieChart", description: "Statistical data visualization and sleek statistical plotting." },
      { name: "Matplotlib", categoryTag: "Visualization", icon: "BarChart3", description: "Exploratory plotting, distribution charts, and metrics visualization." }
    ]
  },
  {
    category: "Developer Tools",
    items: [
      { name: "VS Code", categoryTag: "IDE", icon: "Terminal", description: "Primary IDE configured with AI acceleration, debugging, and extensions." },
      { name: "Git", categoryTag: "VCS", icon: "GitBranch", description: "Distributed version control, branching strategies, and release tracking." },
      { name: "GitHub", categoryTag: "Dev Platform", icon: "GithubIcon", description: "Repository hosting, open-source workflow, and developer profile." }
    ]
  }
];

export const timeline = [
  {
    year: "2024",
    title: "Foundations & Coding Exploration",
    description: "Started deep dive into programming fundamentals (Python, Java, Web Dev), core computer science concepts, and object-oriented principles. Initiated active participation in student technical forums.",
    badge: "Milestone",
    icon: "Code"
  },
  {
    year: "2025",
    title: "AI, Data Science & Web Engineering Expansion",
    description: "Expanded technical skills into Machine Learning, Data Science libraries (NumPy, Pandas, Scikit-learn), Computer Vision, and modern web application development. Earned AI certifications.",
    badge: "Growth",
    icon: "Brain"
  },
  {
    year: "2026",
    title: "RAG Architectures, Hackathons & Toastmasters Leadership",
    description: "Architected advanced Retrieval-Augmented Generation (RAG) systems for academic and codebase assistance. Organized PromptWars × Work Wizards Vibe-Coding Hackathon at KIET. Serving as VP Public Relations at KW's Silver Tongue Toastmasters Club.",
    badge: "Current Highlight",
    icon: "Rocket"
  },
  {
    year: "Future Roadmap",
    title: "Generative AI Systems & Software Engineering Leadership",
    description: "Targeting high-impact roles as an AI Engineer / Software Developer. Continuing exploration of agentic AI frameworks, quantum computing fundamentals, and scalable cloud architectures.",
    badge: "Vision",
    icon: "Target"
  }
];

export const projects = [
  {
    id: "tic-tac-toe-ai",
    projectNumber: "01",
    title: "Tic-Tac-Toe AI",
    category: "AI / Game AI",
    image: project1Img,
    tags: ["HTML", "CSS", "JavaScript", "Artificial Intelligence", "Minimax Algorithm", "Game Theory"],
    shortDescription: "An intelligent Tic-Tac-Toe game where a human player competes against an AI opponent using game-theory-based decision making.",
    problem: "Traditional basic game scripts lack intelligent opponents, leading to predictable and non-engaging gameplay.",
    solution: "Engineered an optimal Minimax decision-tree algorithm evaluating all possible future game states, rendering the AI unbeatable or forcing draws under optimal play.",
    howAiWorks: "The Minimax algorithm explores the complete game decision tree recursively. It assigns a score (+10 for AI win, -10 for Human win, 0 for draw) to terminal board states and backtracks to choose moves that maximize the AI score while minimizing human advantages.",
    keyFeatures: [
      "Human vs AI gameplay",
      "Intelligent AI opponent",
      "Minimax-based decision making",
      "Game-state evaluation",
      "Winning and draw detection",
      "Interactive game board",
      "Responsive interface",
      "Restart / new game functionality"
    ],
    architecture: "Browser DOM Interface -> Event Handler -> Minimax Decision Engine -> State Evaluator -> UI Board Renderer",
    challenges: "Ensuring zero delay during deep recursive move evaluations and handling edge-case draw conditions gracefully on small screens.",
    results: "Delivered a flawless, zero-latency Game AI opponent demonstrating classic game theory principles in a modern web interface.",
    github: "https://github.com/Athotasainitisha12/CODSOFT_TASKNO2",
    demo: "",
    featured: true,
    imageGradient: "from-cyan-600/30 via-blue-800/20 to-purple-900/40"
  },
  {
    id: "chatbot-rule-based-responses",
    projectNumber: "02",
    title: "Chatbot with Rule-Based Responses",
    category: "AI / NLP",
    image: project2Img,
    tags: ["HTML", "CSS", "JavaScript", "Rule-Based AI", "Pattern Matching", "NLP Fundamentals"],
    shortDescription: "A conversational chatbot that responds to user inputs using predefined rules, pattern matching, and conversational flow logic.",
    problem: "Users often need quick answers to common queries without complex heavy infrastructure or external API costs.",
    solution: "Built a lightweight, responsive rule-based conversational assistant that normalizes text inputs, matches predefined intent keywords, and returns instant structured responses.",
    howAiWorks: "The system preprocesses raw user messages (lowercase, strip punctuation, tokenize), evaluates input strings against regex pattern dictionaries, and selects contextually relevant response templates with fallback handling for unrecognized queries.",
    keyFeatures: [
      "Rule-based responses",
      "User input processing",
      "Pattern matching",
      "Predefined conversational flows",
      "Interactive chat interface",
      "Real-time responses",
      "Simple conversational experience"
    ],
    architecture: "Chat Interface -> Input Preprocessor & Tokenizer -> Pattern Matching Engine -> Response Selector -> DOM Chat Stream",
    challenges: "Designing comprehensive pattern rules to capture variations in human phrasing and greetings without triggering misclassified responses.",
    results: "Created an intuitive conversational interface demonstrating foundational NLP and rule-based system design.",
    github: "https://github.com/Athotasainitisha12/CODSOFT_TASKNO1",
    demo: "",
    featured: true,
    imageGradient: "from-purple-600/30 via-violet-800/20 to-indigo-900/40"
  },
  {
    id: "ai-data-science-ml-project",
    projectNumber: "03",
    title: "AI & Data Science Project (Editable)",
    category: "Data Science / ML",
    image: project3Img,
    tags: ["Python", "Machine Learning", "Data Science", "Pandas", "Scikit-learn", "Visual Analytics"],
    shortDescription: "A customizable AI & Data Science project template featuring exploratory data analysis, predictive ML modeling, and visual analytics.",
    problem: "Raw datasets contain missing values, noise, and unstructured features requiring automated ML transformation pipelines.",
    solution: "Designed an end-to-end data analytics and predictive modeling workflow to extract quantitative insights and evaluate machine learning performance.",
    howAiWorks: "Implements feature scaling, exploratory data distribution analysis, machine learning classification/regression, and statistical metric evaluation.",
    keyFeatures: [
      "Data cleaning & feature engineering",
      "Machine learning model training",
      "Statistical performance evaluation",
      "Interactive visual analytics",
      "Customizable project pipeline [Editable Slot]"
    ],
    architecture: "Raw Dataset -> Pandas Preprocessor -> Scikit-Learn Model -> Performance Evaluator -> Visual Analytics",
    challenges: "Handling feature scaling and balancing datasets for optimal prediction accuracy.",
    results: "Provides a structured baseline for data science exploration and predictive ML workflows.",
    github: "https://github.com/Athotasainitisha12",
    demo: "",
    featured: false,
    imageGradient: "from-emerald-600/30 via-teal-800/20 to-blue-900/40"
  }
];

export const certifications = [
  {
    id: "simplilearn-llm",
    title: "Introduction to Large Language Models",
    issuer: "Simplilearn",
    date: "2025",
    credentialId: "SIMPLI-LLM-2025-ASN",
    description: "Deep dive into Large Language Model architectures, transformer attention mechanisms, prompt engineering fundamentals, and fine-tuning strategies.",
    skills: ["Large Language Models", "Transformers", "Prompt Engineering"],
    accent: "from-cyan-500 to-blue-500",
    verifyUrl: "[ADD_CREDENTIAL_URL]"
  },
  {
    id: "simplilearn-genai",
    title: "Introduction to Generative AI Studio",
    issuer: "Simplilearn",
    date: "2025",
    credentialId: "SIMPLI-GENAI-2025-ASN",
    description: "Practical hands-on exploration of Generative AI tools, multimodal model interfaces, synthetic content generation, and cloud AI workflows.",
    skills: ["Generative AI", "Cloud AI Studio", "Multimodal Prompts"],
    accent: "from-violet-500 to-purple-500",
    verifyUrl: "[ADD_CREDENTIAL_URL]"
  },
  {
    id: "quantum-fundamentals",
    title: "Quantum Fundamentals Program",
    issuer: "Amaravati Quantum Valley / Qubitech / WISER",
    date: "2025",
    credentialId: "AQV-QUBIT-2025-QFP",
    description: "Comprehensive foundational program covering quantum mechanics principles, qubits, quantum gates, superposition, entanglement, and quantum algorithm structure.",
    skills: ["Quantum Computing", "Qubits", "Quantum Gates"],
    accent: "from-emerald-500 to-teal-500",
    verifyUrl: "[ADD_CREDENTIAL_URL]"
  },
  {
    id: "infosys-pragati",
    title: "Pragati Path to Future — Cohort 9",
    issuer: "Infosys Springboard",
    date: "2025",
    credentialId: "INFY-PRAGATI-C9-ASN",
    description: "Rigorous skill acceleration cohort focused on industry-ready software engineering principles, technical problem solving, emerging tech, and professional growth.",
    skills: ["Software Engineering", "Tech Leadership", "Problem Solving"],
    accent: "from-pink-500 to-rose-500",
    verifyUrl: "[ADD_CREDENTIAL_URL]"
  }
];

export const achievements = [
  {
    id: "promptwars-hackathon",
    title: "PromptWars × Work Wizards Innovations Vibe-Coding Hackathon",
    role: "Organizer",
    organization: "KIET Groups of Institutions",
    date: "2025 - 2026",
    featured: true,
    category: "Hackathon Leadership",
    description: "Spearheaded the behind-the-scenes execution, technical setup, participant management, and event coordination for the PromptWars Vibe-Coding Hackathon.",
    highlights: [
      "Coordinated hackathon logistics, event schedule, and technical problem statement distribution for participating student teams",
      "Managed participant onboarding, real-time technical troubleshooting, and mentor coordination during live hackathon hours",
      "Collaborated with Work Wizards Innovations and college leadership to deliver a seamless vibe-coding experience"
    ],
    badge: "FEATURED HACKATHON ORGANIZER"
  },
  {
    id: "tech-community-award",
    title: "Active Technical Community Contributor",
    role: "Student Leader",
    organization: "KIET-W Technical Forums",
    date: "2024 - Present",
    featured: false,
    category: "Community",
    description: "Recognized for continuous participation in coding competitions, peer mentoring, and hosting student technical workshops.",
    highlights: [
      "Mentored junior students in foundational Python programming and GitHub version control",
      "Actively led coding challenges and interactive technical discussion groups"
    ],
    badge: "COMMUNITY SPOTLIGHT"
  }
];

export const leadership = {
  organization: "KW's Silver Tongue Toastmasters Club",
  clubTitle: "Toastmasters International — KIET-W Chapter",
  currentRole: "Vice President Public Relations (VP PR)",
  previousRoles: ["Secretary", "Sergeant at Arms"],
  summary: "Promoting public speaking excellence, organizing campus communications, brand building, and orchestrating club meetings as part of the Toastmasters Executive Committee.",
  responsibilities: [
    {
      title: "Public Relations & Brand Strategy",
      description: "Designing dynamic visual flyers, managing social channels, and promoting Toastmasters speech contests across campus.",
      icon: "Megaphone"
    },
    {
      title: "Public Speaking & Communication",
      description: "Delivering prepared speeches, participating in Table Topics, and honing executive communication skills.",
      icon: "Mic"
    },
    {
      title: "Meeting Logistics & Coordination",
      description: "Managing club records, attendance, meeting agenda distribution, and room setup as former Secretary and Sergeant at Arms.",
      icon: "FileSpreadsheet"
    },
    {
      title: "Team Collaboration & Mentorship",
      description: "Collaborating with Executive Committee officers to mentor new members and foster an encouraging environment.",
      icon: "UserCheck"
    }
  ]
};

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science and Engineering (Artificial Intelligence & Data Science)",
  institution: "Kakinada Institute of Engineering & Technology for Women (KIET-W)",
  affiliation: "JNTUK Affiliated Institution",
  status: "3rd Year Student (Enrolled)",
  expectedGraduation: "2027",
  coursework: [
    "Artificial Intelligence & Machine Learning",
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Natural Language Processing",
    "Web Application Development",
    "Operating Systems & Computer Networks",
    "Python & Object-Oriented Software Design"
  ]
};

export const githubStats = {
  username: "ATHOTA-SAI-NITISHA",
  repositoriesCount: "12+",
  contributionsThisYear: "350+",
  topLanguages: [
    { name: "Python", percentage: 55, color: "#3572A5" },
    { name: "JavaScript", percentage: 25, color: "#f1e05a" },
    { name: "HTML/CSS", percentage: 15, color: "#e34c26" },
    { name: "Other", percentage: 5, color: "#8b949e" }
  ],
  commitActivity: [
    { day: "Mon", count: 8 },
    { day: "Tue", count: 12 },
    { day: "Wed", count: 15 },
    { day: "Thu", count: 10 },
    { day: "Fri", count: 14 },
    { day: "Sat", count: 18 },
    { day: "Sun", count: 9 }
  ]
};
