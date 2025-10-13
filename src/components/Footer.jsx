import React, { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="gc-footer">
      <div className="container footer__grid">
        <div className="foot-brand"></div>
        <div className="foot-copy">
          © <span>{year}</span> GetCoded.
        </div>
      </div>
    </footer>
  );
}
