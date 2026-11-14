import Link from "next/link";

import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link href="/" className="brand">
          {SITE.name}
        </Link>
        <nav aria-label="Main">
          <ul className="nav">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <span>
          {SITE.name} · <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </span>
        <ul className="nav">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href}>{n.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
