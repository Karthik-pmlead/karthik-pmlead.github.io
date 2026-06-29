import Metrics from "./Metrics";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        <p className="section-label">
          About
        </p>

        <h2>
          Building intelligent platforms that
          enable better business decisions.
        </h2>

        <p className="section-description">
          I'm a Senior Product Leader with 15+ years of experience
          building enterprise products across AI, GenAI, IoT,
          analytics, cloud, and SaaS.

          My work focuses on repeatedly transforming fragmented
          products, processes, and enterprise data into intelligent
          platforms that improve decision-making and deliver
          measurable business outcomes at scale.
        </p>

        <Metrics />

      </div>
    </section>
  );
}
