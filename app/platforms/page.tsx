import Link from "next/link";
import { platforms } from "@/data/platforms";

export default function PlatformsPage() {
  return (
    <main className="container">

      {/* Hero */}
      <section className="platforms-hero">
        <p className="section-label">AI PRODUCT LEADERSHIP PORTFOLIO</p>

        <h1>Enterprise Platform Case Studies</h1>

        <p className="hero-description">
          A collection of enterprise-scale AI, IoT, and decision intelligence
          platforms demonstrating product strategy, platform thinking, and
          system design across complex business domains.
        </p>
      </section>

      {/* Platform Grid */}
      <section className="preview-section">
        <div className="grid">
          {platforms.map((platform) => (
            <Link
              key={platform.slug}
              href={`/platforms/${platform.slug}`}
              className="card platform-card"
            >
              <h2>{platform.title}</h2>

              <p>{platform.tagline}</p>

              <span className="learn-more">
                View Case Study →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="platforms-footer">
        <h2>Beyond Individual Products</h2>

        <p>
          These case studies represent a common product philosophy:
          transforming fragmented products, processes, and data into
          intelligent enterprise platforms that improve decision-making,
          operational visibility, and business outcomes at scale.
        </p>
      </section>

    </main>
  );
}
