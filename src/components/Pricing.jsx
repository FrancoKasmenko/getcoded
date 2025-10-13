import React from "react";
import Section from "./Section.jsx";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation();
  const plans = [
    { key: "basic", highlight: false },
    { key: "essential", highlight: true },
    { key: "pro", highlight: false },
    { key: "ecommerce", highlight: false },
  ];

  return (
    <Section id="paquetes">
      <div className="section__head">
        <h2>{t("sections.pricing_h")}</h2>
        <p className="muted">{t("sections.pricing_p")}</p>
      </div>

      {/* 👇 carrusel horizontal en tablet/móvil */}
      <div
        className="grid cards cards--pricing h-carousel mask-fade"
        role="region"
        aria-label="Paquetes - carrusel"
      >
        {plans.map((p, i) => {
          const data = t(`pricing.${p.key}`, { returnObjects: true }) || {};
          const feats = Array.isArray(data.features) ? data.features : [];

          return (
            <motion.article
              key={p.key}
              className={`card card--pricing ${
                p.highlight ? "card--highlight" : ""
              }`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -2 }}
            >
              <header className="pricing__head">
                <h3>{data.name}</h3>
                <div className="price">{data.price}</div>
              </header>

              <p>{data.desc}</p>

              <ul className="list">
                {feats.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="btn btn--solid"
                style={{ marginTop: "1rem" }}
              >
                {data.cta}
              </a>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
