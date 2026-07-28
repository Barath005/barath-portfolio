import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
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