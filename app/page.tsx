import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      {/* HERO */}
      <section className="hero">
        <span className="hero-label">AI PRODUCT LEADERSHIP PORTFOLIO</span>

        <h1>AI Product Leader </h1>

        <p className="hero-subtitle">
          Building enterprise-scale AI, data, and decision intelligence
          platforms that transform fragmented products, processes, and data
          into intelligent business systems.
        </p>

        <div className="hero-cta">
          <Link href="/platforms" className="btn-primary">
            Explore Case Studies
          </Link>

          <Link href="/insights" className="btn-secondary">
            Read Insights
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="preview-section">
        <p className="section-label">ABOUT</p>

        <h2>Building Enterprise Intelligence Platforms</h2>

        <p>
        I design enterprise intelligence platforms that transform fragmented products, processes, and data into intelligent systems that enable faster, better decisions at scale. Across AI, enterprise software, industrial IoT, and analytics, I've led 0→1 platform strategy, product development, and cross-functional execution to build reusable capabilities that improve operational visibility, automate complex workflows, and help organizations operate more intelligently.
	</p>

        <h3 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
          Impact Snapshot
        </h3>

        <ul className="impact-list">
          <li>
          Designed enterprise intelligence platforms spanning AI, analytics, enterprise software, and connected systems.
	  </li>

          <li>
            Led 0→1 platform strategy and product development from customer discovery
            through production launch.
          </li>

          <li>
            Partnered across Engineering, Data Science, Design, and Business teams to
            deliver scalable enterprise products.
          </li>

          <li>
            Transformed fragmented products, processes, and data into intelligent
            decision systems that improved visibility, automation, and business
            decision-making.
          </li>
        </ul>
        <Link href="/about" className="learn-more">
          Learn more →
        </Link>
      </section>

      {/* PLATFORM CASE STUDIES */}
      <section className="preview-section">
        <p className="section-label">Enterprise Platform</p>

        <h2>Enterprise Platform Portfolio</h2>

        <div className="grid">
          <Link
            href="/platforms/enterprise-physical-security-intelligence"
            className="card"
          >
            Enterprise Physical Security Intelligence
          </Link>

          <Link
            href="/platforms/enterprise-trust-platform"
            className="card"
          >
            Enterprise Trust Platform
          </Link>

          <Link
            href="/platforms/organization-operating-system"
            className="card"
          >
            Organization Operating System
          </Link>

          <Link
            href="/platforms/kpi-decision-intelligence-system"
            className="card"
          >
            KPI Decision Intelligence System
          </Link>
        </div>

        <Link href="/platforms" className="learn-more">
          View all platforms →
        </Link>
      </section>

      {/* INSIGHTS PREVIEW */}
      <section className="preview-section">
        <p className="section-label">INSIGHTS</p>

        <h2>Thoughts on AI, Platforms & Product Leadership</h2>

        <p>
          Perspectives on enterprise AI, decision intelligence, platform
          strategy, and building products that scale.
        </p>

        <Link href="/insights" className="learn-more">
          Read all insights →
        </Link>
      </section>
    </main>
  );
}
