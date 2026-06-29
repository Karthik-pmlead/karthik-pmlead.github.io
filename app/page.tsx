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

        <h2>Building Intelligent Enterprise Systems</h2>

        <p>
          I build enterprise AI platforms that transform fragmented products,
          processes, and data into intelligent decision systems. My experience
          spans enterprise software, AI, industrial IoT, and analytics, where
          I've led 0→1 platform development, product strategy, and
          cross-functional execution to deliver scalable products with
          measurable business impact.
        </p>

        <h3 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
          Impact Snapshot
        </h3>

        <ul className="impact-list">
          <li>
            Built enterprise AI, analytics, and connected platform solutions across
            industrial and enterprise environments.
          </li>

          <li>
            Led 0→1 product strategy and platform development from customer discovery
            through production launch.
          </li>

          <li>
            Partnered with Engineering, Data Science, Design, and Business teams to
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
        <p className="section-label">CASE STUDIES</p>

        <h2>Enterprise Platform Case Studies</h2>

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
          View all case studies →
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
