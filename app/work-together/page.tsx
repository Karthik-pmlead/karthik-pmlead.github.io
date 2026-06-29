export default function WorkTogether() {
  return (
    <main className="container section">

      <p className="section-label">Work Together</p>

      <h1>Let’s Build Something Meaningful</h1>

      <p className="section-description">
        I work on AI systems, enterprise platforms, and decision intelligence products.
        Open to leadership, product, and platform roles.
      </p>

      {/* CTA CARDS */}
      <div className="contact-grid">

        <div className="contact-card">
          <h3>Email</h3>
          <p>Reach out for roles or collaboration</p>
          <a className="btn-primary" href="mailto:karthik_prdmgr@hotmail.com">
            Send Email
          </a>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <p>Professional background and experience</p>
          <a className="btn-secondary" href="https://linkedin.com/in/karthik-dir">
            View Profile
          </a>
        </div>

        <div className="contact-card">
          <h3>Resume</h3>
          <p>Download full experience summary</p>
          <a className="btn-primary" href="/resume.pdf" target="_blank">
            Download Resume
          </a>
        </div>

      </div>

    </main>
  );
}
