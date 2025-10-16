import React from "react";
import logo from "../assets/whatsapp.webp"; // usa tu archivo real

export default function FloatingLogo() {
  return (
    <a
      href="https://wa.me/59892249764?text=Hola%20GetCoded%2C%20quiero%20hacer%20una%20consulta"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp GetCoded"
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 1000,
      }}
    >
      <img
        src={logo}
        alt="WhatsApp GetCoded"
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          boxShadow: "0 4px 14px rgba(0,0,0,.25)",
          cursor: "pointer",
        }}
      />
    </a>
  );
}
