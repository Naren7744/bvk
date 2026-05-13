import {
  FaCheckCircle,
  FaUserTie,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


import houseImg from "../assets/hservice_img/about_img.jpg"; 
import AOS from "aos";
import "aos/dist/aos.css";

{/* LEFT IMAGE */}
// {/* <div className="relative">
//   <img
//     src={houseImg}
//     alt="Modern House"
//     className="rounded-3xl shadow-lg object-cover w-full h-full"
//   />

//   {/* BADGE */}
//   <div className="absolute bottom-5 left-5 bg-[#0B1C2C] text-white px-5 py-3 rounded-xl shadow-md">
//     <p className="text-xl font-bold text-[oklch(0.47_0.17_28.33)]">10+</p>
//     <p className="text-xs">Years Experience</p>
//   </div>
// </div> */}

export default function About() {
 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const { t, i18n } = useTranslation();


  return (
    <section className="py-10 sm:py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative" data-aos="fade-right">
          <img
            src={houseImg}
            alt="Modern House"
            className="rounded-3xl shadow-lg object-cover w-full h-[320px] sm:h-[420px] md:h-full"
          />

          {/* BADGE */}
          <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-[#0B1C2C] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-md"   data-aos="zoom-in"
            data-aos-delay="200">
            <p className="text-xl font-bold text-[oklch(0.47_0.17_28.33)]">10+</p>
            <p className="text-xs">{t("experience")}</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
      
        <div>
          <p className="text-[oklch(0.47_0.17_28.33)] font-semibold mb-2 tracking-wide" data-aos="fade-left">
            {t("aboutBadge")}
          </p>

          <h2
  className={`mb-5 font-bold ${
    i18n.language === "ta"
      ? "text-4xl md:text-[30px] leading-[1.22] tracking-tight"
      : "text-4xl md:text-5xl leading-tight"
  }`}
>
            {t("aboutTitle")}
          </h2>

          <p
  className={`text-gray-600 max-w-xl ${
    i18n.language === "ta"
      ? "mb-5 leading-[2.1] text-[13px] tracking-[0.2px]"
      : "mb-4 leading-relaxed"
  }`}
>
         {t("aboutDesc1")}
          </p>

<p
  className={`text-gray-600 max-w-xl ${
    i18n.language === "ta"
      ? "mb-7 leading-[2.1] text-[13px] tracking-[0.2px]"
      : "mb-6 leading-relaxed"
  }`}
>
          {t("aboutDesc2")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

            <Point icon={<FaCheckCircle />} text={t("aboutPoint1")} />
            <Point icon={<FaUserTie />} text={t("aboutPoint2")} />
            <Point icon={<FaClock />} text={t("aboutPoint3")} />
            <Point icon={<FaMoneyBillWave />} text={t("aboutPoint4")} />

          </div>

          {/* CTA */}
<Link
  to="/about"
  className="inline-block bg-[#0B1C2C] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-black transition cursor-pointer"
>
  {t("aboutBtn")}
</Link>
        </div>

      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 text-center" data-aos="fade-up">

        <Stat number="150+" label={t("aboutStat1")}  delay="0" />
        <Stat number="100+" label={t("aboutStat2")} delay="100" />
        <Stat number="10+" label={t("aboutStat3")} delay="200" />
        <Stat number="50+" label={t("aboutStat4")}delay="300"  />

      </div>
    </section>
  );
}

/* ===== POINT ===== */
function Point({ icon, text }) {
  return (
    <div className="flex items-center gap-3" data-aos="fade-up">
      <div className="bg-[oklch(0.47_0.17_28.33/0.1)] text-[oklch(0.47_0.17_28.33)] p-2 rounded-full text-sm">
        {icon}
      </div>
      <p
  className={`text-gray-700 font-medium ${
    text?.length > 18
      ? "text-[15px] leading-[1.9]"
      : "text-sm"
  }`}
>
  {text}
</p>
    </div>
  );
}

/* ===== STAT ===== */
function Stat({ number, label, delay }) {
  return (
    <div data-aos="fade-up" data-aos-delay={delay}>
      <h3 className="text-2xl font-bold text-[#0B1C2C]">{number}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
  {label}
</p>
    </div>
  );
}