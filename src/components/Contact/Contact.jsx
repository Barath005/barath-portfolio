import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useTheme } from "../../context/ThemeContext";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending message...");
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!", {
        id: toastId,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message.", {
        id: toastId,
      });

      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Let&apos;s Work Together
          </h2>

          <p
            className={`mx-auto mt-6 max-w-2xl ${
              darkMode ? "text-gray-400" : "text-slate-600"
            }`}
          >
            Have an idea or an opportunity? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-12">
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`glass-panel rounded-3xl border p-5 backdrop-blur-xl transition-colors sm:p-8 lg:p-10 ${
              darkMode ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"
            }`}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`mb-5 w-full rounded-xl border p-4 outline-none transition-colors ${
                darkMode
                  ? "border-white/10 bg-black/20"
                  : "border-slate-200 bg-slate-50"
              }`}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`mb-5 w-full rounded-xl border p-4 outline-none transition-colors ${
                darkMode
                  ? "border-white/10 bg-black/20"
                  : "border-slate-200 bg-slate-50"
              }`}
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className={`mb-5 w-full rounded-xl border p-4 outline-none transition-colors ${
                darkMode
                  ? "border-white/10 bg-black/20"
                  : "border-slate-200 bg-slate-50"
              }`}
            />

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message..."
              className={`w-full resize-none rounded-xl border p-4 outline-none transition-colors ${
                darkMode
                  ? "border-white/10 bg-black/20"
                  : "border-slate-200 bg-slate-50"
              }`}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 transition hover:scale-[1.02] disabled:opacity-50"
            >
              <Send size={20} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`glass-panel flex flex-col justify-between rounded-3xl border p-5 backdrop-blur-xl transition-colors sm:p-8 lg:p-10 ${
              darkMode ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"
            }`}
          >
            <div>
              <div className="mb-8 flex items-center gap-4 sm:gap-5">
                <Mail className="text-cyan-400" />

                <div>
                  <h4>Email</h4>
                  <p className={darkMode ? "text-gray-400" : "text-slate-600"}>
                    barathganesan01@gmail.com
                  </p>
                </div>
              </div>

              <div className="mb-8 flex items-center gap-4 sm:gap-5">
                <Phone className="text-cyan-400" />

                <div>
                  <h4>Phone</h4>
                  <p className={darkMode ? "text-gray-400" : "text-slate-600"}>
                    +91 9487791693
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-5">
                <MapPin className="text-cyan-400" />

                <div>
                  <h4>Location</h4>
                  <p className={darkMode ? "text-gray-400" : "text-slate-600"}>
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-16">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400">Available for Freelance</span>
              </div>

              <div className="mt-8 flex gap-4 sm:mt-10 sm:gap-5">
                <a
                  href="https://github.com/Barath005"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex h-12 w-12 items-center justify-center rounded-full transition sm:h-14 sm:w-14 ${
                    darkMode
                      ? "bg-white/10 hover:bg-cyan-500"
                      : "bg-slate-100 hover:bg-cyan-500 hover:text-white"
                  }`}
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/barathganesan01"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex h-12 w-12 items-center justify-center rounded-full transition sm:h-14 sm:w-14 ${
                    darkMode
                      ? "bg-white/10 hover:bg-blue-600"
                      : "bg-slate-100 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
