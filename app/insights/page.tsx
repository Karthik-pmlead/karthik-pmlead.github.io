import { insights } from "@/data/insights";

export default function InsightsPage() {
  return (
    <main className="container">

      <section className="platforms-hero">
        <p className="section-label">
          THOUGHT LEADERSHIP
        </p>

        <h1>Insights</h1>

        <p className="hero-description">
          Perspectives on AI product strategy, enterprise platforms,
          decision intelligence, and building scalable intelligent systems.
        </p>
      </section>

      <section className="grid">
        {insights.map((article) => (
          <a
            key={article.slug}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card platform-card"
          >
            <span className="insight-category">
              {article.category}
            </span>

            <h2>{article.title}</h2>

            <p>{article.description}</p>

            <span className="learn-more">
              Read Article →
            </span>
          </a>
        ))}
      </section>

    </main>
  );
}
