"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, NAV } from "@/lib/data";
import Image from "next/image";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="topbar">
      <nav className="nav-shell" aria-label="Main">
        <Link href="/" className="brand" aria-label="El Gran Castillo de Jagua home">
          <Image src="/Logo.png" alt="El Gran Castillo de Jagua logo" width={36} height={36} />
          <span className="brand-name">{SITE.name}</span>
        </Link>

        <div className="nav-links">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "active" : ""}`.trim()}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}