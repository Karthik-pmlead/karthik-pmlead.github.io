const highlights = [
  "Led AI, IoT, and Enterprise Platform initiatives.",
  "Defined product vision and long-term platform strategy.",
  "Partnered across Engineering, Design, Data Science, and Business.",
  "Delivered AI-powered products from concept to launch.",
  "Built reusable platforms instead of isolated features.",
];

export default function Experience() {
  return (
    <section className="section">
      <div className="container">

        <p className="section-label">
          Experience Highlights
        </p>

        <h2>
          Leadership Through Platforms
        </h2>

        <ul className="experience-list">
          {highlights.map((item) => (
            <li key={item}>
              ✓ {item}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
