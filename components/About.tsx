export default function About() {
  return (
    <main className="container">

      {/* TITLE SECTION */}
      <section className="about-header">
        <h1>About</h1>

	<p>
  	 I build enterprise-scale AI, IoT, and decision intelligence platforms that transform fragmented products, processes, and data into intelligent systems. Across Dell, Buckman, and Sterna, I've led 0→1 platform development, product strategy, and cross-functional execution to modernize enterprise operations and enable faster, data-driven decision-making at scale.
	</p>
      </section>

      {/* CAPABILITY CARDS */}
      <section className="preview-section">
        <h2>Capabilities</h2>

        <div className="grid">

          <div className="card">Enterprise AI & IoT platforms</div>
          <div className="card">0→1 product & platform development</div>
          <div className="card">Data-driven decision systems</div>
          <div className="card">Cross-functional product leadership</div>
          <div className="card">Enterprise system modernization</div>
          <div className="card">Scalable workflow automation</div>

        </div>
      </section>

    </main>
  );
}
