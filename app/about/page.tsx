import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="container">

      <section className="platforms-hero">
        <p className="section-label">
          ABOUT
        </p>

        <h1>Building Intelligent Enterprise Platforms</h1>

        <p className="hero-description">
          I am a product leader who specializes in transforming
	  fragmented products, processes, and data into intelligent
	  enterprise platforms that improve decisions-making, operational visibility,
          measurable business outcomes at scale.
        </p>
      </section>

      <section className="platform-section">
        <h2>My Approach</h2>
        <p>
          Throughout my career, I've been drawn to complex enterprise challenges where success depends on connecting technology with business strategy. 
	  Whether working across AI, IoT, enterprise software, or data platforms, my focus has remained consistent: designing scalable platforms that help organizations make faster, better-informed decisions.
	</p>
	<p>
	  I believe the most valuable enterprise products are not defined by individual features—they are defined by the decisions they enable. Rather than viewing AI as the product, I see it as one capability within a broader enterprise platform that connects data, workflows, people, and automation into a cohesive operating model.
        </p>
	<p>
	  This perspective has shaped how I approach product management: thinking beyond individual releases to build reusable capabilities that simplify operations, strengthen governance, and scale across business functions. It's a philosophy reflected throughout this portfolio, where each project demonstrates a different application of the same platform-first approach to solving enterprise problems.
	</p>
      
       </section>

      <section className="platform-section">

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
      Designing scalable AI systems that power enterprise decision-making and automation
    </p>
  </div>

  <div className="capability-card">
    <span className="capability-tag">PRODUCT</span>
    <h3>0→1 Platform Development</h3>
    <p>
      Defining product vision, strategy, and execution from concept to scalable platform.
    </p>
        </div>

          <div className="capability-card">
            <span className="capability-tag">INTELLIGENCE</span>
            <h3>Decision Systems</h3>
            <p>
              Transforming enterprise data into real-time insights and actionable decisions.
            </p>
          </div>

          <div className="capability-card">
            <span className="capability-tag">LEADERSHIP</span>
            <h3>Cross-functional Execution</h3>
            <p>
              Leading Engineering, Data Science, Design, and Business teams to delivery.
            </p>
          </div>

          <div className="capability-card">
            <span className="capability-tag">PLATFORMS</span>
            <h3>Enterprise Modernization</h3>
            <p>
             Unifying fragmented systems, workflows, and data into scalable platforms. 
            </p>
          </div>

          <div className="capability-card">
            <span className="capability-tag">STRATEGY</span>
            <h3>Product Leadership</h3>
            <p>
              Aligning customer outcomes, business goals, and technical execution into coherent product direction.
            </p>
          </div>

        </div>
      </section>



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
