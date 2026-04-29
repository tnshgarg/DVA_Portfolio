const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Credit Card Customer Retention Analytics",
    description: "Data-driven analysis of a bank’s credit card subscription outreach campaign using 30,488 customer records. Identified high-conversion segments and optimized marketing efficiency to improve campaign ROI by analyzing demographic profiling and campaign metrics.",
    image: `${base}Customer_Churn_Dashboard.png`,
    tags: ["Data Analytics", "Google Sheets", "Pivot Tables"],
    github: "https://github.com/tnshgarg/SectionC_Group19_CustomerChurn/"
  },
  {
    name: "Diabetes Readmission Analysis",
    description: "Analyzed a decade of clinical data from 130 US hospitals to predict 30-day readmissions. Built an ETL pipeline to clean and transform data, engineered features, and designed an interactive Tableau dashboard for decision support regarding patient treatment and discharge.",
    image: `${base}Patient_Diabetic_Analysis_Dashboard.png`,
    tags: ["Python", "ETL", "Tableau", "Statistical Analysis"],
    github: "https://github.com/Dhanvin1520/SectionC_G-10_DiabetesReadmissionAnalysis"
  },
  {
    name: "Intelligent Patient Risk Assessment",
    description: "An AI-based healthcare analytics system predicting patient health risks that evolves into an agentic health support assistant. Features classical ML workflows (Logistic Regression & Decision Trees) for risk assessment and a LangGraph-based RAG architecture for autonomous retrieval of medical guidelines and health summaries.",
    image: `${base}MediRisk_Agentic_AI.png`,
    tags: ["Machine Learning", "LangGraph", "Streamlit", "GenAI"],
    github: "https://github.com/sanchitgarg23/GenAi_Project"
  }
]

export default projects
