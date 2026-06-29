import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="container">

      <section className="platforms-hero">
        <p className="section-label">
          ABOUT
        </p>

        <h1>Building Intelligent Enterprise Systems</h1>

        <p className="hero-description">
          I am a product leader focused on building enterprise-scale AI, 
          and data-driven platforms that transform fragmented products,
          processes, and data into intelligent decision-making ecosystems.
        </p>
      </section>

      <section className="platform-section">
        <h2>My Approach</h2>

        <p>
          Throughout my career, I have been drawn to complex enterprise
          problems where technology alone isn't the answer. Whether building
          AI-enabled workflows, connected IoT platforms, or enterprise
          intelligence systems, my focus has remained consistent:
          designing products that help organizations make faster, better
          decisions.
        </p>

        <p>
          Rather than viewing AI as a standalone capability, I see it as one
          component of a broader enterprise platform. The greatest business
          value comes from connecting data, workflows, people, and AI into
          systems that improve visibility, automation, and operational
          decision-making at scale.
        </p>
      </section>

      <section className="platform-section">
        <h2>Professional Experience</h2>

        <div className="capability-grid">

          <div className="capability-card">
            <h3>Dell Technologies</h3>

            <p>
              Led enterprise product initiatives focused on AI, analytics,
              connected platforms, and scalable product strategy.
            </p>
          </div>

          <div className="capability-card">
            <h3>Buckman</h3>

            <p>
              Built AI and industrial IoT solutions that transformed
              operational data into actionable intelligence for enterprise
              customers.
            </p>
          </div>

          <div className="capability-card">
            <h3>Sterna</h3>

            <p>
              Led connected fleet and IoT platform initiatives that combined
              telemetry, analytics, and customer workflows into intelligent
              operational products.
            </p>
          </div>

        </div>
      </section>

      <section className="platform-section">
        <h2>Core Expertise</h2>

<div className="capability-grid">

  <div className="capability-card">
    <span className="capability-tag">AI</span>
    <h3>Enterprise AI Platforms</h3>
    <p>
      Building scalable AI-powered products and intelligent enterprise workflows.
    </p>
  </div>

  <div className="capability-card">
    <span className="capability-tag">PRODUCT</span>
    <h3>0→1 Platform Development</h3>
    <p>
      Defining product vision, strategy, and execution from concept to launch.
    </p>
        </div>

          <div className="capability-card">
            <span className="capability-tag">INTELLIGENCE</span>
            <h3>Decision Systems</h3>
            <p>
              Transforming enterprise data into actionable recommendations and insights.
            </p>
          </div>

          <div className="capability-card">
            <span className="capability-tag">LEADERSHIP</span>
            <h3>Cross-functional Execution</h3>
            <p>
              Leading Engineering, Data Science, Design, and Business teams.
            </p>
          </div>

          <div className="capability-card">
            <span className="capability-tag">PLATFORMS</span>
            <h3>Enterprise Modernization</h3>
            <p>
              Connecting fragmented products, workflows, and data into scalable platforms.
            </p>
          </div>

          <div className="capability-card">
            <span className="capability-tag">STRATEGY</span>
            <h3>Product Leadership</h3>
            <p>
              Aligning customer outcomes, business goals, and technical execution.
            </p>
          </div>

        </div>
      </section>

      <section className="platform-section">
        <h2>Product Leadership Philosophy</h2>

        <p>
          The most valuable enterprise products are not isolated features;
          they are reusable platforms that connect products, processes, data,
          and people into systems that continuously improve organizational
          decision-making.
        </p>

        <p>
          That philosophy shapes both my professional work and this portfolio,
          where enterprise platforms and thought leadership come together to
          demonstrate how intelligent systems can be designed for long-term
          business impact.
        </p>
      </section>

      <section className="platform-section">
        <h2>Explore My Work</h2>

        <div className="hero-cta">
          <Link href="/platforms" className="btn-primary">
            Enterprise Platform Case Studies
          </Link>

          <Link href="/insights" className="btn-secondary">
            Read Insights
          </Link>
        </div>
      </section>

    </main>
  );
}
