import Link from "next/link";
import { platforms } from "@/data/platforms";

export default function PlatformsPage() {
  return (
    <main className="container">

      {/* Hero */}
      <section className="platforms-hero">
        <p className="section-label">AI PRODUCT LEADERSHIP PORTFOLIO</p>

        <h1>Enterprise Decision Platform Portfolio</h1>

        <p className="hero-description">
          Collection of enterprise platform blueprints derived from my experience designing and delivering AI, IoT, analytics, and enterprise software products across complex business environments.
	  Rather than documenting individual products, it captures reusable product strategies, platform thinking, and system design principles used to build scalable enterprise decision systems.
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

    </main>
  );
}
