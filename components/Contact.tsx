"use client";

import { useState, FormEvent } from "react";
import { site } from "@/lib/site";

export default function Contact() {
  const [note, setNote] = useState<{ text: string; ok: boolean } | null>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      naam: String(data.get("naam") || "").trim(),
      email: String(data.get("email") || "").trim(),
      telefoon: String(data.get("telefoon") || "").trim(),
      dienst: String(data.get("dienst") || "").trim(),
      bericht: String(data.get("bericht") || "").trim(),
      website: String(data.get("website") || ""), // honeypot
    };

    if (!payload.naam || !payload.email) {
      setNote({ text: "Vul uw naam en e-mailadres in.", ok: false });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setNote({ text: "Vul een geldig e-mailadres in.", ok: false });
      return;
    }

    setNote(null);
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(result?.error || "Er ging iets mis.");
      setNote({
        text: "Bedankt! Uw aanvraag is ontvangen. We nemen snel contact met u op.",
        ok: true,
      });
      form.reset();
    } catch (err) {
      setNote({
        text:
          err instanceof Error
            ? err.message
            : `Versturen mislukt. Probeer het later opnieuw of mail naar ${site.email}.`,
        ok: false,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <span className="kicker">Contact</span>
          <h2>Vraag een gratis offerte aan</h2>
          <p>
            Beschrijf kort uw klus. Foto&apos;s of afmetingen? Mail ze gerust mee —
            dan kunnen we sneller een prijs geven.
          </p>

          <ul className="contact-list">
            <li>
              <span className="ci">📧</span>
              <div>
                <strong>E-mail</strong>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </li>
            <li>
              <span className="ci">🕐</span>
              <div>
                <strong>Bereikbaar</strong>
                <span>{site.hours}</span>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />
          <div className="field">
            <label htmlFor="naam">Naam</label>
            <input type="text" id="naam" name="naam" required placeholder="Uw naam" autoComplete="name" />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required placeholder="naam@voorbeeld.nl" autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="telefoon">Telefoon</label>
              <input type="tel" id="telefoon" name="telefoon" placeholder="Optioneel" autoComplete="tel" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="dienst">Om wat voor klus gaat het?</label>
            <select id="dienst" name="dienst" defaultValue="">
              <option value="" disabled>
                Kies een klus…
              </option>
              <option>Schilderwerk binnen</option>
              <option>Schilderwerk buiten</option>
              <option>Vloer leggen</option>
              <option>Stucwerk / wanden</option>
              <option>Behangen</option>
              <option>Timmerwerk</option>
              <option>Kleine klussen</option>
              <option>Meerdere klussen / renovatie</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="bericht">Omschrijving</label>
            <textarea
              id="bericht"
              name="bericht"
              rows={4}
              placeholder="Bijv. woonkamer van ca. 30 m² schilderen, wanden en plafond…"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={sending}>
            {sending ? "Versturen…" : "Verstuur aanvraag"}
          </button>
          {note && (
            <p className={`form-note ${note.ok ? "ok" : "err"}`} role="status">
              {note.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
