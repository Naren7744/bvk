import { useEffect } from "react";
import { FaCheckCircle, FaHardHat, FaClock, FaDraftingCompass } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

// Local images
import residentialImg from "../assets/images/services_img/residential.jpg";
import commercialImg from "../assets/images/services_img/commercial.jpg";
import renovationImg from "../assets/images/services_img/renovation.jpg";
import interiorImg from "../assets/images/services_img/interior.jpg";
import planningImg from "../assets/images/services_img/planning.jpg";
import turnkeyImg from "../assets/images/services_img/turnkey.jpg";

export default function Services() {
  const { t, i18n } = useTranslation();
  

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

  }, []);

const services = [
  {
    image: residentialImg,
    title: t("servicePage1Title"),
    subtitle: t("servicePage1Sub"),
    desc: t("servicePage1Desc"),
  },
  {
    image: commercialImg,
    title: t("servicePage2Title"),
    subtitle: t("servicePage2Sub"),
    desc: t("servicePage2Desc"),
  },
  {
    image: renovationImg,
    title: t("servicePage3Title"),
    subtitle: t("servicePage3Sub"),
    desc: t("servicePage3Desc"),
  },
  {
    image: interiorImg,
    title: t("servicePage4Title"),
    subtitle: t("servicePage4Sub"),
    desc: t("servicePage4Desc"),
  },
  {
    image: planningImg,
    title: t("servicePage5Title"),
    subtitle: t("servicePage5Sub"),
    desc: t("servicePage5Desc"),
  },
  {
    image: turnkeyImg,
    title: t("servicePage6Title"),
    subtitle: t("servicePage6Sub"),
    desc: t("servicePage6Desc"),
  },
];
  return (
    <section className="pt-[calc(var(--nav-height)+60px)] pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-14"  data-aos="fade-down">
          <p className="text-[oklch(0.47_0.17_28.33)] tracking-[5px] text-xs mb-4">
            {t("servicesHeroBadge")}
          </p>

          <h2
  className={`font-bold mb-6 ${
    i18n.language === "ta"
      ? "text-[36px] md:text-[58px] leading-[1.3]"
      : "text-4xl md:text-5xl leading-tight"
  }`}
>
            {t("servicesHeroTitle")}
          </h2>

          <p
  className={`text-gray-600 max-w-2xl mx-auto ${
    i18n.language === "ta"
      ? "text-[16px] leading-[2]"
      : "leading-relaxed"
  }`}
>
           {t("servicesHeroDesc")}
          </p>
        </div>

        {/* SERVICES */}
        <div className="space-y-24">
          {services.map((item, i) => (
            <div
              key={i}
                data-aos="fade-up"
              data-aos-delay={i * 100}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* IMAGE */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[340px] object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="w-full md:w-1/2">
                <p className="text-[oklch(0.47_0.17_28.33)] text-xs tracking-[3px] mb-2">
                  {item.subtitle}
                </p>

                <h3
  className={`font-semibold mb-4 ${
    i18n.language === "ta"
      ? "text-[32px] leading-[1.4]"
      : "text-2xl"
  }`}
>
                  {item.title}
                </h3>

                <p
  className={`text-gray-600 mb-5 ${
    i18n.language === "ta"
      ? "text-[17px] leading-[2]"
      : "leading-relaxed"
  }`}
>
                  {item.desc}
                </p>

                {/* PREMIUM ICON LIST */}
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-[oklch(0.47_0.17_28.33)]" />
                    {t("servicePoint1")}
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <FaHardHat className="text-[oklch(0.47_0.17_28.33)]" />
                    {t("servicePoint2")}
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <FaClock className="text-[oklch(0.47_0.17_28.33)]" />
                    {t("servicePoint3")}
                  </li>
                </ul>
              </div>

            </div>
          ))}
        </div>

{/* EXTRA SECTION */}
<div className="mt-28 text-center">
  <h3
    className={`font-semibold mb-4 ${
      i18n.language === "ta"
        ? "text-[34px] leading-[1.4]"
        : "text-2xl"
    }`}
  >
    {t("freeServiceTitle")}
  </h3>

  <p
    className={`text-gray-600 ${
      i18n.language === "ta"
        ? "text-[17px] leading-[2]"
        : ""
    }`}
  >
    {t("freeServiceDesc")}
  </p>
</div>

<div className="mt-24 grid md:grid-cols-3 gap-8 text-center">

  <div
    className="p-6 rounded-xl hover:shadow-md transition"
    data-aos="fade-up"
    data-aos-delay="0"
  >
    <FaCheckCircle className="mx-auto text-2xl text-[oklch(0.47_0.17_28.33)] mb-3" />

    <h4
      className={`font-semibold mb-2 ${
        i18n.language === "ta"
          ? "text-[22px] leading-[1.5]"
          : ""
      }`}
    >
      {t("bottomCard1Title")}
    </h4>

    <p
      className={`text-gray-500 ${
        i18n.language === "ta"
          ? "text-[15px] leading-[1.9]"
          : "text-sm"
      }`}
    >
      {t("bottomCard1Desc")}
    </p>
  </div>

  <div
    className="p-6 rounded-xl hover:shadow-md transition"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <FaDraftingCompass className="mx-auto text-2xl text-[oklch(0.47_0.17_28.33)] mb-3" />

    <h4
      className={`font-semibold mb-2 ${
        i18n.language === "ta"
          ? "text-[22px] leading-[1.5]"
          : ""
      }`}
    >
      {t("bottomCard2Title")}
    </h4>

    <p
      className={`text-gray-500 ${
        i18n.language === "ta"
          ? "text-[15px] leading-[1.9]"
          : "text-sm"
      }`}
    >
      {t("bottomCard2Desc")}
    </p>
  </div>

  <div
    className="p-6 rounded-xl hover:shadow-md transition"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <FaClock className="mx-auto text-2xl text-[oklch(0.47_0.17_28.33)] mb-3" />

    <h4
      className={`font-semibold mb-2 ${
        i18n.language === "ta"
          ? "text-[22px] leading-[1.5]"
          : ""
      }`}
    >
      {t("bottomCard3Title")}
    </h4>

    <p
      className={`text-gray-500 ${
        i18n.language === "ta"
          ? "text-[15px] leading-[1.9]"
          : "text-sm"
      }`}
    >
      {t("bottomCard3Desc")}
    </p>
  </div>

</div>

      </div>
    </section>
  );
}