import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="container">

      <section className="hero">
        <h1>Let's Connect</h1>

        <p className="hero-subtitle">
          I'm always interested in discussing AI product leadership,
          enterprise platforms, and opportunities to build intelligent
          products that create meaningful business impact.
        </p>
      </section>

      <section className="platform-section">

        <h2>Contact</h2>

        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:karthik_prdmgr@hotmail.com"
            className="contact-link"
          >
            karthik_prdmgr@hotmail.com
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/karthik-dir"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/karthik-dir
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Karthik-pmlead"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/Karthik-pmlead
          </a>
        </p>

        <p>
          <strong>Medium:</strong>{" "}
          <a
            href="https://medium.com/@karthik_prdmgr"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Medium Articles
          </a>
        </p>

      </section>

    </main>
  );
}
