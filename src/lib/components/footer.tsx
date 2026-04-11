import { SITE } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-wrap">
        <p className="footer-copy">{SITE.name} · {SITE.address}</p>
        <p className="footer-copy">
          Made by{" "}
          <a
            href="https://voltanyc.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Volta
          </a>
        </p>
      </div>
    </footer>
  );
}
