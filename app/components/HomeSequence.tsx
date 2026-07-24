"use client";
/* eslint-disable @next/next/no-img-element -- vinext's local image optimizer currently breaks these workspace assets. */

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { divisionList } from "../site-data";
import { DivisionLockup } from "./Brand";

export function HomeSequence() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-sequence-step]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry) {
          setActive(Number((visibleEntry.target as HTMLElement).dataset.sequenceStep));
          setVisible(true);
        } else if (entries.every((entry) => !entry.isIntersecting)) {
          const anyVisible = sections.some((section) => {
            const rect = section.getBoundingClientRect();
            return rect.bottom > 0 && rect.top < window.innerHeight;
          });
          setVisible(anyVisible);
        }
      },
      { threshold: [0.15, 0.4, 0.7], rootMargin: "-12% 0px -12% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sequence" aria-label="71Squared specialist divisions">
      <nav className={`sequence-rail${visible ? " is-visible" : ""}`} aria-label="Division chapters">
        <span className="sequence-rail__label">Explore</span>
        <div>
          {divisionList.map((division, index) => (
            <a key={division.key} className={active === index ? "is-active" : ""} href={`#${division.key}`}>
              <span>{division.index}</span><b>{division.name}</b>
            </a>
          ))}
        </div>
      </nav>

      {divisionList.map((division, index) => (
        <article
          className={`sequence-chapter sequence-chapter--${division.key}`}
          data-sequence-step={index}
          id={division.key}
          key={division.key}
          style={{ "--accent": division.accent } as CSSProperties}
        >
          <div className="sequence-chapter__sticky">
            <img className="sequence-chapter__image" src={division.heroImage} alt={division.heroAlt} loading={index === 0 ? "eager" : "lazy"} />
            <div className="sequence-chapter__shade" />
            <div className="sequence-chapter__number" aria-hidden="true">{division.index}</div>
            <div className="sequence-chapter__content">
              <DivisionLockup division={division.key} inverse />
              <p className="sequence-chapter__kicker">{division.shortLine}</p>
              <h2>{division.headline}</h2>
              <p className="sequence-chapter__copy">{division.description}</p>
              <Link className="text-link text-link--light" href={`/${division.key}`}>
                Enter {division.name} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
