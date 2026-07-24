"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <span>Message prepared</span>
        <h2>The interaction is working.</h2>
        <p>This is still a private mockup, so nothing was sent. The final form can be connected once the official contact details are confirmed.</p>
        <button type="button" onClick={() => setSubmitted(false)}>Return to form</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label><span>Your name</span><input name="name" autoComplete="name" required placeholder="Name and surname" /></label>
      <label><span>Company</span><input name="company" autoComplete="organization" required placeholder="Company name" /></label>
      <label><span>Work email</span><input type="email" name="email" autoComplete="email" required placeholder="name@company.co.za" /></label>
      <label>
        <span>Area of interest</span>
        <select name="division" defaultValue="" required>
          <option value="" disabled>Select a division</option>
          <option>Construction</option><option>Flooring</option><option>Plumbing</option><option>More than one division</option>
        </select>
      </label>
      <label className="contact-form__wide"><span>Tell us about the project</span><textarea name="message" required rows={4} placeholder="What are you planning, and where?" /></label>
      <div className="contact-form__submit">
        <p>Mockup interaction only. Nothing will be sent yet.</p>
        <button type="submit">Prepare enquiry <span aria-hidden="true">↗</span></button>
      </div>
    </form>
  );
}
