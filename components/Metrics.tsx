const metrics = [
  {
    value: "15+",
    label: "Years of Product Leadership",
  },
  {
    value: "AI",
    label: "Applied AI & GenAI",
  },
  {
    value: "IoT",
    label: "Connected Platforms",
  },
  {
    value: "SaaS",
    label: "Enterprise Products",
  },
  {
    value: "Global",
    label: "Cross-functional Teams",
  },
  {
    value: "0→1",
    label: "Platform Development",
  },
];

export default function Metrics() {
  return (
    <div className="metrics-grid">
      {metrics.map((metric) => (
        <div className="metric-card" key={metric.label}>
          <h3>{metric.value}</h3>
          <p>{metric.label}</p>
        </div>
      ))}
    </div>
  );
}
