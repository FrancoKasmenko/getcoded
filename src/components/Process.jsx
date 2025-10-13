import React from "react";
import Section from "./Section.jsx";
import { useTranslation } from "react-i18next";

export default function Process() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true });
  return (
    <Section id="proceso">
      <div className="section__head">
        <h2>{t("sections.process_h")}</h2>
        <p className="muted">{t("sections.process_p")}</p>
      </div>
      <ol className="timeline">
        {steps.map((s, i) => (
          <li key={i}>
            <strong>{s.h}</strong> — {s.p}
          </li>
        ))}
      </ol>
    </Section>
  );
}
