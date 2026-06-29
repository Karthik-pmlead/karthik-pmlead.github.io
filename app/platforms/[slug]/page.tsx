import { notFound } from "next/navigation";
import { platforms } from "@/data/platforms";

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const platform = platforms.find((p) => p.slug === slug);

  if (!platform) {
    notFound();
  }

  return (
    <main className="container section">

      <p className="section-label">
        AI Platform
      </p>

      <h1>{platform.title}</h1>

      <p className="section-description">
        {platform.subtitle}
      </p>

      <h2>Overview</h2>

      <p>{platform.overview}</p>

      <h2>Business Problem</h2>

      <p>{platform.problem}</p>

      <h2>Solution</h2>

      <p>{platform.solution}</p>

      <h2>Capabilities</h2>

      <ul>
        {platform.capabilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Business Outcomes</h2>

      <ul>
        {platform.outcomes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Technology</h2>

      <ul>
        {platform.technologies.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

    </main>
  );
}
