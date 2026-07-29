import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function Loader() {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className={`fixed inset-0 z-[200] flex items-center justify-center ${
        darkMode ? "bg-[#020617]" : "bg-slate-50"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
          className="relative h-20 w-20"
        >
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400/20" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-blue-500" />
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-fuchsia-500/20 blur-md" />
        </motion.div>

        <div className="text-center">
          <p className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-2xl font-bold text-transparent">
            Barath
          </p>
          <p className={darkMode ? "text-gray-400" : "text-slate-500"}>
            Loading portfolio...
          </p>
        </div>
      </div>
    </motion.div>
  );
}
