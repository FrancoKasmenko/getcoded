import React from "react";
import Section from "./Section.jsx";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const rawBullets = t("contact.bullets", { returnObjects: true });
  const bullets = Array.isArray(rawBullets) ? rawBullets : [];

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

        <form className="form" name="contact" method="post" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
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
              name="message"
              rows="4"
              placeholder={t("contact.message")}
            />
          </label>
          <button className="btn btn--solid">{t("contact.send")}</button>
          <p className="tiny muted">{t("contact.also")}</p>
        </form>
      </div>
    </Section>
  );
}
