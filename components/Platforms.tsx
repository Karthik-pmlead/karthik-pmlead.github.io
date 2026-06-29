import Link from "next/link";
import { platforms } from "@/data/platforms";

export default function Platforms() {
  return (
    <section className="section container">

      <p className="section-label">Platforms</p>

      <h2>AI Platform Case Studies</h2>

      <p className="section-description">
        Enterprise AI systems spanning security, trust, operations, and decision intelligence.
      </p>

      <div className="platform-grid">

        {platforms.map((platform) => (
          <Link
            key={platform.slug}
            href={`/platforms/${platform.slug}`}
            className="platform-card"
          >

            <h3>{platform.title}</h3>

            <p>{platform.subtitle}</p>

            <span className="learn-more">
              View case study →
            </span>

          </Link>
        ))}

      </div>
    </section>
  );
}
