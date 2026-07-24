import Link from "next/link";
import { ParentMark } from "./Brand";

const navItems = [
  ["Construction", "/construction"],
  ["Flooring", "/flooring"],
  ["Plumbing", "/plumbing"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <ParentMark />
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        <Link className="nav-contact" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><span>Menu</span><i aria-hidden="true" /></summary>
        <nav aria-label="Mobile navigation">
          <Link href="/">Home</Link>
          {navItems.map(([label, href], index) => (
            <Link key={href} href={href}><span>0{index + 1}</span>{label}</Link>
          ))}
          <Link href="/contact"><span>04</span>Contact</Link>
        </nav>
      </details>
    </header>
  );
}
