import React from "react";
import Section from "./Section.jsx";
import { useTranslation } from "react-i18next";

export default function Faq() {
  const { t } = useTranslation();
  const raw = t("faq.items", { returnObjects: true });
  const items = Array.isArray(raw) ? raw : [];

  return (
    <Section id="faq">
      <div className="section__head">
        <h2>{t("sections.faq_h")}</h2>
        <p className="muted">{t("sections.faq_p")}</p>
      </div>

      {items.map((it, i) => (
        <details className="faq" key={it.q} open={i === 0}>
          <summary>{it.q}</summary>
          <div className="faq-body">
            {(it.a || []).map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
            {Array.isArray(it.list) && it.list.length > 0 && (
              <ul>
                {it.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
          </div>
        </details>
      ))}
    </Section>
  );
}
