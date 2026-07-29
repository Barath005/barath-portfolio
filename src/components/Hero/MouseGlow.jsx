import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => {
      setEnabled(mediaQuery.matches && window.innerWidth >= 768);
    };

    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    updateEnabled();
    window.addEventListener("mousemove", move);
    window.addEventListener("resize", updateEnabled);
    mediaQuery.addEventListener("change", updateEnabled);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", updateEnabled);
      mediaQuery.removeEventListener("change", updateEnabled);
    };

  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(350px at ${position.x}px ${position.y}px, rgba(59,130,246,.15), transparent 80%)`,
      }}
    />
  );
}
