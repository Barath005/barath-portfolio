import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export default function ParticleBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => {
      setEnabled(mediaQuery.matches && window.innerWidth >= 768);
    };

    updateEnabled();
    window.addEventListener("resize", updateEnabled);
    mediaQuery.addEventListener("change", updateEnabled);

    return () => {
      window.removeEventListener("resize", updateEnabled);
      mediaQuery.removeEventListener("change", updateEnabled);
    };
  }, []);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  if (!enabled) {
    return null;
  }

  return (
    <Particles
      className="pointer-events-none absolute inset-0"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 50,
          },

          color: {
            value: "#60a5fa",
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: 2,
          },

          move: {
            enable: true,
            speed: 0.6,
          },

          links: {
            enable: true,
            color: "#3b82f6",
            opacity: 0.15,
          },
        },
      }}
    />
  );
}
