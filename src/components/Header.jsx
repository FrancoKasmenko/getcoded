import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <header className="gc-header">
      <div className="container">
        <a href="#home" className="brand" aria-label={`${t("brand")} Inicio`}>
          <img src={logo} className="logo-img" alt="GetCoded" />
        </a>

        <nav className={`nav ${open ? "open" : ""}`}>
          <a href="#servicios">{t("nav.services")}</a>
          <a href="#trabajos">{t("nav.work")}</a>
          <a href="#proceso">{t("nav.process")}</a>
          <a href="#faq">{t("nav.faq")}</a>
          <a href="#contacto" className="btn btn--ghost">
            {t("nav.contact")}
          </a>
          <LanguageSwitcher />
        </nav>

        <button
  className={`nav-toggle ${open ? "is-open" : ""}`}
  aria-label={open ? "Cerrar menú" : "Abrir menú"}
  aria-expanded={open}
  onClick={() => setOpen((v) => !v)}
>
  <span></span><span></span>
</button>

{/* Overlay para oscurecer fondo */}
<div className={`menu-overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)} />

      </div>
    </header>
  );
}
