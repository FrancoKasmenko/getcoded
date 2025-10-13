import React from "react";
import { motion } from "framer-motion";

export default function Section({ id, alt = false, children }) {
  return (
    <section id={id} className={`section ${alt ? "section--alt" : ""}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.48, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
