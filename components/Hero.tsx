import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero-label">
        AI PRODUCT LEADERSHIP PORTFOLIO
      </p>

      <h1>Building Intelligent Enterprise Systems</h1>

      <p className="hero-subtitle">
        Building enterprise-scale AI, IoT, and decision intelligence platforms
        that transform fragmented products, processes, and data into intelligent
        systems that improve operational visibility and business decision-making.
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
  );
}
