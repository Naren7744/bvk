import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaMedal,
  FaHardHat,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import heroImg from "../assets/hero.jpg";

export default function Hero() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden pt-[20px] sm:pt-[calc(var(--nav-height)+5px)] ">

      {/* BG */}
      <img
        src={heroImg}
        className="absolute inset-0 w-full h-full object-cover animate-zoomSlow"
        alt="construction"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2C]/70 via-[#0B1C2C]/80 to-transparent"></div>

      {/* CONTENT */}
      <div
      className="relative z-10 flex-1 flex flex-col justify-center 
      container mx-auto px-5 sm:px-6
      pt-[90px] sm:pt-[calc(var(--nav-height)+5px)] 
      pb-6 sm:pb-2"
      >

        <div className="grid md:grid-cols-2 items-center gap-10">

          {/* LEFT */}
          <div className="text-white " data-aos="fade-right">

<p
  className={`
    inline-block text-[#F5C542] tracking-[4px] mb-3 rounded-sm
    backdrop-blur-[6px] bg-white/[0.04] sm:mb-3

    ${
      i18n.language === "ta"
        ? "text-[10px] sm:text-[12px] px-3 py-[5px] leading-[1.8]"
        : "text-[10px] sm:text-[10px] px-2 py-[3px] leading-normal"
    }
  `}
>
  {t("heroBadge")}
</p>

<HeroText />

            <div className="w-12 h-[2px] bg-[oklch(0.47_0.17_28.33)] mt-4 mb-4"></div>

          <p
  className={`
    text-gray-300 mb-6 max-w-md
    ${
      i18n.language === "ta"
        ? "font-tamil text-[16px] sm:text-[17px] leading-[2]"
        : "text-[16px] sm:text-[19px] leading-[1.8]  sm:text-left px-1 sm:px-0"
    }
  `}
>
  {t("heroDesc")}
</p>

  <div className="flex flex-col sm:flex-row gap-3">

<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

  {/* PRIMARY BUTTON */}
  <Link to="/services" className="w-full sm:w-auto">
    <button
      className="
        relative w-full sm:w-auto
        min-w-[180px]
        px-6 py-3
        rounded-md text-white font-normal
        overflow-hidden group cursor-pointer
        flex items-center justify-center
      "
    >
      <span className="absolute inset-0 bg-[oklch(0.47_0.17_28.33)]"></span>

      <span
        className="absolute top-0 left-[-100%] w-[60%] h-full 
        bg-gradient-to-r from-transparent via-white/40 to-transparent 
        skew-x-[-20deg] 
        group-hover:left-[120%] 
        transition-all duration-[1200ms] ease-out"
      ></span>

      <span className="relative z-10 tracking-wide">
        {t("heroBtn1")} →
      </span>
    </button>
  </Link>

  {/* SECONDARY BUTTON */}
  <Link to="/projects" className="w-full sm:w-auto">
    <button
      className="
        relative w-full sm:w-auto
        min-w-[180px]
        px-6 py-3
        rounded-md text-white
        border border-white/30
        backdrop-blur-sm overflow-hidden
        group cursor-pointer
        flex items-center justify-center
      "
    >
      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>

      <span className="relative z-10 tracking-wide">
        {t("heroBtn2")} →
      </span>
    </button>
  </Link>

</div>

            </div>

          </div>

          {/* RIGHT */}
         <div
  className={`
    hidden md:flex justify-end
    ${i18n.language === "ta" ? "pl-10" : ""}
  `}
>

            <div 
              className="max-w-[500px] text-white relative animate-fadeUp"
              style={{ animationDelay: "0.3s" }}
            >

<p className="inline-block text-[#D4AF37] text-[8px] sm:text-xs tracking-[4px] mb-4 px-2 py-[3px] rounded-sm backdrop-blur-[6px] bg-white/[0.03]">
 {t("ourPromise")}
</p>
              <h3
  className={`
    relative mb-6
    ${
      i18n.language === "ta"
        ? "font-tamil text-[26px] leading-[1.9] font-medium tracking-normal text-white"
        : "font-hero text-[26px] md:text-[30px] leading-[1.4] font-medium text-white"
    }
  `}
>

                <span className="absolute -left-5 -top-4 text-[oklch(0.47_0.17_28.33/0.2)] text-5xl font-serif">
                  “
                </span>

              {t("ourPromiseSolo")}

              </h3>

              <div className="w-16 h-[2px] bg-gradient-to-r from-[oklch(0.47_0.17_28.33)] to-transparent mb-4"></div>

              <p className="text-gray-400 text-sm tracking-wide">
                             {t("cmpName")}

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ICON STRIP */}
      <div className="relative z-10 w-full 
                      bg-[#0B1C2C]/70 backdrop-blur-md 
                      border-t border-white/10">

        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.47_0.17_28.33/0.05)] via-transparent to-[oklch(0.47_0.17_28.33/0.05)] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-4 
                        grid grid-cols-2 md:grid-cols-4 gap-6">

          <Feature icon={<FaMedal />} title={t("feature1Title")} desc={t("feature1Desc")} />
          <Feature icon={<FaHardHat />} title={t("feature2Title")} desc={t("feature2Desc")} />
          <Feature icon={<FaHandshake />} title={t("feature3Title")} desc={t("feature3Desc")} />
          <Feature icon={<FaUsers />} title={t("feature4Title")} desc={t("feature4Desc")} />

        </div>

      </div>

    </section>
  );
}

