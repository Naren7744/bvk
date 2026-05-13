import img1 from "../assets/images/about_images/about1.jpg";
import img2 from "../assets/images/about_images/about2.jpg";
import img3 from "../assets/images/about_images/about3.jpg";
import img4 from "../assets/images/about_images/about4.jpg";
import img5 from "../assets/images/about_images/about5.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
 const sections = [
  {
    title: t("aboutPageSec1Title"),
    content: t("aboutPageSec1Desc"),
    img: img1,
  },
  {
    title: t("aboutPageSec2Title"),
    content: t("aboutPageSec2Desc"),
    img: img2,
  },
  {
    title: t("aboutPageSec3Title"),
    content: t("aboutPageSec3Desc"),
    img: img3,
  },
  {
    title: t("aboutPageSec4Title"),
    content: t("aboutPageSec4Desc"),
    img: img4,
  },
  {
    title: t("aboutPageSec5Title"),
    content: t("aboutPageSec5Desc"),
    img: img5,
  },
];

  return (
<section className=" bg-white pt-[calc(var(--nav-height)+40px)] sm:pt-[calc(var(--nav-height)+10px)] bg-white text-[#0B1C2C] overflow-hidden">

  <div className="max-w-6xl mx-auto px-5 sm:px-6">

    {/* HERO */}
    <div
      className="max-w-6xl mx-auto px-0 sm:px-6 py-6 sm:py-8 text-center relative"
      data-aos="fade-down"
    >

      {/* subtle background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="max-w-6xl mx-auto px-6 py-3 text-center relative overflow-hidden"></div>
      </div>

      <div className="relative z-10">

        {/* small label */}
        <p className="text-[oklch(0.47_0.17_28.33)] text-[10px] sm:text-xs tracking-[3px] sm:tracking-[4px] mb-4">
          {t("aboutHeroBadge")}
        </p>

        {/* main heading */}
        <h1
          className={`font-bold mb-6 ${
            i18n.language === "ta"
              ? "text-[30px] sm:text-[32px] md:text-[60px] leading-[1.2]"
              : "text-[34px] sm:text-5xl md:text-6xl leading-tight"
          }`}
        >
          {t("aboutHeroTitle1")}

          <span className="block text-[oklch(0.47_0.17_28.33)]">
            {t("aboutHeroTitle2")}
          </span>
        </h1>

        {/* description */}
        <p
          className={`text-gray-600 max-w-2xl mx-auto mb-8 ${
            i18n.language === "ta"
              ? "text-[14px] sm:text-[16px] leading-[2]"
              : "leading-relaxed text-[15px] sm:text-base"
          }`}
        >
          {t("aboutHeroDesc")}
        </p>

      </div>
    </div>

    {/* SECTIONS */}
    <div className="max-w-7xl mx-auto px-0 sm:px-6 pb-14 sm:pb-16 space-y-16 sm:space-y-24">

      {sections.map((item, i) => (
        <div
          key={i}
          className="grid md:grid-cols-2 gap-10 sm:gap-12 items-center"
        >

          {/* IMAGE */}
          <div
            className={`${i % 2 !== 0 ? "md:order-2" : ""}`}
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <img
              src={item.img}
              alt={item.title}
              className="rounded-2xl shadow-xl w-full h-[260px] sm:h-[380px] md:h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div
            className={`${i % 2 !== 0 ? "md:order-1" : ""}`}
            data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
          >

            <h2
              className={`font-semibold mb-4 ${
                i18n.language === "ta"
                  ? "text-[26px] sm:text-[28px] leading-[1.22]"
                  : "text-[28px] sm:text-3xl"
              }`}
            >
              {item.title}
            </h2>

            <p
              className={`text-gray-600 ${
                i18n.language === "ta"
                  ? "text-[15px] sm:text-[17px] leading-[2]"
                  : "leading-relaxed text-[15px] sm:text-base"
              }`}
            >
              {item.content}
            </p>

          </div>

        </div>
      ))}
    </div>

    {/* CTA */}
    <div
      className="text-center py-14 sm:py-16 border-t border-gray-200"
      data-aos="zoom-in"
    >

      <h2 className="text-[26px] sm:text-[28] font-semibold mb-4">
        {t("aboutPageCta")}
      </h2>

      <Link
        to="/getquote"
        className="inline-flex w-full sm:w-auto justify-center px-6 py-3 bg-[oklch(0.47_0.17_28.33)] text-white rounded-md cursor-pointer"
      >
        {t("aboutPageBtn")}
      </Link>

    </div>

  </div>
</section>
  );
}