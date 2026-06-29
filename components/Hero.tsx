export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <p className="eyebrow">
          Senior Product Leader
        </p>

        <h1>
          Building Intelligent
          <br />
          AI Platforms
        </h1>

        <p className="subtitle">
          Transforming fragmented products, processes,
          and enterprise data into scalable AI-powered
          decision systems that deliver measurable
          business outcomes.
        </p>

        <div className="buttons">
          <a href="/resume.pdf" className="btn-primary">
            Resume
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/karthik-pmlead"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
