// components/HScroller.jsx
import React, { useRef } from "react";

export default function HScroller({ children, className = "" }) {
  const ref = useRef(null);
  const scrollBy = (dir) => {
    const el = ref.current;
    if (!el) return;
    const delta = Math.round(el.clientWidth * 0.85) * dir; // ~un slide
    el.scrollBy({ left: delta, behavior: "smooth" });
  };
  return (
    <div className="hsc-wrap">
      <button
        className="hsc-btn hsc-prev"
        aria-label="Anterior"
        onClick={() => scrollBy(-1)}
      >
        ‹
      </button>
      <div ref={ref} className={`h-carousel ${className}`}>
        {children}
      </div>
      <button
        className="hsc-btn hsc-next"
        aria-label="Siguiente"
        onClick={() => scrollBy(1)}
      >
        ›
      </button>
    </div>
  );
}
