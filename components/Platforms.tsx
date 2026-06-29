const platforms = [
  "Enterprise Decision Intelligence",
  "Enterprise Physical Security Intelligence",
  "Fleet Intelligence",
  "Enterprise Chemical Intelligence",
  "AI Operating System",
  "Agentic Wealth Advisor",
  "Enterprise Operations Copilot",
];

export default function Platforms() {
  return (
    <section id="platforms" className="section">
      <h2>Featured AI Platforms</h2>

      <div className="card-grid">
        {platforms.map((platform) => (
          <div key={platform} className="card">
            <h3>{platform}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
