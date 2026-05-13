import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import quoteImg from "../../assets/images/quote_images/quote_img.jpg";

export default function GetQuote() {
  const { t, i18n } = useTranslation();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="bg-white text-[#111] overflow-hidden">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 pt-[calc(var(--nav-height)+60px)] pb-12 text-center" data-aos="fade-down">
<p
  className={`text-[oklch(0.47_0.17_28.33)] tracking-[6px] mb-4 ${
    i18n.language === "ta"
      ? "text-[13px]"
      : "text-xs"
  }`}
  data-aos="fade-up"
  data-aos-delay="100"
>
  {t("quoteBadge")}
</p>

<h1
  className={`font-bold mb-6 ${
    i18n.language === "ta"
      ? "text-[30px] md:text-[60px] leading-[1.35]"
      : "text-4xl md:text-6xl leading-tight"
  }`}
  data-aos="fade-up"
  data-aos-delay="200"
>
  {t("quoteTitle1")}

  <span className="block text-[oklch(0.47_0.17_28.33)]">
    {t("quoteTitle2")}
  </span>
</h1>

<p
  className={`text-gray-600 max-w-2xl mx-auto mb-6 ${
    i18n.language === "ta"
      ? "text-[14px] leading-[2]"
      : ""
  }`}
  data-aos="fade-up"
  data-aos-delay="300"
>
  {t("quoteDesc")}
</p>

  
      </div>
{/*  WHAT YOU GET  */}
<div className="bg-[#0B1C2C] text-white py-12" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-16" data-aos="fade-down">
<p
  className={`text-[#F5C542] tracking-[5px] mb-3 ${
    i18n.language === "ta"
      ? "text-[13px]"
      : "text-xs"
  }`}
>
  {t("whatYouGetBadge")}
</p>

<h2
  className={`font-semibold mb-4 ${
    i18n.language === "ta"
      ? "text-[34px] leading-[1.4]"
      : "text-3xl md:text-4xl"
  }`}
>
  {t("whatYouGetTitle")}
</h2>

<p
  className={`text-gray-400 max-w-2xl mx-auto ${
    i18n.language === "ta"
      ? "text-[15px] leading-[2]"
      : "text-sm leading-relaxed"
  }`}
>
  {t("whatYouGetDesc")}
</p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

     {[
  {
    title: t("quoteCard1Title"),
    desc: t("quoteCard1Desc"),
  },
  {
    title: t("quoteCard2Title"),
    desc: t("quoteCard2Desc"),
  },
  {
    title: t("quoteCard3Title"),
    desc: t("quoteCard3Desc"),
  },
  {
    title: t("quoteCard4Title"),
    desc: t("quoteCard4Desc"),
  },
].map((item, i) => (
        <div
          key={i}
             data-aos="fade-up"
          data-aos-delay={i * 100}
          className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/20 to-transparent"
        >
          <div className="bg-[#0f2a40] rounded-2xl p-6 h-full transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">

            {/* ICON */}
            <div className="w-12 h-12 mb-4 rounded-lg bg-white/10 flex items-center justify-center text-[oklch(0.47_0.17_28.33)] text-xl">
              {i + 1}
            </div>

            {/* TITLE */}
<h3
  className={`font-semibold mb-3 ${
    i18n.language === "ta"
      ? "text-[19px] leading-[1.5]"
      : "text-lg"
  }`}
>
  {item.title}
</h3>

<p
  className={`text-gray-400 ${
    i18n.language === "ta"
      ? "text-[14px] leading-[1.9]"
      : "text-sm leading-relaxed"
  }`}
>
  {item.desc}
</p>

            {/* LINE */}
            <div className="mt-6 h-[1px] bg-white/10"></div>

            {/* FOOT NOTE */}
           <p
  className={`text-gray-500 mt-3 ${
    i18n.language === "ta"
      ? "text-[12px]"
      : "text-xs"
  }`}
>
  {t("includedProjects")}
</p>

          </div>
        </div>
      ))}

    </div>

  </div>
</div>

      {/* PROJECT TYPES */}
<div className="max-w-7xl mx-auto px-6 py-12"data-aos="fade-up" >

  {/* HEADER */}
  <div className="text-center mb-12" data-aos="fade-down">
<p
  className={`text-[oklch(0.47_0.17_28.33)] tracking-[5px] mb-3 ${
    i18n.language === "ta"
      ? "text-[13px]"
      : "text-xs"
  }`}
>
  {t("projectTypeBadge")}
</p>

<h2
  className={`font-semibold mb-4 ${
    i18n.language === "ta"
      ? "text-[34px] leading-[1.4]"
      : "text-3xl md:text-4xl"
  }`}
>
  {t("projectTypeTitle")}
</h2>

<p
  className={`text-gray-600 max-w-2xl mx-auto ${
    i18n.language === "ta"
      ? "text-[15px] leading-[2]"
      : "text-sm leading-relaxed"
  }`}
>
  {t("projectTypeDesc")}
</p>
  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

{[
  {
    title: t("projectCard1Title"),
    size: t("projectCard1Size"),
    price: t("projectCard1Price"),
    desc: t("projectCard1Desc"),
    features: [
      t("projectCard1Feature1"),
      t("projectCard1Feature2"),
      t("projectCard1Feature3"),
    ],
  },
  {
    title: t("projectCard2Title"),
    size: t("projectCard2Size"),
    price: t("projectCard2Price"),
    desc: t("projectCard2Desc"),
    features: [
      t("projectCard2Feature1"),
      t("projectCard2Feature2"),
      t("projectCard2Feature3"),
    ],
  },
  {
    title: t("projectCard3Title"),
    size: t("projectCard3Size"),
    price: t("projectCard3Price"),
    desc: t("projectCard3Desc"),
    features: [
      t("projectCard3Feature1"),
      t("projectCard3Feature2"),
      t("projectCard3Feature3"),
    ],
  },
  {
    title: t("projectCard4Title"),
    size: t("projectCard4Size"),
    price: t("projectCard4Price"),
    desc: t("projectCard4Desc"),
    features: [
      t("projectCard4Feature1"),
      t("projectCard4Feature2"),
      t("projectCard4Feature3"),
    ],
  },
].map((item, i) => (
      <div
        key={i}
          data-aos="fade-up"
        data-aos-delay={i * 100}
        className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-gray-200 to-transparent"
      >
        <div className="bg-white rounded-2xl p-6 h-full transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">

          {/* TOP */}
          <div className="flex justify-between items-center mb-4">
            <h3
  className={`font-semibold ${
    i18n.language === "ta"
      ? "text-[20px] leading-[1.5]"
      : "text-xl"
  }`}
>
  {item.title}
</h3>
            <span className="text-xs text-gray-500">{item.size}</span>
          </div>

          {/* PRICE */}
          <p className="text-[oklch(0.47_0.17_28.33)] font-medium mb-3">
            {item.price}
          </p>

          {/* DESC */}
         <p
  className={`text-gray-600 mb-4 ${
    i18n.language === "ta"
      ? "text-[14px] leading-[1.9]"
      : "text-sm leading-relaxed"
  }`}
>
  {item.desc}
</p>

          {/* FEATURES */}
         <ul
  className={`space-y-2 text-gray-500 ${
    i18n.language === "ta"
      ? "text-[13px] leading-[1.8]"
      : "text-sm"
  }`}
>
            {item.features.map((f, idx) => (
              <li key={idx}>✔ {f}</li>
            ))}
          </ul>

          {/* FOOTER LINE */}
          <div className="mt-6 h-[1px] bg-gray-200"></div>

          {/* CTA */}
        <p
  className={`text-gray-400 mt-3 ${
    i18n.language === "ta"
      ? "text-[12px]"
      : "text-xs"
  }`}
>
  {t("modernPlanning")}
</p>

        </div>
      </div>
    ))}

  </div>

</div>

      {/* COST */}
<div className="bg-gray-50 py-12"  data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div data-aos="fade-right">
<p className={`text-[oklch(0.47_0.17_28.33)] tracking-[5px] mb-3 ${
  i18n.language === "ta" ? "text-[13px]" : "text-xs"
}`}>
  {t("costBadge")}
</p>

<h2 className={`font-semibold mb-6 ${
  i18n.language === "ta"
    ? "text-[34px] leading-[1.4]"
    : "text-3xl md:text-4xl"
}`}>
  {t("costTitle")}
</h2>

<p className={`text-gray-600 mb-6 ${
  i18n.language === "ta"
    ? "text-[15px] leading-[2]"
    : "leading-relaxed"
}`}>
  {t("costDesc")}
</p>

      <div className="space-y-3 text-sm text-gray-700">
        <p data-aos="fade-up" data-aos-delay="100"><p>✔ {t("costPoint1")}</p></p>
        <p data-aos="fade-up" data-aos-delay="200"><p>✔ {t("costPoint2")}</p></p>
        <p data-aos="fade-up" data-aos-delay="300"><p>✔ {t("costPoint3")}</p></p>
        <p data-aos="fade-up" data-aos-delay="400"><p>✔ {t("costPoint4")}</p></p>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="space-y-6">

{[
  {
    title: t("costCard1Title"),
    val: 35,
    desc: t("costCard1Desc"),
  },
  {
    title: t("costCard2Title"),
    val: 25,
    desc: t("costCard2Desc"),
  },
  {
    title: t("costCard3Title"),
    val: 20,
    desc: t("costCard3Desc"),
  },
  {
    title: t("costCard4Title"),
    val: 10,
    desc: t("costCard4Desc"),
  },
  {
    title: t("costCard5Title"),
    val: 10,
    desc: t("costCard5Desc"),
  },
].map((item, i) => (
        <div
          key={i}
            data-aos="fade-up"
          data-aos-delay={i * 100}
          className="bg-white rounded-2xl p-5 shadow-sm border hover:shadow-lg transition"
        >

          {/* HEADER */}
          <div className="flex justify-between items-center mb-2">
            <h3
  className={`font-semibold ${
    i18n.language === "ta"
      ? "text-[14px] leading-[1.7]"
      : "text-sm"
  }`}
>
  {item.title}
</h3>
            <span className="text-xs text-gray-500">{item.val}%</span>
          </div>

          {/* BAR */}
          <div className="w-full h-2 bg-gray-200 rounded mb-3">
            <div
              className="h-2 rounded bg-[oklch(0.47_0.17_28.33)]"
              style={{ width: `${item.val}%` }}
            ></div>
          </div>

          {/* DESC */}
<p
  className={`text-gray-500 ${
    i18n.language === "ta"
      ? "text-[12px] leading-[1.8]"
      : "text-xs leading-relaxed"
  }`}
>
  {item.desc}
</p>

        </div>
      ))}

    </div>

  </div>
</div>

      {/* TRUST SECTION */}
<div className="bg-gray-50 py-12" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    <div className="relative" data-aos="fade-right">

    <img
  src={quoteImg}
  className="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
/>

      <div className="absolute -bottom-8 -left-6 bg-white shadow-2xl rounded-2xl px-6 py-5 w-[220px]"  data-aos="fade-up"
        data-aos-delay="150">
        <p className="text-xs text-gray-500 mb-1">
  {t("projectsCompleted")}
</p>
        <p className="text-2xl font-semibold">150+</p>
        <div className="mt-2 h-[1px] bg-gray-200"></div>
<p
  className={`text-gray-400 mt-2 ${
    i18n.language === "ta"
      ? "text-[11px] leading-[1.7]"
      : "text-xs"
  }`}
>
  {t("residentialCommercial")}
</p>
      </div>

      {/* TOP BADGE */}
      <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-4 py-2 rounded-full backdrop-blur"  data-aos="zoom-in"
        data-aos-delay="250">
        {t("experience")}
      </div>

    </div>

    <div data-aos="fade-left">

      <p className="text-[oklch(0.47_0.17_28.33)] tracking-[5px] text-xs mb-3">
        {t("trustBadge")}
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold mb-5 leading-tight">
        {t("trustTitle1")} <br />
        {t("trustTitle2")}
      </h2>

      <p className="text-gray-600 mb-8 leading-relaxed">
 {t("trustDesc")}
      </p>

      {/* FEATURE GRID */}
      <div className="grid grid-cols-2 gap-6">

      {[
  {
    title: t("trustCard1Title"),
    desc: t("trustCard1Desc"),
  },
  {
    title: t("trustCard2Title"),
    desc: t("trustCard2Desc"),
  },
  {
    title: t("trustCard3Title"),
    desc: t("trustCard3Desc"),
  },
  {
    title: t("trustCard4Title"),
    desc: t("trustCard4Desc"),
  },
].map((item, i) => (
          <div
            key={i}
              data-aos="fade-up"
            data-aos-delay={i * 100}
            className="p-4 border rounded-xl bg-white hover:shadow-md transition"
          >
            <h3 className="text-sm font-semibold mb-1">
              {item.title}
            </h3>
            <p className="text-xs text-gray-500">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </div>

  </div>
</div>

{/* FORM */}
<div className="py-12 bg-white" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-16" data-aos="fade-down">
      <p className="text-[oklch(0.47_0.17_28.33)] tracking-[5px] text-xs mb-3">
        {t("estimationBadge")}
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
       {t("estimationTitle")}
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
    {t("estimationDesc")}
      </p>
    </div>

    {/* MAIN GRID */}
    <div className="grid md:grid-cols-2 gap-16 items-start">

      {/* LEFT PANEL */}
      <div className="space-y-8" data-aos="fade-right">

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold mb-3">{t("whatYouGetForm")}</h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>✔ {t("formPoint1")}</li>
            <li>✔ {t("formPoint2")}</li>
           <li>✔ {t("formPoint3")}</li>
           <li>✔ {t("formPoint4")}</li>
          <li>✔ {t("formPoint5")}</li>
          </ul>
        </div>

        <div className="bg-[#0B1C2C] text-white rounded-2xl p-6 shadow-lg"   data-aos="fade-up"
          data-aos-delay="100">
          <p className="text-sm text-gray-300 mb-2">
            {t("trustedClients")}
          </p>

          <h4 className="text-lg font-semibold mb-3">
          {t("professionalPlanning")}
          </h4>

          <p className="text-sm text-gray-400 mb-4">
           {t("planningDesc")}
          </p>

          <div className="flex gap-6 text-xs text-gray-300"  data-aos="fade-up"
          data-aos-delay="200">
            <span>✔ {t("exp10")}</span>
            <span>✔ {t("transparency100")}</span>
          </div>
        </div>

        <div className="bg-gray-100 p-5 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-600">📞 {t("quickSupport")}</p>
          <p className="font-semibold text-lg">+91 9585275171</p>
          <p className="text-xs text-gray-500">
            {t("instantConsult")}
          </p>
        </div>

      </div>

      {/* FORM PANEL */}
      <div className="bg-white border border-gray-300 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]" data-aos="fade-left">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* NAME + PHONE */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs text-gray-500">
  {t("fullName")}
</label>
              <input className="premiumInput" required />
            </div>

            <div>
              <label className="text-xs text-gray-500">
  {t("phoneNumber")}
</label>
              <input className="premiumInput" required />
            </div>
          </div>

          {/* LOCATION */}
          <div>
            <label className="text-xs text-gray-500">
  {t("projectLocation")}
</label>
            <input className="premiumInput" />
          </div>

          {/* TYPE + BUDGET */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs text-gray-500">
  {t("projectType")}
</label>
              <select className="premiumInput">
                <option>2BHK</option>
                <option>3BHK</option>
                <option>Villa</option>
                <option>Commercial</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-500">
  {t("budgetRange")}
</label>
              <select className="premiumInput">
                <option>10L - 20L</option>
                <option>20L - 40L</option>
                <option>40L - 80L</option>
                <option>80L+</option>
              </select>
            </div>
          </div>

          {/* SIZE */}
          <div>
            <label className="text-xs text-gray-500">
  {t("plotSize")}
</label>
            <input className="premiumInput" />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-xs text-gray-500">
  {t("requirements")}
</label>
            <textarea
              rows="4"
              className="premiumInput resize-none"
              placeholder={t("requirementsPlaceholder")}
            ></textarea>
          </div>

          {/* CTA */}
          <button className="w-full bg-[oklch(0.47_0.17_28.33)] text-white py-3 rounded-xl font-medium hover:brightness-110 transition">
            {t("getEstimate")}
          </button>

          {/* FOOT NOTE */}
          <p className="text-xs text-gray-400 text-center">
            {t("privacyText")}
          </p>

        </form>

      </div>

    </div>

  </div>
</div>

      {/* SUCCESS */}
{success && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">

    {/* BACKDROP */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" data-aos="fade-in"></div>

    {/* MODAL */}
    <div className="relative bg-white rounded-3xl px-10 py-10 text-center shadow-[0_20px_80px_rgba(0,0,0,0.3)] max-w-md w-full animate-[fadeIn_0.4s_ease]" data-aos="zoom-in">

      {/* SUCCESS ICON */}
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-100 flex items-center justify-center"  data-aos="zoom-in"
        data-aos-delay="100">
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* TITLE */}
      <h3 className="text-2xl font-semibold mb-2"   data-aos="fade-up"
        data-aos-delay="150">
        {t("successTitle")}
      </h3>

      {/* MESSAGE */}
      <p className="text-gray-600 text-sm mb-6 leading-relaxed"  data-aos="fade-up"
        data-aos-delay="200">
        {t("successDesc")} <span className="font-medium text-black">24 hours</span> 
        with a detailed estimate.
      </p>

      {/* ACTION BUTTON */}
      <button
        onClick={() => setSuccess(false)}
        className="px-6 py-2 rounded-full bg-[oklch(0.47_0.17_28.33)] text-white text-sm font-medium hover:brightness-110 transition"  data-aos="fade-up"
        data-aos-delay="250"
      >
        {t("close")}
      </button>

    </div>

  </div>
)}

    </section>
  );
}