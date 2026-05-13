import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  FaHome,
  FaBuilding,
  FaCouch,
  FaTools,
  FaCheckCircle,
  FaUserTie,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import serviceImg from "../assets/hservice_img/house.jpg"; 
import serviceImg1a from "../assets/hservice_img/serviceImg1a.jpg"; 
import serviceImg1b from "../assets/hservice_img/serviceImg1b.jpg"; 
import serviceImg2a from "../assets/hservice_img/serviceImg2a.jpg"; 
import serviceImg2b from "../assets/hservice_img/serviceImg2b.jpg"; 
import serviceImg3a from "../assets/hservice_img/serviceImg3a.jpg"; 
import serviceImg3b from "../assets/hservice_img/serviceImg3b.jpg"; 
import serviceImg4a from "../assets/hservice_img/serviceImg4a.jpg"; 
import serviceImg4b from "../assets/hservice_img/serviceImg4b.jpg"; 


export default function Services() {
   const { t, i18n } = useTranslation();


    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);


  const services = [
    {
      id: "01",
      title: t("serviceCard1Title"),
      desc:  t("serviceCard1Desc"),
      icon: <FaHome />,
      images: [serviceImg1a, serviceImg1b], 
    },
    {
      id: "02",
      title: t("serviceCard2Title"),
      desc:  t("serviceCard2Desc"),
      icon: <FaBuilding />,
      images: [serviceImg2a, serviceImg2b],
    },
    {
      id: "03",
      title: t("serviceCard3Title"),
      desc:  t("serviceCard3Desc"),
      icon: <FaCouch />,
      images: [serviceImg3a, serviceImg3b],
    },
    {
      id: "04",
      title:t("serviceCard4Title"),
      desc:  t("serviceCard4Desc"),
      icon: <FaTools />,
      images: [serviceImg4a, serviceImg4b],
    },
  ];

  return (
    <section className="py-15 bg-gray-100 overflow-hidden bg-white" >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          <div data-aos="fade-right">
<p className="inline-block text-[oklch(0.68_0.22_28.33)] text-[10px] sm:text-xs tracking-[4px] mb-2 px-2 py-[3px] rounded-sm backdrop-blur-[6px] bg-white/[0.03]">
  {t("servicesBadge")}
</p>

            <h2
  className={`font-bold mb-5 ${
    i18n.language === "ta"
      ? "text-4xl md:text-[34px] leading-[1.22]"
      : "text-4xl md:text-5xl leading-tight"
  }`}
>
              {t("servicesTitle1")} <br />
              <span className="text-[oklch(0.47_0.17_28.33)]">{t("servicesTitle2")}</span>
            </h2>

            <p
  className={`text-gray-600 mb-8 ${
    i18n.language === "ta"
      ? "leading-[2] text-[16px]"
      : "leading-relaxed"
  }`}
>
            {t("servicesDesc")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <Point icon={<FaCheckCircle />} text={t("servicesPoint1")} />
              <Point icon={<FaUserTie />} text={t("servicesPoint2")} />
              <Point icon={<FaClock />} text={t("servicesPoint3")} />
              <Point icon={<FaMoneyBillWave />} text={t("servicesPoint4")} />

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative" data-aos="zoom-in">
            <img
              src={serviceImg}
              className="rounded-3xl shadow-xl"
            />

            <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

            <div className="absolute bottom-6 left-6 text-white max-w-sm">
              <p className="inline-block text-[#F5C542] text-[8px] sm:text-xs tracking-[4px] mb-2 px-2 py-[3px] rounded-sm backdrop-blur-[6px] bg-white/[0.03]">
  ourPromise
</p>
              <h3 className="text-xl font-semibold leading-snug">
                {t("servicesPromiseDesc")}
              </h3>
            </div>
          </div>

        </div>

        {/* SERVICES GRID */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {services.map((s, i) => (
    <div
      key={i}
      data-aos="fade-up"
      data-aos-delay={i * 120}
    >
      <ServiceCard service={s} />
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

/* ===== POINT ===== */
function Point({ icon, text }) {
   const { t, i18n } = useTranslation();

  return (
    <div className="flex items-center gap-3 overflow-hidden"  data-aos="fade-up">
      <div className="bg-[oklch(0.47_0.17_28.33/0.1)] text-[oklch(0.47_0.17_28.33)] p-2 rounded-full text-sm">
        {icon}
      </div>
      <p
  className={`text-gray-700 font-medium ${
    text?.length > 18
      ? "text-[15px] leading-[1.8]"
      : "text-sm"
  }`}
>
  {text}
</p>
    </div>
  );
}

/* ===== SERVICE CARD ===== */
function ServiceCard({ service }) {
   const { t, i18n } = useTranslation();

  const [index, setIndex] = useState(0);

  

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={service.images[index]}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* ICON */}
        <div className="absolute top-4 left-4 bg-[#0B1C2C] text-[oklch(0.47_0.17_28.33)] p-3 rounded-full shadow-lg">
          {service.icon}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3">
          {service.desc}
        </p>

        <button className="text-[oklch(0.47_0.17_28.33)] text-sm font-medium hover:underline">
          {t("learnMore")} →
        </button>
      </div>
    </div>
  );
}