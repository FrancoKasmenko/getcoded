import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroLogo from "../assets/logo.png";

export default function Hero() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-4vh"]);
  const o = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section id="home" className="hero hero--sticky" ref={ref}>
      <div className="hero__pin">
        <motion.div
          className="container hero__grid"
          style={{ scale, y, opacity: o }}
        >
          {/* COLUMNA IZQUIERDA: COPIA */}
          <motion.div
            className="hero__copy"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">{t("hero.eyebrow")}</p>
            <h1>
              {t("hero.title_1")}
              <br />
              {t("hero.title_2")}
            </h1>
            <p className="lead">{t("hero.lead")}</p>
            <div className="hero__actions">
              <a href="#contacto" className="btn btn--solid">
                {t("hero.cta_primary")}
              </a>
              <a href="#trabajos" className="btn btn--ghost">
                {t("hero.cta_secondary")}
              </a>
            </div>
            <ul className="trust">
              <li>{t("hero.bullet_1")}</li>
              <li>{t("hero.bullet_2")}</li>
              <li>{t("hero.bullet_3")}</li>
            </ul>
          </motion.div>

          {/* COLUMNA DERECHA: MEDIA / LOGO */}
          <motion.div
            className="hero__media"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.2, 0.8, 0.2, 1],
              delay: 0.15,
            }}
          >
            <img src={heroLogo} alt="GetCoded" className="hero-logo" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
