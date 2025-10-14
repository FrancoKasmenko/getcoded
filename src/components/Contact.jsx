import React from "react";
import Section from "./Section.jsx";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const bullets = t("contact.bullets", { returnObjects: true }) || [];

  // Si volvemos con ?sent=1, mostramos un mensajito
  const url = typeof window !== "undefined" ? new URL(window.location.href) : null;
  const sent = url?.searchParams.get("sent") === "1";

  return (
    <Section id="contacto" alt>
      <div className="contact">
        <div>
          <h2>{t("sections.contact_h")}</h2>
          <p className="muted">{t("sections.contact_p")}</p>
          <ul className="bullets">{bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        </div>

        <form
          className="form"
          action="https://formspree.io/f/xovkpgvl"
          method="POST"
          acceptCharset="UTF-8"
        >
          {/* Hidden extras */}
          <input type="hidden" name="_subject" value="Nuevo contacto — GetCoded" />
          <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="_next" value="/?sent=1#contacto" />

          <label>
            {t("contact.name")}
            <input
              required
              name="name"
              placeholder={t("contact.name")}
              autoComplete="name"
            />
          </label>

          <label>
            {t("contact.email")}
            <input
              required
              type="email"
              name="email"
              placeholder={t("contact.email")}
              autoComplete="email"
              inputMode="email"
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

          <button className="btn btn--solid">{t("contact.send")}</button>

          {sent && (
            <p className="tiny" style={{ color: "#60d394", marginTop: 8 }}>
              {i18n.language.startsWith("en")
                ? "Thanks! We’ll get back to you shortly."
                : "¡Gracias! Te escribimos a la brevedad."}
            </p>
          )}

          <p className="tiny muted" style={{ marginTop: 8 }}>{t("contact.also")}</p>
        </form>
      </div>
    </Section>
  );
}
