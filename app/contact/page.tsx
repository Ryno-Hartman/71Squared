import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { DivisionLockup } from "../components/Brand";

export const metadata: Metadata = { title: "Contact", description: "Start a commercial project conversation with 71Squared." };

export default function ContactPage() {
  return (
    <main className="contact-page" id="main-content">
      <section className="contact-hero">
        <p className="eyebrow">Start a conversation</p>
        <h1>Let’s move the<br />work forward.</h1>
        <p>Tell us what you are planning. We will connect you with the right specialist division.</p>
      </section>
      <section className="contact-layout">
        <div className="contact-details">
          <p className="eyebrow">Contact details</p>
          <dl>
            <div><dt>Email</dt><dd>To be confirmed</dd></div>
            <div><dt>Telephone</dt><dd>To be confirmed</dd></div>
            <div><dt>Based in</dt><dd>South Africa — location to be confirmed</dd></div>
          </dl>
          <p className="sample-note">Official contact and location details will be added once supplied.</p>
          <div className="contact-lockups" aria-label="71Squared divisions">
            <DivisionLockup division="construction" />
            <DivisionLockup division="flooring" />
            <DivisionLockup division="plumbing" />
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
