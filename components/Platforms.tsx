import PlatformCard from "./platform/PlatformCard";

const platforms = [
  {
    title: "Enterprise Decision Intelligence",
    description:
      "AI-powered decision platform for enterprise operations.",
    href: "/platforms/enterprise-decision-intelligence",
  },
  {
    title: "Enterprise Physical Security Intelligence",
    description:
      "Vision AI and IoT platform for intelligent security operations.",
    href: "/platforms/enterprise-physical-security",
  },
  {
    title: "Fleet Intelligence",
    description:
      "Connected vehicle platform with predictive insights.",
    href: "/platforms/fleet-intelligence",
  },
  {
    title: "Enterprise Chemical Intelligence",
    description:
      "Industrial analytics platform for chemical operations.",
    href: "/platforms/enterprise-chemical-intelligence",
  },
  {
    title: "AI Operating System",
    description:
      "Enterprise AI orchestration platform for intelligent workflows.",
    href: "/platforms/ai-operating-system",
  },
  {
    title: "Agentic Wealth Advisor",
    description:
      "AI copilot for portfolio analysis and financial planning.",
    href: "/platforms/agentic-wealth-advisor",
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="section">
      <div className="container">
        <p className="section-label">Selected Work</p>

        <h2>AI Platforms</h2>

        <p className="section-description">
          A collection of AI-powered platforms designed to improve
          enterprise decision-making, operational efficiency, and
          intelligent automation.
        </p>

        <div className="platform-grid">
          {platforms.map((platform) => (
            <PlatformCard
              key={platform.title}
              title={platform.title}
              description={platform.description}
              href={platform.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
