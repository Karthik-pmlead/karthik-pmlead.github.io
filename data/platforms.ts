export interface Platform {
  slug: string;
  title: string;
  tagline: string;

  overview: string;
  businessContext: string;
  customerProblem: string;
  productStrategy: string;

  capabilities: string[];

  businessImpact: string[];

  leadershipTakeaways: string[];
}

export const platforms: Platform[] = [
  {
    slug: "enterprise-physical-security-intelligence",

    title: "Enterprise Physical Security Intelligence",

    tagline:
      "AI-driven platform for monitoring, anomaly detection, and operational intelligence across enterprise security systems.",

    overview:
      "Designed an enterprise intelligence platform that unified IoT telemetry, physical security systems, and operational workflows into a centralized decision-support capability for security operations teams.",

    businessContext:
      "Large enterprises operate multiple physical security systems across facilities, resulting in fragmented visibility, disconnected monitoring tools, and delayed incident response.",

    customerProblem:
      "Security teams lacked a unified operational view across devices, alerts, and incidents. Investigations required correlating information manually across multiple systems, increasing response time and operational complexity.",

    productStrategy:
      "Defined a reusable AI and IoT platform that centralized data ingestion, anomaly detection, operational dashboards, and enterprise reporting rather than building isolated monitoring applications.",

    capabilities: [
      "IoT device integration",
      "Real-time event ingestion",
      "AI anomaly detection",
      "Operational dashboards",
      "Incident prioritization",
      "Enterprise reporting",
    ],

    businessImpact: [
      "Improved operational visibility",
      "Reduced incident investigation effort",
      "Accelerated detection of operational anomalies",
      "Established reusable enterprise intelligence capabilities",
    ],

    leadershipTakeaways: [
      "Defined platform strategy for enterprise-scale security intelligence.",
      "Aligned engineering, business, and domain stakeholders around reusable platform capabilities.",
      "Focused on scalable architecture instead of point solutions.",
    ],
  },

  {
    slug: "enterprise-trust-platform",

    title: "Enterprise Trust Platform",

    tagline:
      "Risk, compliance, and identity intelligence platform across enterprise workflows.",

    overview:
      "Created a unified trust intelligence platform that consolidated identity, compliance, and risk signals into a single decision framework supporting enterprise governance.",

    businessContext:
      "Organizations often manage trust, compliance, and identity across disconnected systems, resulting in inconsistent governance and manual risk assessment.",

    customerProblem:
      "Business users lacked consolidated visibility into trust indicators, creating operational inefficiencies and increasing manual compliance effort.",

    productStrategy:
      "Designed a centralized trust platform that integrated identity intelligence, compliance workflows, and risk evaluation into reusable enterprise services.",

    capabilities: [
      "Identity intelligence",
      "Risk scoring",
      "Compliance workflows",
      "Governance dashboards",
      "Policy evaluation",
      "Enterprise reporting",
    ],

    businessImpact: [
      "Improved enterprise risk visibility",
      "Reduced manual governance effort",
      "Standardized trust evaluation workflows",
      "Enabled scalable compliance operations",
    ],

    leadershipTakeaways: [
      "Drove product strategy for enterprise trust capabilities.",
      "Balanced regulatory requirements with user experience.",
      "Built reusable platform services supporting multiple business domains.",
    ],
  },

  {
    slug: "organization-operating-system",

    title: "Organization Operating System",

    tagline:
      "Unified operational intelligence layer connecting teams, workflows, and execution systems.",

    overview:
      "Designed an enterprise operating system that connected planning, execution, and operational visibility across cross-functional organizations.",

    businessContext:
      "As organizations grow, execution becomes fragmented across teams, tools, and processes, reducing transparency and slowing decision-making.",

    customerProblem:
      "Leaders lacked a unified view of organizational execution, making it difficult to identify dependencies, bottlenecks, and delivery risks.",

    productStrategy:
      "Defined a reusable operating layer that connected workflows, execution metrics, organizational telemetry, and decision support into a shared platform.",

    capabilities: [
      "Workflow orchestration",
      "Execution tracking",
      "Organizational dashboards",
      "Dependency management",
      "Operational analytics",
      "Decision support",
    ],

    businessImpact: [
      "Improved cross-functional alignment",
      "Increased execution transparency",
      "Reduced operational bottlenecks",
      "Created reusable operating capabilities",
    ],

    leadershipTakeaways: [
      "Applied platform thinking to organizational execution.",
      "Aligned multiple stakeholder groups around shared operating principles.",
      "Designed reusable capabilities rather than isolated workflow tools.",
    ],
  },

  {
    slug: "kpi-decision-intelligence-system",

    title: "KPI Decision Intelligence System",

    tagline:
      "Real-time platform that transforms enterprise KPIs into actionable decision intelligence.",

    overview:
      "Developed a decision intelligence platform that converts enterprise metrics into contextual recommendations supporting operational and strategic decision-making.",

    businessContext:
      "Enterprise KPIs are frequently fragmented across reporting systems and updated in batch cycles, limiting their usefulness for real-time operational decisions.",

    customerProblem:
      "Business leaders spent significant time interpreting dashboards instead of acting on insights because KPI reporting lacked context and recommendations.",

    productStrategy:
      "Designed an AI-driven decision layer that aggregates KPI streams, evaluates business conditions, and surfaces actionable recommendations across enterprise workflows.",

    capabilities: [
      "KPI aggregation",
      "Decision intelligence",
      "AI recommendations",
      "Operational dashboards",
      "Executive reporting",
      "Business alerts",
    ],

    businessImpact: [
      "Reduced decision latency",
      "Improved operational responsiveness",
      "Increased adoption of KPI-driven decision making",
      "Established a reusable enterprise intelligence layer",
    ],

    leadershipTakeaways: [
      "Shifted KPIs from reporting artifacts to operational decision tools.",
      "Defined reusable product capabilities supporting multiple business functions.",
      "Connected AI insights directly to enterprise workflows.",
    ],
  },
];
