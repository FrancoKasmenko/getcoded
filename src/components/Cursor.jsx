import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(true);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 25, mass: 0.4 });
  const y = useSpring(my, { stiffness: 200, damping: 25, mass: 0.4 });

  useEffect(() => {
    const move = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    const enter = () => setVisible(true);
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", enter);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", enter);
      window.removeEventListener("mouseleave", leave);
    };
  }, [mx, my]);

  return (
    <motion.div
      className="cursor-follow"
      style={{ x, y, opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    />
  );
}
