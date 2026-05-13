import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";


export default function Contact() {
   const { t, i18n } = useTranslation();

    const [open, setOpen] = useState(null);

 const faqs = [
  {
    q: t("faqQ1"),
    a: t("faqA1"),
  },
  {
    q: t("faqQ2"),
    a: t("faqA2"),
  },
  {
    q: t("faqQ3"),
    a: t("faqA3"),
  },
  {
    q: t("faqQ4"),
    a: t("faqA4"),
  },
  {
    q: t("faqQ5"),
    a: t("faqA5"),
  },
];

   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

  }, []);

  return (
    <section className="pt-[calc(var(--nav-height)+60px)] sm:pt-[calc(var(--nav-height)+10px)] bg-white text-[#111] ">

<div  className="max-w-7xl mx-auto px-6 overflow-hidden">
        {/*  HERO */}
      <div className="  max-w-6xl mx-auto px-6  pb-8 text-center"  data-aos="fade-down">
        <p className="text-[oklch(0.47_0.17_28.33)] tracking-[5px] text-xs mb-3">
          {t("contactBadge")}
        </p>

        <h1
  className={`font-semibold mb-5 ${
    i18n.language === "ta"
      ? "text-[36px] md:text-[54px] leading-[1.35]"
      : "text-4xl md:text-5xl"
  }`}
>
          {t("contactTitle")}
        </h1>

        <p
  className={`text-gray-600 max-w-2xl mx-auto ${
    i18n.language === "ta"
      ? "text-[16px] leading-[2]"
      : ""
  }`}
>
         {t("contactTitle")}
        </p>
      </div>

      {/* RESPONSE STRIP */}
      <div className="bg-[#0B1C2C] text-white py-3 text-center text-sm"  data-aos="fade-up">
        {t("responseStrip")}
      </div>

      {/* CONTACT INFO CARDS */}
<div className="max-w-7xl mx-auto px-4 py-12">

  {/* HEADER */}
  <div className="text-center mb-12" data-aos="fade-up">
    <p className="text-[oklch(0.47_0.17_28.33)] tracking-[5px] text-xs mb-3">
      {t("contactDetailsBadge")}
    </p>

    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
      {t("contactDetailsTitle")}
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
      {t("contactDetailsDesc")}
    </p>
  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-3 gap-10">

    {[
      {
           title: t("card1Title"),
    value: "+91 9585275171",
    desc: t("card1Desc"),
    extra: t("card1Extra"),
    action: t("card1Action"),
    link: "tel:+919585275171",
      },
      {
    title: t("card2Title"),
    value: "bhavikshabuilders@gmail.com",
    desc: t("card2Desc"),
    extra: t("card2Extra"),
    action: t("card2Action"),
    link: "mailto:bhavikshabuilders@gmail.com",
      },
      {
        title: "Visit Office",
    title: t("card3Title"),
    value: t("card3Value"),
    desc: t("card3Desc"),
    extra: t("card3Extra"),
    action: t("card3Action"),
    link: "https://maps.google.com",
      },
    ].map((item, i) => (
      <div
        key={i}
         data-aos="fade-up"
              data-aos-delay={i * 90}
        className="group relative p-[1px] overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-transparent"
      >
        <div className="bg-white rounded-2xl p-7 h-full transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">

          {/* ICON */}
          <div className="w-12 h-12 mb-5 rounded-lg bg-gray-100 flex items-center justify-center text-[oklch(0.47_0.17_28.33)] text-lg">
            {i + 1}
          </div>

          {/* TITLE */}
          <h3 className="text-lg font-semibold mb-1">
            {item.title}
          </h3>

          {/* VALUE */}
          <p className="text-sm text-[oklch(0.47_0.17_28.33)] mb-3">
            {item.value}
          </p>

          {/* DESC */}
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            {item.desc}
          </p>

          {/* EXTRA */}
          <p className="text-xs text-gray-500 mb-6">
            {item.extra}
          </p>

          {/* CTA */}
          <a
            href={item.link}
            target="_blank"
            className="inline-block text-sm font-medium text-black border-b border-black hover:text-[oklch(0.47_0.17_28.33)] hover:border-[oklch(0.47_0.17_28.33)] transition"
          >
            {item.action}
          </a>

        </div>
      </div>
    ))}

  </div>

</div>


{/* SERVICE AREAS */}
<div className="py-12 sm:py-10 bg-white" data-aos="fade-up">

  <div className="max-w-7xl mx-auto px-5 sm:px-6">

    {/* HEADER */}
    <div className="text-center mb-10 sm:mb-12" data-aos="fade-down">

      <p
        className={`
          text-[oklch(0.47_0.17_28.33)]
          mb-3
          ${
            i18n.language === "ta"
              ? "tracking-[3px] text-[10px] sm:text-xs"
              : "tracking-[5px] text-xs"
          }
        `}
      >
        {t("serviceCoverage")}
      </p>

      <h2
        className={`
          font-semibold mb-6
          ${
            i18n.language === "ta"
              ? "text-[30px] sm:text-[40px] md:text-5xl leading-[1.35]"
              : "text-4xl md:text-5xl leading-tight"
          }
        `}
      >
        {t("serviceCoverageTitle")}
      </h2>

      <p
        className={`
          text-gray-600 max-w-2xl mx-auto
          ${
            i18n.language === "ta"
              ? "text-[14px] sm:text-[15px] leading-[2]"
              : "text-sm leading-relaxed"
          }
        `}
      >
        {t("serviceCoverageDesc")}
      </p>

    </div>

{/* MAIN PANEL */}
<div
  className="
    bg-gradient-to-br from-[#0B1C2C] to-[#102f4a]
    text-white
    relative overflow-hidden

    rounded-none
    sm:rounded-3xl

    px-5 py-8
    sm:p-6
    md:p-12

    -mx-5 sm:mx-0
  "
  data-aos="zoom-in"
>

  {/* OVERLAY GLOW */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top,_white,_transparent)]"></div>

  <div className="relative grid md:grid-cols-2 gap-10 sm:gap-12 items-center">

    {/* LEFT */}
    <div data-aos="fade-right">

      <h3
        className={`
          font-semibold mb-6
          ${
            i18n.language === "ta"
              ? "text-[26px] sm:text-[30px] leading-[1.5]"
              : "text-2xl"
          }
        `}
      >
        {t("nationwideTitle")}
      </h3>

      <p
        className={`
          text-gray-300 mb-8
          ${
            i18n.language === "ta"
              ? "text-[14px] sm:text-[15px] leading-[2]"
              : "text-sm leading-relaxed"
          }
        `}
      >
        {t("nationwideDesc")}
      </p>

      {/* FEATURES */}
      <div
        className={`
          text-gray-200
          ${
            i18n.language === "ta"
              ? "space-y-5 text-[14px] leading-[2]"
              : "space-y-4 text-sm"
          }
        `}
      >

        <p data-aos="fade-up" data-aos-delay="100">
          {t("nationPoint1")}
        </p>

        <p data-aos="fade-up" data-aos-delay="200">
          {t("nationPoint2")}
        </p>

        <p data-aos="fade-up" data-aos-delay="300">
          {t("nationPoint3")}
        </p>

        <p data-aos="fade-up" data-aos-delay="400">
          {t("nationPoint4")}
        </p>

      </div>

    </div>

    {/* RIGHT STATS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">

      <div
        className="bg-white/10 backdrop-blur rounded-xl p-4 min-h-[110px] flex flex-col items-center justify-center text-center"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <p className="text-2xl font-semibold text-[oklch(0.47_0.17_28.33)]">
          150+
        </p>

        <p
          className={`text-gray-300 break-words ${
            i18n.language === "ta"
              ? "text-[13px] leading-[1.8] px-2"
              : "text-xs"
          }`}
        >
          {t("statProjects")}
        </p>
      </div>

      <div
        className="bg-white/10 backdrop-blur rounded-xl p-4 min-h-[110px] flex flex-col items-center justify-center text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p className="text-2xl font-semibold text-[oklch(0.47_0.17_28.33)]">
          10+
        </p>

        <p
          className={`text-gray-300 break-words ${
            i18n.language === "ta"
              ? "text-[13px] leading-[1.8] px-2"
              : "text-xs"
          }`}
        >
          {t("statExperience")}
        </p>
      </div>

      <div
        className="bg-white/10 backdrop-blur rounded-xl p-4 min-h-[110px] flex flex-col items-center justify-center text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="text-2xl font-semibold text-[oklch(0.47_0.17_28.33)]">
          24/7
        </p>

        <p
          className={`text-gray-300 break-words ${
            i18n.language === "ta"
              ? "text-[13px] leading-[1.8] px-2"
              : "text-xs"
          }`}
        >
          {t("statSupport")}
        </p>
      </div>

      <div
        className="bg-white/10 backdrop-blur rounded-xl p-4 min-h-[110px] flex flex-col items-center justify-center text-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <p className="text-2xl font-semibold text-[oklch(0.47_0.17_28.33)]">
          100%
        </p>

        <p
          className={`text-gray-300 break-words ${
            i18n.language === "ta"
              ? "text-[13px] leading-[1.8] px-2"
              : "text-xs"
          }`}
        >
          {t("statTransparency")}
        </p>
      </div>

    </div>

  </div>

</div>

    {/* FOOT NOTE */}
    <div
      className={`
        mt-8 text-center text-gray-500
        ${
          i18n.language === "ta"
            ? "text-[13px] leading-[1.9]"
            : "text-sm"
        }
      `}
      data-aos="fade-up"
    >
      {t("serviceFoot")}
    </div>

  </div>

</div>

      {/* TRUST SECTION */}
<div className="bg-gray-50 py-8" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div data-aos="fade-right">

      <p className="text-[oklch(0.47_0.17_28.33)] tracking-[2px] text-xs mb-3">
        {t("whyBadge")}
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
        {t("whyTitle")}
      </h2>

      <p className="text-gray-600 mb-8 leading-relaxed">
       {t("whyDesc")}
      </p>

      {/* FEATURES */}
<div className="space-y-6">

  {[
    {
      title: t("trust1Title"),
      desc: t("trust1Desc"),
    },
    {
      title: t("trust2Title"),
      desc: t("trust2Desc"),
    },
    {
      title: t("trust3Title"),
      desc: t("trust3Desc"),
    },
    {
      title: t("trust4Title"),
      desc: t("trust4Desc"),
    },
  ].map((item, i) => (
    <div
      key={i}
      data-aos="fade-up"
      data-aos-delay={i * 120}
      className="flex items-start gap-4"
    >

      {/* NUMBER */}
      <div
        className="
          w-10 h-10 min-w-[40px]
          flex items-center justify-center
          rounded-full
          bg-[oklch(0.47_0.17_28.33)]
          text-white text-sm font-semibold
          shrink-0
          mt-1
        "
      >
        {i + 1}
      </div>

      {/* TEXT */}
      <div className="flex-1 pt-[2px]">

        <h4 className="font-semibold text-sm leading-[1.4] mb-1">
          {item.title}
        </h4>

        <p className="text-xs text-gray-500 leading-relaxed">
          {item.desc}
        </p>

      </div>

    </div>
  ))}

</div>

    </div>

    {/* RIGHT VISUAL BLOCK */}
    <div className="relative" data-aos="fade-left">

      {/* MAIN BOX */}
      <div className="bg-white rounded-3xl shadow-xl p-10 text-center"  data-aos="zoom-in">

        <h3 className="text-2xl font-semibold mb-6">
          {t("successTitle")}
        </h3>

        <p className="text-gray-600 text-sm mb-6">
         {t("successDesc")}
        </p>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-6 text-sm">

          <div data-aos="fade-up" data-aos-delay="0">
            <p className="text-xl font-semibold text-[oklch(0.47_0.17_28.33)]">
              10+
            </p>
            <p className="text-gray-500">Years Experience</p>
          </div>

          <div  data-aos="fade-up" data-aos-delay="100">
            <p className="text-xl font-semibold text-[oklch(0.47_0.17_28.33)]">
              100%
            </p>
            <p className="text-gray-500">Transparency</p>
          </div>

          <div  data-aos="fade-up" data-aos-delay="200">
            <p className="text-xl font-semibold text-[oklch(0.47_0.17_28.33)]">
              24/7
            </p>
            <p className="text-gray-500">Support</p>
          </div>

          <div  data-aos="fade-up" data-aos-delay="300">
            <p className="text-xl font-semibold text-[oklch(0.47_0.17_28.33)]">
              4.8★
            </p>
            <p className="text-gray-500">Client Rating</p>
          </div>

        </div>

      </div>

      {/* FLOAT BADGE */}
      <div className="absolute -top-6 -right-2 bg-[oklch(0.47_0.17_28.33)] text-white text-xs px-5 py-2 rounded-full shadow-lg"         data-aos="zoom-in"
        data-aos-delay="200">
        {t("trustedBadge")}
      </div>

    </div>

  </div>
</div>

      {/*  MINI FAQ */}

    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-[oklch(0.47_0.17_28.33)] tracking-[5px] text-xs mb-3">
            FAQ
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {t("faqTitle")}
          </h2>

          <p className="text-gray-600 text-sm max-w-xl mx-auto">
           {t("faqDesc")}
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">

          {faqs.map((item, i) => (
            <div
              key={i}
                       data-aos="fade-up"
                data-aos-delay={i * 100}
              className="border border-gray-200 rounded-xl overflow-hidden transition"
            >

              {/* QUESTION */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left bg-white hover:bg-gray-50 transition"
              >
                <span className="text-sm font-medium">
                  {item.q}
                </span>

                <span className="text-[oklch(0.47_0.17_28.33)] text-lg">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`px-6 text-sm text-gray-600 transition-all duration-300 ${
                  open === i ? "max-h-40 py-4" : "max-h-0 overflow-hidden"
                }`}
              >
                {item.a}
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>



<div className="bg-gray-50 py-12 sm:py-14" data-aos="fade-up">

  <div className="max-w-7xl mx-auto px-5 sm:px-6">

    {/* HEADER */}
    <div className="text-center mb-10 sm:mb-12">

      <p
        className={`
          text-[oklch(0.47_0.17_28.33)]
          mb-3
          ${
            i18n.language === "ta"
              ? "tracking-[3px] text-[10px] sm:text-xs"
              : "tracking-[5px] text-xs"
          }
        `}
        data-aos="fade-down"
      >
        {t("processBadge")}
      </p>

      <h2
        className={`
          font-semibold mb-4
          ${
            i18n.language === "ta"
              ? "text-[26px] sm:text-[26px] md:text-[36px] leading-[1.2]"
              : "text-3xl md:text-4xl"
          }
        `}
      >
        {t("processTitle")}
      </h2>

      <p
        className={`
          text-gray-600 max-w-2xl mx-auto
          ${
            i18n.language === "ta"
              ? "text-[14px] sm:text-[15px] leading-[2]"
              : "text-sm leading-relaxed"
          }
        `}
      >
        {t("processDesc")}
      </p>

    </div>

    {/* STEPS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">

      {[
        {
          title: t("process1Title"),
          desc: t("process1Desc"),
        },
        {
          title: t("process2Title"),
          desc: t("process2Desc"),
        },
        {
          title: t("process3Title"),
          desc: t("process3Desc"),
        },
        {
          title: t("process4Title"),
          desc: t("process4Desc"),
        },
      ].map((item, i) => (
        <div
          key={i}
          data-aos="fade-up"
          data-aos-delay={i * 120}
          className="group relative p-[1px] overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-transparent"
        >

          <div className="bg-white rounded-2xl p-5 sm:p-6 h-full transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">

            {/* STEP NUMBER */}
            <div className="w-14 h-14 mb-5 rounded-full bg-[oklch(0.47_0.17_28.33)] text-white flex items-center justify-center font-semibold text-lg">
              {i + 1}
            </div>

            {/* TITLE */}
            <h3
              className={`
                font-semibold mb-3
                ${
                  i18n.language === "ta"
                    ? "text-[20px] leading-[1.6]"
                    : "text-lg"
                }
              `}
            >
              {item.title}
            </h3>

            {/* DESC */}
            <p
              className={`
                text-gray-600 mb-4
                ${
                  i18n.language === "ta"
                    ? "text-[14px] leading-[2]"
                    : "text-sm leading-relaxed"
                }
              `}
            >
              {item.desc}
            </p>

            {/* FOOT */}
            <p
              className={`
                text-gray-400 border-t pt-3
                ${
                  i18n.language === "ta"
                    ? "text-[12px] leading-[1.8]"
                    : "text-xs"
                }
              `}
            >
              {i18n.language === "ta"
                ? `படி ${i + 1} / 4`
                : `Step ${i + 1} of 4`}
            </p>

          </div>

        </div>
      ))}

    </div>

    {/* EXTRA LINE */}
    <div
      className={`
        mt-12 text-center text-gray-500
        ${
          i18n.language === "ta"
            ? "text-[13px] leading-[1.9]"
            : "text-sm"
        }
      `}
      data-aos="fade-up"
    >
      {t("processFoot")}
    </div>

  </div>

</div>



<div className="py-12 sm:py-14 bg-white" data-aos="fade-up">

  <div className="max-w-7xl mx-auto px-5 sm:px-6">

    {/* HEADER */}
    <div className="text-center mb-14 sm:mb-20" data-aos="fade-down">

      <p
        className={`
          text-[oklch(0.47_0.17_28.33)]
          mb-3
          ${
            i18n.language === "ta"
              ? "tracking-[3px] text-[10px] sm:text-xs"
              : "tracking-[5px] text-xs"
          }
        `}
      >
        {t("testBadge")}
      </p>

      <h2
        className={`
          font-semibold mb-4
          ${
            i18n.language === "ta"
              ? "text-[26px] sm:text-[26px] md:text-[40px] leading-[1.4]"
              : "text-3xl md:text-4xl"
          }
        `}
      >
        {t("testTitle")}
      </h2>

      <p
        className={`
          text-gray-600 max-w-2xl mx-auto
          ${
            i18n.language === "ta"
              ? "text-[14px] sm:text-[15px] leading-[2]"
              : "text-sm leading-relaxed"
          }
        `}
      >
        {t("testDesc")}
      </p>

    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

      {[
        {
          name: "Ramesh Kumar",
          location: t("clientLocation1"),
          text: t("clientText1"),
        },
        {
          name: "Arun Prakash",
          location: t("clientLocation2"),
          text: t("clientText2"),
        },
        {
          name: "Sathish R",
          location: t("clientLocation3"),
          text: t("clientText3"),
        },
      ].map((item, i) => (
        <div
          key={i}
          data-aos="fade-up"
          data-aos-delay={i * 120}
          className="group relative p-[1px] overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-transparent"
        >

          <div className="bg-white rounded-2xl p-5 sm:p-6 h-full transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">

            {/* TOP */}
            <div className="flex justify-between items-center mb-4 gap-3">

              {/* USER ICON */}
              <div className="w-10 h-10 shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-[oklch(0.47_0.17_28.33)]">
                {item.name.charAt(0)}
              </div>

              {/* RATING */}
              <div className="text-yellow-400 text-sm shrink-0">
                ★★★★★
              </div>

            </div>

            {/* TEXT */}
            <p
              className={`text-gray-600 mb-6 ${
                i18n.language === "ta"
                  ? "text-[14px] sm:text-[15px] leading-[2]"
                  : "text-sm leading-relaxed"
              }`}
            >
              “{item.text}”
            </p>

            {/* FOOT */}
            <div className="border-t pt-4">

              <p
                className={`font-semibold ${
                  i18n.language === "ta"
                    ? "text-[15px] leading-[1.7]"
                    : "text-sm"
                }`}
              >
                {item.name}
              </p>

              <p
                className={`text-gray-500 ${
                  i18n.language === "ta"
                    ? "text-[13px] leading-[1.8]"
                    : "text-xs"
                }`}
              >
                {item.location}
              </p>

            </div>

          </div>

          {/* BADGE */}
          <div
            className={`
              absolute top-4 right-4
              bg-[oklch(0.47_0.17_28.33)]
              text-white px-3 py-1 rounded-full
              ${
                i18n.language === "ta"
                  ? "text-[10px] sm:text-[11px]"
                  : "text-xs"
              }
            `}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {t("verified")}
          </div>

        </div>
      ))}

    </div>

    {/* FOOT STRIP */}
    <div
      className={`
        mt-14 sm:mt-16 text-center text-gray-500
        ${
          i18n.language === "ta"
            ? "text-[13px] leading-[1.9]"
            : "text-sm"
        }
      `}
      data-aos="fade-up"
    >
      {t("clientRating")}
    </div>

  </div>

</div>
</div>


</section>
  );
}