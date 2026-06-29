"use client";

import Link from "next/link";
import SectionBlock from "@/components/platform/SectionBlock";
import { useScrollSpy } from "@/components/platform/useScrollSpy";
import KpiNumber from "@/components/platform/KpiNumber";

export default function PlatformClient({
  platform,
}: {
  platform: any;
}) {
  const active = useScrollSpy([
    "overview",
    "kpis",
    "problem",
    "role",
    "solution",
    "tradeoffs",
    "impact",
  ]);

  return (
    <main className="container section platform-layout">

      {/* SIDEBAR */}
      <aside className="platform-sidebar">
        <div className="sidebar-title">Case Study</div>

        <a className={active === "overview" ? "active" : ""} href="#overview">
          Overview
        </a>
        <a className={active === "kpis" ? "active" : ""} href="#kpis">
          Impact
        </a>
        <a className={active === "problem" ? "active" : ""} href="#problem">
          Problem
        </a>
        <a className={active === "role" ? "active" : ""} href="#role">
          My Role
        </a>
        <a className={active === "solution" ? "active" : ""} href="#solution">
          Solution
        </a>
        <a className={active === "tradeoffs" ? "active" : ""} href="#tradeoffs">
          Trade-offs
        </a>
        <a className={active === "impact" ? "active" : ""} href="#impact">
          Outcomes
        </a>
      </aside>

      {/* CONTENT */}
      <article className="platform-content">

        <p className="section-label">AI Platform Case Study</p>

        <h1 className="platform-title">{platform.title}</h1>

        <p className="platform-subtitle">{platform.subtitle}</p>

        <section id="overview" className="platform-hero-card">
          <p className="platform-hero-text">{platform.overview}</p>
        </section>

        <section id="kpis" className="kpi-grid">
          {platform.kpis.map((kpi: any) => (
            <div key={kpi.label} className="kpi-card">
              <p className="kpi-value">
                <KpiNumber value={kpi.value} />
              </p>
              <p className="kpi-label">{kpi.label}</p>
            </div>
          ))}
        </section>

        <section id="problem">
          <SectionBlock title="Problem">
            {platform.problem}
          </SectionBlock>
        </section>

        <section id="role">
          <SectionBlock title="My Role">
            {platform.role}
          </SectionBlock>
        </section>

        <section id="solution">
          <SectionBlock title="Solution">
            {platform.solution}
          </SectionBlock>
        </section>

        <section id="tradeoffs" className="tradeoff-card">
          <h2>Key Decisions & Trade-offs</h2>
          <ul>
            <li>Real-time over batch processing</li>
            <li>Unified architecture over fragmented tools</li>
            <li>Accuracy vs interpretability tradeoff</li>
          </ul>
        </section>

        <section id="impact">
          <SectionBlock title="Business Impact">
            <ul>
              {platform.outcomes.map((o: string) => (
                <li key={o}>• {o}</li>
              ))}
            </ul>
          </SectionBlock>
        </section>

        <div style={{ marginTop: "60px" }}>
          <Link href="/" className="learn-more">
            ← Back to platforms
          </Link>
        </div>

      </article>
    </main>
  );
}
