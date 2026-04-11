import { SITE } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-wrap">
        <p className="footer-copy">{SITE.name} · {SITE.address}</p>
        
      </div>
    </footer>
  );
}