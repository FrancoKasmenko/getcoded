import React from "react";
import Section from "./Section.jsx";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  const raw = t("services.items", { returnObjects: true });
  const items = Array.isArray(raw) ? raw : [];

  return (
    <Section id="servicios">
      <div className="section__head">
        <h2>{t("sections.services_h")}</h2>
        <p className="muted">{t("sections.services_p")}</p>
      </div>

      <div
        className="grid cards h-carousel mask-fade"
        role="region"
        aria-label="Servicios - carrusel"
      >
        {items.map((it, i) => (
          <motion.article
            key={i}
            className="card card--service"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
            <ul className="list">
              {(it.bullets || []).map((li, j) => (
                <li key={j}>{li}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
