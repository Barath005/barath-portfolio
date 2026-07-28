import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(true);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(mediaQuery.matches);
    updateEnabled();

    const move = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    window.addEventListener("mousemove", move);
    mediaQuery.addEventListener("change", updateEnabled);

    const elements = document.querySelectorAll(
      "button,a,input,textarea"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {

      window.removeEventListener("mousemove", move);
      mediaQuery.removeEventListener("change", updateEnabled);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });

    };

  }, []);

  if (!enabled) {
    return null;
  }

  return (

    <motion.div

      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: hovering ? 1.35 : 0.9,
      }}

      transition={{
        type: "spring",
        stiffness: 380,
        damping: 30,
      }}

      className="fixed top-0 left-0 h-5 w-5 rounded-full pointer-events-none z-[9999] hidden md:block"

      style={{
        background:
          "radial-gradient(circle, rgba(34,211,238,0.45), rgba(59,130,246,0.15))",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow:
          hovering
            ? "0 0 18px rgba(6,182,212,.35)"
            : "0 0 10px rgba(6,182,212,.18)",
      }}

    />

  );

}
