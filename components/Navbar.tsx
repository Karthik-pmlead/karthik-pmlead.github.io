export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="/" className="logo">
          Karthik
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#platforms">Platforms</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
