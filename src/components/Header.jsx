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
          className="nav-toggle"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
