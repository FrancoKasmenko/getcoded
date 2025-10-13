import React from "react";
import Section from "./Section.jsx";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import imgSC from "../assets/projects/scouting-club.jpg";
import imgFK from "../assets/projects/francokasmenko.jpg";
import imgKA from "../assets/projects/karamba.jpg";
import imgML from "../assets/projects/matiaslarramendi.jpg";

const items = [
  {
    t: "Scouting Club",
    s: "Plataforma web + backoffice",
    href: "https://scouting-club.com",
    img: imgSC,
  },
  {
    t: "Franco Kasmenko",
    s: "Portfolio dev",
    href: "https://francokasmenko.dev",
    img: imgFK,
  },
  {
    t: "Karamba",
    s: "E-commerce / Woo + diseño",
    href: "https://karamba.com.uy",
    img: imgKA,
  },
  {
    t: "Matías Larramendi",
    s: "Website profesional",
    href: "https://matiaslarramendi.com",
    img: imgML,
  },
];

export default function Work() {
  const { t } = useTranslation();
  return (
    <Section id="trabajos">
      <div className="section__head">
        <h2>{t("sections.work_h")}</h2>
        <p className="muted">{t("sections.work_p")}</p>
      </div>
      <div className="grid work work--4">
        {items.map((it, i) => (
          <motion.a
            key={it.t}
            className="work__item"
            href={it.href}
            target="_blank"
            rel="noopener"
            aria-label={it.t}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            whileHover={{ y: -2 }}
          >
            <div className="ph">
              <img src={it.img} alt={it.t} loading="lazy" />
            </div>
            <div className="work__meta">
              <h3>{it.t}</h3>
              <span>{it.s}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
