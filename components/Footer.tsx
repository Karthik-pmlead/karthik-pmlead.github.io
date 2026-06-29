import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/karthik-dir"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Karthik-pmlead"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://medium.com/@karthik_prdmgr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>

          <Link href="/contact">
            Contact
          </Link>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} 
        </div>
      </div>
    </footer>
  );
}
