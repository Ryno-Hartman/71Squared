import Link from "next/link";
import type { DivisionKey } from "../site-data";

export function ParentMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={`parent-mark${compact ? " parent-mark--compact" : ""}`} href="/" aria-label="71Squared home">
      <span className="parent-mark__number" aria-hidden="true">
        71<sup>2</sup>
      </span>
      {!compact && <span className="parent-mark__word">Squared</span>}
    </Link>
  );
}

const glyphs: Record<DivisionKey, string> = {
  construction: "C/",
  flooring: "F=",
  plumbing: "P°",
};

export function DivisionLockup({ division, inverse = false }: { division: DivisionKey; inverse?: boolean }) {
  const name = division.charAt(0).toUpperCase() + division.slice(1);

  return (
    <div className={`division-lockup division-lockup--${division}${inverse ? " division-lockup--inverse" : ""}`}>
      <span className="division-lockup__symbol" aria-hidden="true">{glyphs[division]}</span>
      <span className="division-lockup__name">
        <strong>71Squared</strong>
        <small>{name}</small>
      </span>
    </div>
  );
}
