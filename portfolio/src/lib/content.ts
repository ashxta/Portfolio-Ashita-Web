export const profile = {
  name: "Ashita",
  role: "Data & AI Analyst",
  location: "Gurgaon, Haryana",
  email: "eeshosingh@gmail.com",
  phone: "+91 8218694843",
  github: "https://github.com/ashxta",
  linkedin: "https://www.linkedin.com/in/ashita-a-602001282/",
  positioning:
    "I build models and dashboards that answer the question a business actually asked — who is about to leave, what to commission next, where the money goes.",
  summary: [
    "I work at the point where analysis turns into a decision. That means machine learning and SQL on one side, and the dashboard a department head opens on Monday morning on the other.",
    "Right now I'm finishing a BTech in Computer Science at SRM Institute of Science and Technology, and spending my time on predictive modelling, business intelligence, and the ERP and process-analysis side of consulting work.",
  ],
};

export const metrics = [
  { value: 50, prefix: "\u20B9", suffix: "L", label: "Projected annual saving modelled in HR attrition work" },
  { value: 1000, suffix: "+", label: "Records analysed for content investment strategy" },
  { value: 8.9, suffix: "/10", decimals: 1, label: "CGPA through sixth semester, BTech CSE" },
  { value: 4, label: "Certifications across analytics, cloud and ERP" },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "SQL", "C / C++", "HTML", "CSS"],
  },
  {
    label: "Analysis & ML",
    items: ["Pandas", "NumPy", "Scikit-learn", "SMOTE", "Matplotlib"],
  },
  {
    label: "Data & BI",
    items: ["Power BI", "MySQL", "Excel", "Data cleaning", "Preprocessing"],
  },
  {
    label: "ERP & consulting",
    items: ["SAP implementation", "Business process analysis", "Digital transformation"],
  },
  {
    label: "Platforms",
    items: ["AWS", "GitHub", "Google Colab", "VS Code"],
  },
  {
    label: "Working with people",
    items: [
      "Client collaboration",
      "Stakeholder engagement",
      "Insight presentation",
      "Public speaking",
      "Critical thinking",
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
      "Department-level risk dashboards with automated alerts, so HR leadership sees the problem before the resignation letter.",
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
  {
    index: "03",
    title: "AI data analyzer",
    year: "2025",
    status: "Shipped",
    premise:
      "Most reporting time is spent cleaning and describing data, not thinking about it. This tool takes over the first part.",
    outcomes: [
      "Automates cleaning, visualisation and summarisation from an uploaded file, cutting reporting effort by roughly 60%.",
      "A language model API turns the resulting tables into written insight anyone on the team can read.",
    ],
    stack: ["Streamlit", "Python", "Hugging Face"],
    github: "https://github.com/ashxta/AI-Data-Analyzer",
    demo: "https://ai-data-insight.streamlit.app/",
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
    body: "Finalist at TechM Code 2026 by Tech Mahindra.",
  },
  {
    label: "Volunteering",
    body: "Choti Si Asha — entrepreneurship and digital literacy training for underprivileged women.",
  },
  {
    label: "Leadership",
    body: "Outreach, event analytics and sponsorship for SRM MUN, E-Cell and dBug Labs.",
  },
];
