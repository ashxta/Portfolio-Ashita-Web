export const profile = {
  name: "Ashita",
  role: "AI Engineer",
  location: "Gurgaon, Haryana",
  email: "eeshosingh@gmail.com",
  phone: "+91 8218694843",
  github: "https://github.com/ashxta",
  linkedin: "https://www.linkedin.com/in/ashita-a-602001282/",
  resume: "/Resume%20Ashita%20AI%20Engineer.pdf",
  positioning:
    "I build intelligent systems that turn data into decisions — predictive ML models on one side, and the application or dashboard someone actually uses on the other.",
  summary: [
    "I sit where machine learning meets a real decision. That means Python, SQL and applied ML on one side, and something a person can act on — an app, a dashboard, a clear readout — on the other.",
    "Right now I'm finishing a BTech in Computer Science at SRM Institute of Science and Technology, working on predictive modelling and data-driven applications, and extending into large language models, RAG and agentic AI.",
  ],
};

export const metrics = [
  { value: 50, prefix: "\u20B9", suffix: "L", label: "Projected annual saving modelled in HR attrition work" },
  { value: 1000, suffix: "+", label: "Records analysed for content investment strategy" },
  { value: 8.9, suffix: "/10", decimals: 1, label: "CGPA through sixth semester, BTech CSE" },
  { value: 92, prefix: "Top ", label: "Finalist from 30,000+ nationwide, TechM Code 2026" },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "SQL", "C / C++", "HTML", "CSS"],
  },
  {
    label: "Machine learning",
    items: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Classification",
      "Clustering",
      "Feature engineering",
      "Predictive modelling",
      "SMOTE",
    ],
  },
  {
    label: "Data & BI",
    items: ["Power BI", "MySQL", "Excel", "Matplotlib", "Data cleaning", "Preprocessing"],
  },
  {
    label: "Platforms",
    items: ["AWS", "Git", "Google Colab", "VS Code", "Streamlit"],
  },
  {
    label: "Currently learning",
    items: ["LLMs", "RAG", "LangChain", "Agentic AI", "NLP", "Vector databases"],
  },
  {
    label: "Working with people",
    items: [
      "Problem solving",
      "Analytical thinking",
      "Team collaboration",
      "Critical thinking",
      "Adaptability",
    ],
  },
];

export type Project = {
  index: string;
  title: string;
  year: string;
  status: "Shipped" | "In progress";
  premise: string;
  outcomes: string[];
  stack: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "HR attrition prediction",
    year: "2025",
    status: "Shipped",
    premise:
      "Replacing an employee costs far more than keeping one. This model flags who is likely to leave while there is still time to act.",
    outcomes: [
      "Classification and clustering models identify at-risk employees, projecting a \u20B950L annual reduction in replacement cost through revised salary and retention strategy.",
      "Handled class imbalance with SMOTE and shipped department-level risk dashboards with automated alerts, so HR leadership sees the problem before the resignation letter.",
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "SMOTE"],
    github: "https://github.com/ashxta/HR-Data-Analytics-ML",
  },
  {
    index: "02",
    title: "Netflix catalogue analysis",
    year: "2025",
    status: "Shipped",
    premise:
      "A catalogue is a portfolio. This work asks which genres and regions actually earn their commissioning budget.",
    outcomes: [
      "Analysis of 1,000+ titles showed that 65% of top performers sat in just three genres, giving senior decision-makers a clear investment direction.",
      "Power BI dashboards track KPIs, genre performance and regional content gaps in real time.",
    ],
    stack: ["Python", "Power BI", "MySQL", "Matplotlib"],
    github: "https://github.com/ashxta/Netflix-Data-Analysis",
  },
];

export const education = {
  school: "SRM Institute of Science and Technology",
  degree: "BTech, Computer Science and Engineering",
  period: "August 2023 — May 2027",
  detail: "CGPA 8.9 / 10 through sixth semester",
};

export const certifications = [
  { name: "SAP Implementation Consultant — End-to-End Business Processes", issuer: "SAP" },
  { name: "Google Data Analytics", issuer: "Coursera" },
  { name: "Oracle Cloud Infrastructure Foundations", issuer: "Oracle" },
  { name: "CS50's Introduction to Programming with Python", issuer: "Harvard, edX" },
];

export const activities = [
  {
    label: "Hackathons",
    body: "Top 92 finalists from 30,000+ applicants nationwide at TechM Code 2026. National semi-finalist, Flipkart Grid 7.0.",
  },
  {
    label: "Volunteering",
    body: "Choti Si Asha — supporting women through digital literacy initiatives.",
  },
  {
    label: "Leadership",
    body: "Outreach, event analytics and sponsorship for SRM MUN, E-Cell and dBug Labs.",
  },
];
