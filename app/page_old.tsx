import Link from "next/link";

export default function Home() {
  return (

      <main className="container">

        {/* HERO */}
        <section className="hero">
          <h1>AI Product Leader</h1>
          <p>
            Building enterprise-scale AI, data, and decision intelligence platforms that transform fragmented products, processes, and data into intelligent ecosystems.
          </p>

          <div className="hero-cta">
            <Link href="/platforms" className="btn-primary">
              View Platforms
            </Link>
            <Link href="/insights" className="btn-secondary">
              Read Insights
            </Link>
          </div>
        </section>

        {/* ABOUT PREVIEW */}
	<section className="preview-section">
     	  <h2>About</h2>

  	  <p>
  	  I build enterprise AI platforms that transform fragmented products, processes, and data into intelligent decision systems. 
          My experience spans enterprise software, AI, industrial IoT, and analytics, 
	  where I've led 0→1 platform development, product strategy, and cross-functional execution 
          to deliver scalable products with measurable business impact.
	  </p>

  	  <Link href="/about" className="learn-more">
		Learn more →
  	  </Link>
	</section>


        {/* PLATFORMS PREVIEW */}
        <section className="preview-section">
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
        </section>

      </main>
  );
}
