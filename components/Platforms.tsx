import Link from "next/link";
import { platforms } from "@/data/platforms";

export default function Platforms() {
  return (
    <section className="section container">

      <p className="section-label">
        Case Studies
      </p>

      <h2>Enterprise Platform Case Studies</h2>

      <p className="section-description">
        Enterprise AI, data, and decision intelligence platforms demonstrating
        product strategy, platform thinking, and scalable systems design.
      </p>

      <div className="platform-grid">

        {platforms.map((platform) => (
          <Link
            key={platform.slug}
            href={`/platforms/${platform.slug}`}
            className="platform-card"
          >
            <h3>{platform.title}</h3>

            <p>{platform.tagline}</p>

            <span className="learn-more">
              View case study →
            </span>
          </Link>
        ))}

      </div>

    </section>
  );
}
