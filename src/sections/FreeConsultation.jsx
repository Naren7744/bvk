import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function FreeConsultation() {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
<section className="pt-14 pb-14 overflow-hidden">

  <div className="max-w-6xl mx-auto sm:px-6">

    <div
      className="
        relative
        overflow-hidden
        bg-[#0B1C2C]
        text-white

        rounded-none
        sm:rounded-3xl

        px-5 py-10
        sm:p-10
        md:p-14
      "
      data-aos="fade-up"
    >

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">

          <p
            className="text-[#F5C542] tracking-[4px] text-xs mb-3"
            data-aos="fade-up"
          >
            {t("consultBadge")}
          </p>

          <h1
            className={`font-bold mb-4 ${
              i18n.language === "ta"
                ? "text-[26px] md:text-[24px] leading-[1.45]"
                : "text-3xl md:text-4xl leading-snug"
            }`}
          >
            {t("consultTitle1")}

            <span className="block">
              {t("consultTitle2")}
            </span>
          </h1>

          <p
            className={`text-gray-300 mb-6 ${
              i18n.language === "ta"
                ? "leading-[2] text-[14px]"
                : "leading-relaxed"
            }`}
          >
            {t("consultDesc")}
          </p>

          {/* POINTS */}
          <div
            className={`space-y-2 text-gray-300 mb-6 ${
              i18n.language === "ta"
                ? "text-[13px] leading-[1.9]"
                : "text-sm"
            }`}
          >
            <p>{t("consultPoint1")}</p>
            <p>{t("consultPoint2")}</p>
            <p>{t("consultPoint3")}</p>
          </div>

          {/* BUTTON */}
          <a
            href="https://wa.me/919585275171"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[oklch(0.47_0.17_28.33)] px-6 py-2 rounded-xl font-semibold hover:brightness-110 transition"
          >
            {t("consultBtn")}
          </a>

        </div>

        {/* RIGHT SIDE */}
        <div
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          data-aos="fade-left"
          data-aos-delay="200"
        >

          <h3 className="text-lg font-semibold mb-4">
            {t("consultContact")}
          </h3>

          <p
            className="text-sm text-gray-300 mb-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            📞 +91 9585275171
          </p>

          <p
            className="text-sm text-gray-300 mb-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            📍 Salem, Tamil Nadu
          </p>

          <p
            className="text-sm text-gray-300"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            ⏰ {t("consultTime")}
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
  );
}