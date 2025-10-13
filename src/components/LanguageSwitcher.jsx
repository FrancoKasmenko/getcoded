import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith("en") ? "en" : "es";
  const next = current === "es" ? "en" : "es";
  const label = current === "es" ? "EN" : "ES";

  return (
    <button
      className="btn btn--ghost lang-switch"
      onClick={() => i18n.changeLanguage(next)}
      aria-label={`Change language to ${next}`}
    >
      {label}
    </button>
  );
}
