"use client";
import { useState, FormEvent, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_USER_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID!;

const INFO_ITEMS = [
  { icon: FaEnvelope, label: "Email", value: "adityaswain817@gmail.com", href: "mailto:adityaswain817@gmail.com" },
  { icon: FaPhone, label: "Phone", value: "+91-7846931220", href: "tel:+917846931220" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Bhubaneswar, Odisha", href: "#" },
];

function FloatingInput({
  id, label, type = "text", required = false, value, onChange, rows,
}: {
  id: string; label: string; type?: string; required?: boolean;
  value: string; onChange: (v: string) => void; rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || value.length > 0;

  const baseClass = "w-full bg-gray-700/60 border rounded-xl px-4 text-white placeholder-transparent focus:outline-none focus:border-green-500 transition-all duration-300 peer";

  return (
    <div className="relative">
      {rows ? (
        <textarea
          id={id}
          name={id}
          required={required}
          rows={rows}
          value={value}
          placeholder=" "
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClass} pt-6 pb-3 resize-none ${focused ? "border-green-500 bg-gray-700/80" : "border-gray-600/50"}`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          value={value}
          placeholder=" "
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClass} h-14 pt-4 pb-1 ${focused ? "border-green-500 bg-gray-700/80" : "border-gray-600/50"}`}
        />
      )}
      <label
        htmlFor={id}
        className={`absolute left-4 pointer-events-none text-gray-400 transition-all duration-200 ${
          isFloating ? "top-2.5 text-xs text-green-400 font-medium" : rows ? "top-4 text-sm" : "top-1/2 -translate-y-1/2 text-sm"
        }`}
      >
        {label} {required && <span className="text-green-400">*</span>}
      </label>
      {/* Bottom highlight */}
      <div className={`absolute bottom-0 left-4 right-4 h-px bg-green-500 transition-all duration-300 ${focused ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
    </div>
  );
}

const Contact = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", phoneNumber: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    setIsClient(true);
    setMounted(true);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const res = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.fullName, from_email: formData.email,
        phone_number: formData.phoneNumber, message: formData.message,
        to_name: "Aditya Swain", reply_to: formData.email,
      }, EMAILJS_PUBLIC_KEY);

      if (res.status === 200) {
        try {
          await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_USER_TEMPLATE_ID, {
            to_name: formData.fullName, email: formData.email,
            from_name: "Aditya Swain", message_content: formData.message,
            contact_number: formData.phoneNumber, reply_to: "adityaswain817@gmail.com",
          }, EMAILJS_PUBLIC_KEY);
        } catch (err) { console.error("Confirmation email failed", err); }
        setSubmitStatus("success");
        setFormData({ fullName: "", email: "", phoneNumber: "", message: "" });
      } else { setSubmitStatus("error"); }
    } catch (err) { setSubmitStatus("error"); }
    finally { setIsSubmitting(false); }
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gray-800 text-white py-24 relative overflow-hidden">
      {/* BG decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(34,197,94,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-green-400 text-xs font-bold tracking-[0.4em] uppercase mb-3">Get In Touch</p>
          <h1 className="text-5xl font-black tracking-tight mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Me</span>
          </h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left: Info panel */}
          <div className={`lg:col-span-2 space-y-5 transition-all duration-700 delay-150 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>

            <div className="bg-gray-700/40 border border-gray-600/30 rounded-2xl p-8 space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-1">Let's work together</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I'm currently open to new opportunities — freelance, full-time, or exciting collaborations.
                </p>
              </div>

              {/* Status badge */}
              <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-green-400 text-sm font-semibold">Available for Work</p>
                  <p className="text-gray-500 text-xs">Full-time / Freelance</p>
                </div>
              </div>

              {/* Contact items */}
              <div className="space-y-4">
                {INFO_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="bg-gray-600/60 group-hover:bg-green-500/20 border border-gray-500/30 group-hover:border-green-500/30 p-3 rounded-xl transition-all duration-300">
                      <item.icon className="h-4 w-4 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Socials */}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">Connect</p>
                <div className="flex gap-3">
                  {[
                    { href: "https://github.com/Aditya-Swain", icon: <FaGithub className="h-5 w-5" />, label: "GitHub" },
                    { href: "https://www.linkedin.com/in/aditya-swain-647563289", icon: <FaLinkedin className="h-5 w-5" />, label: "LinkedIn" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-600/60 hover:bg-green-500/20 border border-gray-500/30 hover:border-green-500/30 p-3 rounded-xl text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-gray-700/40 border border-gray-600/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              {/* Card glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

              <h2 className="text-xl font-bold mb-7 relative z-10">Send a message</h2>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FloatingInput
                    id="fullName" label="Full Name" required
                    value={formData.fullName}
                    onChange={(v) => setFormData({ ...formData, fullName: v })}
                  />
                  <FloatingInput
                    id="email" label="Email Address" type="email" required
                    value={formData.email}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                  />
                </div>
                <FloatingInput
                  id="phoneNumber" label="Phone Number" type="tel" required
                  value={formData.phoneNumber}
                  onChange={(v) => setFormData({ ...formData, phoneNumber: v })}
                />
                <FloatingInput
                  id="message" label="Your Message" required rows={5}
                  value={formData.message}
                  onChange={(v) => setFormData({ ...formData, message: v })}
                />

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full relative bg-green-600 hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/30 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {/* Status messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 animate-fade-in">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="text-green-400 font-semibold text-sm">Message sent successfully!</p>
                      <p className="text-gray-400 text-xs">Check your email for a confirmation.</p>
                    </div>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                    <span className="text-2xl">❌</span>
                    <div>
                      <p className="text-red-400 font-semibold text-sm">Failed to send message</p>
                      <p className="text-gray-400 text-xs">Please try again or reach out directly via email.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Contact;