/* eslint-disable @next/next/no-img-element -- vinext's local image optimizer currently breaks these workspace assets. */
import type { Metadata } from "next";
import Link from "next/link";
import { HomeSequence } from "./components/HomeSequence";

export const metadata: Metadata = {
  title: "Commercial specialists | 71Squared",
  description: "71Squared brings focused construction, flooring and plumbing expertise together for commercial environments.",
};

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <img src="/images/commercial-exterior.jpg" alt="Commercial towers rising above a city centre" fetchPriority="high" />
        <div className="home-hero__veil" />
        <div className="home-hero__mark" aria-hidden="true">71<sup>2</sup></div>
        <div className="home-hero__content">
          <p className="hero-kicker"><span>Commercial environments</span><span>South Africa</span></p>
          <h1>
            <span>We build the spaces</span>
            <span>where business</span>
            <span>moves forward.</span>
          </h1>
          <div className="home-hero__base">
            <p>Construction <i /> Flooring <i /> Plumbing</p>
            <Link className="text-link text-link--light" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <a className="scroll-cue" href="#introduction"><span>Explore</span><i aria-hidden="true">↓</i></a>
      </section>

      <section className="home-intro" id="introduction">
        <p className="eyebrow">One connected company</p>
        <h2>Three disciplines.<br />Built to move as one.</h2>
        <div className="home-intro__body">
          <p>71Squared brings focused construction, flooring and plumbing expertise together for commercial environments designed to perform.</p>
          <p>Each division stays close to its craft. Every project benefits from a broader understanding of what makes a space work.</p>
        </div>
      </section>

      <HomeSequence />

      <section className="about-section">
        <div className="about-section__lead">
          <p className="eyebrow">About 71Squared</p>
          <h2>Built from work.<br />Expanded by demand.</h2>
        </div>
        <div className="about-section__story">
          <p>71Squared began in construction, grew into specialist flooring, and expanded again into plumbing.</p>
          <p>The result is a connected group of hands-on specialists: different disciplines, one clear commitment to commercial work that keeps moving.</p>
          <Link className="text-link" href="/contact">Talk about your project <span aria-hidden="true">↗</span></Link>
        </div>
        <ol className="growth-line" aria-label="71Squared growth timeline">
          <li><span>01</span><b>Construction</b><p>The foundation.</p></li>
          <li><span>02</span><b>Flooring</b><p>The next specialism.</p></li>
          <li><span>03</span><b>Plumbing</b><p>The growing capability.</p></li>
        </ol>
      </section>

      <section className="proof-section">
        <div className="proof-section__heading"><p className="eyebrow">The standard in action</p><h2>Work people<br />can build on.</h2></div>
        <div className="quote-list">
          <figure>
            <blockquote>“71Squared understood the pace and coordination a live retail environment demands. The process felt controlled from day one.”</blockquote>
            <figcaption><span>Sample testimonial</span>Gauteng retail project</figcaption>
          </figure>
          <figure>
            <blockquote>“They worked around the operation, kept communication clear and treated the finish as seriously as the programme.”</blockquote>
            <figcaption><span>Sample testimonial</span>South African commercial client</figcaption>
          </figure>
        </div>
        <p className="sample-note">Illustrative copy for this private mockup. Replace with approved client testimonials before launch.</p>
      </section>
    </main>
  );
}
