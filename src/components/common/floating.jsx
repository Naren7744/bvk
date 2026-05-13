import { useState, useEffect, useRef } from "react";
import { FaPhoneAlt, FaWhatsapp, FaTimes } from "react-icons/fa";

function FloatingButtons() {
  const [show, setShow] = useState(true);
  const [shake, setShake] = useState(false);
  const [pulse, setPulse] = useState(false);
  const audioRef = useRef(null);

  // 🔥 Shake loop
  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 700);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // 🔥 Pulse loop
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 🔊 Play sound once (first load)
  useEffect(() => {
    const timer = setTimeout(() => {
      audioRef.current?.play().catch(() => {});
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <>
      {/* SOUND */}
      <audio ref={audioRef} src="/sounds/notify.mp3" preload="auto" />

      <div className="fixed bottom-6 right-4 z-50 flex flex-col overflow-hidden items-end gap-3 animate-slideUp max-w-[calc(100vw-16px)]">

        {/* CLOSE */}
        <button
          onClick={() => setShow(false)}
          className="bg-white/90 backdrop-blur-md text-gray-700 shadow-md rounded-full p-2 hover:scale-110 transition"
        >
          <FaTimes size={12} />
        </button>

        {/* CALL */}
        <a
          href="tel:+919585275171"
          className={`relative w-[190px] flex items-center gap-3 px-4 py-2.5 rounded-full text-white overflow-hidden group shadow-xl hover:shadow-2xl transition animate-nudge
          ${shake ? "animate-[wiggle_0.6s_ease-in-out]" : ""}`}
        >
          {/* BG */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-blue-500"></span>

          {/* GLOW */}
          <span className="absolute inset-0 rounded-full blur-md opacity-40 bg-blue-400 group-hover:opacity-70 transition"></span>

          {/* PULSE RING */}
          {pulse && (
            <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping"></span>
          )}

          {/* SPLASH */}
          <span className="absolute w-0 h-0 bg-white/30 rounded-full group-hover:w-[260px] group-hover:h-[260px] transition-all duration-500"></span>

          {/* CONTENT */}
          <div className="relative flex items-center gap-3 z-10">
            <div className="bg-white/20 p-2 rounded-full shadow-inner group-hover:scale-110 transition">
              <FaPhoneAlt className="text-xs" />
            </div>

            <div className="text-xs leading-tight">
              <p className="font-semibold">Call Us Anytime</p>
              <p className="opacity-90">+91 95852 75171</p>
            </div>
          </div>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/919585275171?text=Hi%20I%20am%20interested%20in%20your%20construction%20services"
          target="_blank"
          rel="noreferrer"
          className={`relative w-[190px] flex items-center gap-3 px-4 py-2.5 rounded-full text-white overflow-hidden group shadow-xl hover:shadow-2xl transition animate-nudge delay-200
          ${shake ? "animate-[wiggle_0.6s_ease-in-out]" : ""}`}
        >
          {/* BG */}
          <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600"></span>

          {/* GLOW */}
          <span className="absolute inset-0 rounded-full blur-md opacity-40 bg-green-400 group-hover:opacity-70 transition"></span>

          {/* PULSE RING */}
          {pulse && (
            <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping"></span>
          )}

          {/* SPLASH */}
          <span className="absolute w-0 h-0 bg-white/30 rounded-full group-hover:w-[260px] group-hover:h-[260px] transition-all duration-500"></span>

          {/* CONTENT */}
          <div className="relative flex items-center gap-3 z-10">
            <div className="bg-white/20 p-2 rounded-full shadow-inner group-hover:scale-110 transition">
              <FaWhatsapp className="text-xs" />
            </div>

            <div className="text-xs leading-tight">
              <p className="font-semibold">Chat on WhatsApp</p>
            </div>
          </div>
        </a>

      </div>
    </>
  );
}

export default FloatingButtons;