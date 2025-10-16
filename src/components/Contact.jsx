import React, { useState } from "react";
import Section from "./Section.jsx";
import { useTranslation } from "react-i18next";
import logo from "../assets/whatsapp.webp";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const bullets = t("contact.bullets", { returnObjects: true }) || [];
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSent(false);
    setError(false);
    setLoading(true);

    const f = new FormData(e.currentTarget);
    const payload = {
      name: f.get("name"),
      email: f.get("email"),
      message: f.get("message"),
    };

    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await r.json();
      if (data.ok) {
        setSent(true);
        e.target.reset();
      } else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section id="contacto" alt>
      <div className="contact">
        <div>
          <h2>{t("sections.contact_h")}</h2>
          <p className="muted">{t("sections.contact_p")}</p>
          <ul className="bullets">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <label>
            {t("contact.name")}
            <input required name="name" placeholder={t("contact.name")} />
          </label>

          <label>
            {t("contact.email")}
            <input
              required
              type="email"
              name="email"
              placeholder={t("contact.email")}
            />
          </label>

          <label>
            {t("contact.message")}
            <textarea
              required
              name="message"
              rows="4"
              placeholder={t("contact.message")}
            />
          </label>

          <button className="btn btn--solid" disabled={loading}>
            {loading
              ? i18n.language.startsWith("en")
                ? "Sending..."
                : "Enviando..."
              : t("contact.send")}
          </button>

          {sent && (
            <p className="tiny" style={{ color: "#60d394", marginTop: 8 }}>
              {i18n.language.startsWith("en")
                ? "Thanks! We’ll get back to you shortly."
                : "¡Gracias! Te escribimos a la brevedad."}
            </p>
          )}

          {error && (
            <p className="tiny" style={{ color: "#ff6b6b", marginTop: 8 }}>
              {i18n.language.startsWith("en")
                ? "Something went wrong. Please try again."
                : "Ocurrió un error al enviar el mensaje."}
            </p>
          )}

          <p className="tiny muted" style={{ marginTop: 8 }}>
            {t("contact.also")}
          </p>
        </form>

        <a
          href="https://wa.me/59892249764?text=Hola%20GetCoded%2C%20quiero%20hacer%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--outline"
          style={{
            marginTop: 16,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <img src={logo} alt="WhatsApp" style={{ width: 20, height: 20 }} />
          {i18n.language.startsWith("en")
            ? "Chat on WhatsApp"
            : "Contactar por WhatsApp"}
        </a>
      </div>
    </Section>
  );
}
