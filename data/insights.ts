export interface Insight {
  slug: string;
  title: string;
  category: string;
  description: string;
  url: string;
}

export const insights: Insight[] = [
  {
    slug: "better-decisions-not-more-data",
    title: "Most Enterprises Don't Need More Data. They Need Better Decisions.",
    category: "Decision Intelligence",
    description:
      "Why enterprise transformation is fundamentally a decision-making problem, not a data collection problem.",
    url: "https://medium.com/@karthik_prdmgr/most-enterprises-dont-need-more-data-they-need-better-decisions-ffd127031d8a",
  },

  {
    slug: "ai-agent-workspace",
    title: "AI Agent Workspace: The Control Plane for the AI Workforce",
    category: "AI Product Strategy",
    description:
      "A framework for managing AI agents, workflows, governance, and human collaboration at enterprise scale.",
    url: "https://medium.com/@karthik_prdmgr/ai-agent-workspace-the-control-plane-for-the-ai-workforce-ccf644c61e8f",
  },

  {
    slug: "fleet-intelligence",
    title: "Fleet Intelligence: Why Fleet Tracking Is Evolving Beyond GPS",
    category: "Enterprise Platforms",
    description:
      "How connected data, IoT, and operational intelligence are transforming fleet management into decision systems.",
    url: "https://medium.com/@karthik_prdmgr/fleet-intelligence-why-fleet-tracking-is-evolving-beyond-gps-1bab816f3c91",
  },

  {
    slug: "organization-operating-system",
    title: "Why Organizations Don't Scale—They Outgrow Their Operating System",
    category: "Systems Thinking",
    description:
      "Exploring how organizations evolve from disconnected processes into scalable operating systems.",
    url: "https://medium.com/@karthik_prdmgr/why-organizations-dont-scale-they-outgrow-their-operating-system-27d1970c4ec9",
  },
];
