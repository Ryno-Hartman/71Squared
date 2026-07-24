import Link from "next/link";
import { ParentMark } from "./Brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-primary">
        <p className="eyebrow">The next move</p>
        <h2>Build what business<br />needs next.</h2>
        <Link className="circle-link" href="/contact" aria-label="Contact 71Squared"><span>Talk to us</span><b aria-hidden="true">↗</b></Link>
      </div>
      <div className="footer-base">
        <ParentMark />
        <nav aria-label="Footer navigation">
          <Link href="/construction">Construction</Link>
          <Link href="/flooring">Flooring</Link>
          <Link href="/plumbing">Plumbing</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <p>© {new Date().getFullYear()} 71Squared<br /><span>Private client mockup — not published</span></p>
      </div>
    </footer>
  );
}
