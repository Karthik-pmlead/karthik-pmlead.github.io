import { notFound } from "next/navigation";
import Link from "next/link";
import { platforms } from "@/data/platforms";

export function generateStaticParams() {
  return platforms.map((platform) => ({
    slug: platform.slug,
  }));
}

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
    <main className="container">

      {/* -------------------------------- */}
      {/* Breadcrumb */}
      {/* -------------------------------- */}

      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/platforms">Case Studies</Link>
        <span>/</span>
        <span>{platform.title}</span>
      </nav>

      {/* -------------------------------- */}
      {/* Hero */}
      {/* -------------------------------- */}

      <section className="platform-hero">
        <h1>{platform.title}</h1>

        <p className="platform-tagline">
          {platform.tagline}
        </p>
      </section>

      {/* -------------------------------- */}
      {/* Platform Overview */}
      {/* -------------------------------- */}

      <section className="platform-section">
        <h2>Platform Overview</h2>

        <p>{platform.overview}</p>
      </section>

      {/* -------------------------------- */}
      {/* Executive Summary */}
      {/* -------------------------------- */}

      <section className="platform-section">

        <div className="content-panel">
          <h3>Business Context</h3>

          <p>{platform.businessContext}</p>
        </div>

        <div className="content-panel">
          <h3>Customer Problem</h3>

          <p>{platform.customerProblem}</p>
        </div>

        <div className="content-panel">
          <h3>Product Strategy</h3>

          <p>{platform.productStrategy}</p>
        </div>

      </section>

      {/* -------------------------------- */}
      {/* Platform Capabilities */}
      {/* -------------------------------- */}

      <section className="platform-section">

        <h2>Key Platform Capabilities</h2>

        <div className="platform-capabilities">

          {platform.capabilities.map((capability) => (
            <span
              key={capability}
              className="platform-capability"
            >
              {capability}
            </span>
          ))}

        </div>

      </section>

      {/* -------------------------------- */}
      {/* Business Impact */}
      {/* -------------------------------- */}

      <section className="platform-section">

        <h2>Business Impact</h2>

        <ul className="impact-list">

          {platform.businessImpact.map((item) => (
            <li key={item}>{item}</li>
          ))}

        </ul>

      </section>

      {/* -------------------------------- */}
      {/* Leadership */}
      {/* -------------------------------- */}

      <section className="platform-section">

        <h2>Product Leadership Takeaways</h2>

        <ul className="impact-list">

          {platform.leadershipTakeaways.map((item) => (
            <li key={item}>{item}</li>
          ))}

        </ul>

      </section>

    </main>
  );
}