/* FEATURE */
function Feature({ icon, title, desc }) {

  const isTamil =
    /[\u0B80-\u0BFF]/.test(title) || /[\u0B80-\u0BFF]/.test(desc);

  return (
    <div className="flex items-start gap-4 min-w-0">

      {/* ICON */}
      <div
        className="
          h-14 w-14 flex items-center justify-center
          rounded-xl border border-[oklch(0.47_0.17_28.33/0.35)]
          bg-[oklch(0.47_0.17_28.33/0.05)]
          text-[22px] text-[oklch(0.47_0.17_28.33)]
          shrink-0
        "
      >
        {icon}
      </div>

      {/* TEXT */}
      <div className="min-w-0">

        <h4
          className={`
            text-white
            ${isTamil
              ? "text-[15px] font-semibold leading-[1.6]"
              : "text-[14px] font-semibold tracking-wide"}
          `}
        >
          {title}
        </h4>

        <p
          className={`
            text-gray-300 mt-1
            ${isTamil
              ? "text-[12px] leading-[1.8]"
              : "text-[12px] leading-relaxed"}
          `}
        >
          {desc}
        </p>

      </div>

    </div>
  );
}


function HeroText() {

  const { t, i18n } = useTranslation();

  const fullText = t("heroTitle1");

  const staticText = t("heroTitle2");

  const [text, setText] = useState("");

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {

      setText(fullText.slice(0, index + 1));

      index++;

      if (index > fullText.length) {
        index = 0;
      }

    }, 220);

    return () => clearInterval(interval);

  }, [fullText]);

  return (

    <h1
      className={`
        font-hero
        tracking-wide
        text-white
        ${
          i18n.language === "ta"
            ? "text-[32px] sm:text-[32px] md:text-[58px] leading-[1.3] font-semibold"
            : "text-[38px] sm:text-[75px] md:text-[70px] leading-[0.95] font-semibold"
        }
      `}
    >

      {/* TYPEWRITER */}
      <span className="block mb-2">

        <span className="animated-gradient-text">
          {text}
        </span>

        {/* BLINKING CURSOR */}
        <span
          className="
            animate-pulse
            text-[oklch(0.47_0.17_28.33)]
            drop-shadow-[0_0_10px_rgba(255,120,120,0.9)]
          "
        >
          |
        </span>

      </span>

      {/* STATIC TEXT */}
      <span className="block mt-[15px]">
        {staticText}
      </span>

    </h1>
  );
}

