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

  <div className="max-w-7xl mx-auto px-3 sm:px-6">

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
{/* LEADERSHIP SECTION */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 sm:py-14">

  {/* TITLE */}
  <div className="text-center mb-16" data-aos="fade-up">

    <p
      className={`
        text-[oklch(0.47_0.17_28.33)]
        tracking-[4px]
        mb-4
        ${
          i18n.language === "ta"
            ? "text-[11px]"
            : "text-[10px]"
        }
      `}
    >
      {t("leaderBadge")}
    </p>

    <h2
      className={`
        font-bold text-[#0B1C2C]
        ${
          i18n.language === "ta"
            ? "text-[30px] sm:text-[42px] leading-[1.35]"
            : "text-4xl sm:text-5xl leading-tight"
        }
      `}
    >
      {t("leaderTitle")}
    </h2>

  </div>

  {/* FOUNDER */}
  <div
    className="
      grid lg:grid-cols-[420px_1fr]
      gap-10 items-center
      mb-20
    "
    data-aos="fade-up"
  >

    {/* IMAGE */}
    <div className="relative group">

      <div
        className="
          absolute -inset-2 rounded-[32px]
          bg-gradient-to-br
          from-[oklch(0.47_0.17_28.33/0.18)]
          to-transparent
          blur-xl opacity-70
        "
      />

      <img
        src="/Founder.jpeg"
        alt="Founder"
        className="
          relative z-10
          w-full h-[480px]
          object-cover
          rounded-[28px]
          shadow-[0_20px_50px_rgba(0,0,0,0.12)]
          transition duration-700
          group-hover:scale-[1.02]
        "
      />

    </div>

    {/* CONTENT */}
    <div>

      <p
        className={`
          text-[oklch(0.47_0.17_28.33)]
          font-semibold tracking-[3px]
          mb-3
          ${
            i18n.language === "ta"
              ? "text-[14px]"
              : "text-sm"
          }
        `}
      >
        {t("founderRole")}
      </p>

      <h3
        className={`
          font-bold text-[#0B1C2C] mb-6
          ${
            i18n.language === "ta"
              ? "text-[34px] leading-[1.3]"
              : "text-5xl"
          }
        `}
      >
        S Chinraj
      </h3>

      <p
        className={`
          text-gray-600 max-w-2xl
          ${
            i18n.language === "ta"
              ? "text-[15px] leading-[2]"
              : "text-[17px] leading-relaxed"
          }
        `}
      >
        {t("founderDesc")}
      </p>

    </div>

  </div>

  {/* MD */}
  <div
    className="
      grid lg:grid-cols-[1fr_420px]
      gap-10 items-center
    "
    data-aos="fade-up"
    data-aos-delay="100"
  >

    {/* CONTENT */}
    <div className="lg:order-1 order-2">

      <p
        className={`
          text-[oklch(0.47_0.17_28.33)]
          font-semibold tracking-[3px]
          mb-3
          ${
            i18n.language === "ta"
              ? "text-[14px]"
              : "text-sm"
          }
        `}
      >
        {t("mdRole")}
      </p>

      <h3
        className={`
          font-bold text-[#0B1C2C] mb-6
          ${
            i18n.language === "ta"
              ? "text-[30px] leading-[1.35]"
              : "text-5xl"
          }
        `}
      >
        M Sathish D.Arch, B.E.,
      </h3>

      <p
        className={`
          text-gray-600 max-w-2xl
          ${
            i18n.language === "ta"
              ? "text-[15px] leading-[2]"
              : "text-[17px] leading-relaxed"
          }
        `}
      >
        {t("mdDesc")}
      </p>

    </div>

    {/* IMAGE */}
    <div className="relative group lg:order-2 order-1">

      <div
        className="
          absolute -inset-2 rounded-[32px]
          bg-gradient-to-br
          from-[oklch(0.47_0.17_28.33/0.18)]
          to-transparent
          blur-xl opacity-70
        "
      />

      <img
        src="/md.jpeg"
        alt="Managing Director"
        className="
          relative z-10
          w-full h-[480px]
          object-cover
          rounded-[28px]
          shadow-[0_20px_50px_rgba(0,0,0,0.12)]
          transition duration-700
          group-hover:scale-[1.02]
        "
      />

    </div>

  </div>

</div>
{/* VISION & MISSION */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14">

  {/* TOP TITLE */}
  <div
    className="text-center mb-14"
    data-aos="fade-up"
  >

    <p
      className={`
        text-[oklch(0.47_0.17_28.33)]
        tracking-[4px]
        mb-4
        ${
          i18n.language === "ta"
            ? "text-[11px]"
            : "text-[10px]"
        }
      `}
    >
      {t("visionBadge")}
    </p>

    <h2
      className={`
        font-bold text-[#0B1C2C]
        ${
          i18n.language === "ta"
            ? "text-[30px] sm:text-[42px] leading-[1.35]"
            : "text-4xl sm:text-5xl leading-tight"
        }
      `}
    >
      {t("visionTitle")}
    </h2>

  </div>

  {/* CARDS */}
  <div className="grid md:grid-cols-2 gap-8">

    {/* VISION */}
    <div
      className="
        relative overflow-hidden rounded-[30px]
        border border-gray-200
        bg-white
        p-8 sm:p-10
        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        transition-all duration-500
      "
      data-aos="fade-right"
    >

      {/* glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[oklch(0.47_0.17_28.33/0.08)] blur-3xl rounded-full"></div>

      <div className="relative z-10">

        <div
          className="
            w-14 h-14 rounded-2xl
            bg-[oklch(0.47_0.17_28.33)]
            text-white
            flex items-center justify-center
            text-2xl
            mb-6
          "
        >
          ✦
        </div>

        <h3
          className={`
            font-bold text-[#0B1C2C] mb-5
            ${
              i18n.language === "ta"
                ? "text-[28px] leading-[1.3]"
                : "text-3xl"
            }
          `}
        >
          {t("visionHeading")}
        </h3>

        <p
          className={`
            text-gray-600
            ${
              i18n.language === "ta"
                ? "text-[15px] leading-[2]"
                : "text-[16px] leading-relaxed"
            }
          `}
        >
          {t("visionDesc")}
        </p>

      </div>

    </div>

    {/* MISSION */}
    <div
      className="
        relative overflow-hidden rounded-[30px]
        border border-gray-200
        bg-[#0B1C2C]
        text-white
        p-8 sm:p-10
        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.16)]
        transition-all duration-500
      "
      data-aos="fade-left"
    >

      {/* glow */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 blur-3xl rounded-full"></div>

      <div className="relative z-10">

        <div
          className="
            w-14 h-14 rounded-2xl
            bg-white
            text-[oklch(0.47_0.17_28.33)]
            flex items-center justify-center
            text-2xl
            mb-6
          "
        >
          ◆
        </div>

        <h3
          className={`
            font-bold mb-5
            ${
              i18n.language === "ta"
                ? "text-[28px] leading-[1.3]"
                : "text-3xl"
            }
          `}
        >
          {t("missionHeading")}
        </h3>

        <p
          className={`
            text-gray-300
            ${
              i18n.language === "ta"
                ? "text-[15px] leading-[2]"
                : "text-[16px] leading-relaxed"
            }
          `}
        >
          {t("missionDesc")}
        </p>

      </div>

    </div>

  </div>

</div>

  </div>
</section>
  );
}