import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Brand */}
        <Link href="/" className="nav-brand">
          <h2>Karthik</h2>
          <p>AI Product Leadership Portfolio</p>
        </Link>

        {/* Navigation */}
        <nav className="nav-links">
          <Link href="/about">About</Link>

          <Link href="/platforms">Case Studies</Link>

          <Link href="/insights">Insights</Link>

          <Link href="/contact">Contact</Link>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="resume-btn"
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}
