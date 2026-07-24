/* eslint-disable @next/next/no-img-element -- vinext's local image optimizer currently breaks these workspace assets. */
import Link from "next/link";
import type { CSSProperties } from "react";
import { divisions, type DivisionKey } from "../site-data";
import { DivisionLockup } from "./Brand";

export function DivisionPage({ divisionKey }: { divisionKey: DivisionKey }) {
  const division = divisions[divisionKey];

  return (
    <main id="main-content" className={`division-page division-page--${division.key}`} style={{ "--accent": division.accent } as CSSProperties}>
      <section className="division-hero">
        <img src={division.heroImage} alt={division.heroAlt} fetchPriority="high" />
        <div className="division-hero__veil" />
        <div className="division-hero__content">
          <DivisionLockup division={division.key} inverse />
          <p className="division-hero__index">Specialist division / {division.index}</p>
          <h1>{division.headline}</h1>
          <p>{division.description}</p>
        </div>
        <p className="division-hero__stamp" aria-hidden="true">71<sup>2</sup></p>
      </section>

      <section className="capability-section">
        <div>
          <p className="eyebrow">What we bring</p>
          <h2>Focused capability.<br />Commercial perspective.</h2>
        </div>
        <ol className="capability-list">
          {division.capabilities.map((capability, index) => (
            <li key={capability}><span>0{index + 1}</span><p>{capability}</p></li>
          ))}
        </ol>
      </section>

      <section className="approach-section">
        <div className="approach-section__heading">
          <p className="eyebrow">How we work</p>
          <h2>Built around the site,<br />not a template.</h2>
        </div>
        <div className="approach-grid">
          {division.approach.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-section__heading">
          <div><p className="eyebrow">Selected work</p><h2>Project space.</h2></div>
          <p className="sample-note">Sample content — replace with verified 71Squared projects.</p>
        </div>
        <div className="project-list">
          {division.projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-card__image">
                <img src={project.image} alt="Sample commercial project environment" loading="lazy" />
                <span aria-hidden="true">0{index + 1}</span>
              </div>
              <div className="project-card__meta">
                <h3>{project.name}</h3>
                <p>{project.type}</p>
                <p>{project.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="division-cta">
        <p className="eyebrow">Have a commercial project in mind?</p>
        <h2>Put the right specialist<br />on it.</h2>
        <Link className="text-link" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
