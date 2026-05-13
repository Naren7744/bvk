import { useState, useEffect } from "react";
import {
  FaHome,
  FaBuilding,
  FaRulerCombined,
  FaBed,
  FaBath,
  FaCar,
} from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
// Images
import proj1 from "../assets/images/projects/p1.jpg";
import proj2 from "../assets/images/projects/p2.jpg";
import proj3 from "../assets/images/projects/p3.jpg";
import blueprintImg1 from "../assets/images/projects/blueprint1.jpeg";
import blueprintImg2 from "../assets/images/projects/blueprint2.jpeg";
import blueprintImg3 from "../assets/images/projects/blueprint3.jpeg";
import blueprintImg4 from "../assets/images/projects/blueprint4.jpeg";
import blueprintImg5 from "../assets/images/projects/blueprint5.jpeg";

export default function Projects() {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState("All");
  


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

  }, []);

const projects = [
  {
    title: t("project1Title"),
    type: t("project1Type"),
    img: proj1,
    location: t("project1Location"),
  },
  {
    title: t("project2Title"),
    type: t("project2Type"),
    img: proj2,
    location: t("project2Location"),
  },
  {
    title: t("project3Title"),
    type: t("project3Type"),
    img: proj3,
    location: t("project3Location"),
  },
];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section className="pt-[calc(var(--nav-height)+60px)] pb-15 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto  overflow-hidden">

        {/* HEADER */}
        <div className="text-center mb-14" data-aos="fade-down">
          <p className="text-[oklch(0.47_0.17_28.33)] tracking-[5px] text-xs mb-3">
            {t("projectsBadge")}
          </p>
          <h2
  className={`font-bold mb-4 ${
    i18n.language === "ta"
      ? "text-[28px] md:text-[32px] leading-[1.3]"
      : "text-4xl md:text-5xl"
  }`}
>
            {t("projectsTitle")}
          </h2>
          <p
  className={`text-gray-600 max-w-2xl mx-auto ${
    i18n.language === "ta"
      ? "text-[14px] leading-[2]"
      : ""
  }`}
>
           {t("projectsDesc")}
          </p>
        </div>

{/* PROJECT GRID */}
<section className="py-15" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <div className="mb-16 max-w-4xl" data-aos="fade-right">

      <p className="text-[oklch(0.47_0.17_28.33)] text-xs tracking-[5px] mb-4">
        {t("portfolioBadge")}
      </p>

      <h2
  className={`font-bold leading-tight mb-6 break-words ${
    i18n.language === "ta"
      ? "text-[28px] md:text-[32px] leading-[1.4]"
      : "text-4xl md:text-5xl"
  }`}
>
        {t("portfolioTitle")}
      </h2>

      <p className="text-lg text-gray-600 mb-4">
        {t("portfolioDesc1")}
      </p>

      <p className="text-gray-500 leading-relaxed max-w-3xl">
        {t("portfolioDesc2")}
      </p>

      {/* Divider */}
      <div className="w-20 h-[2px] bg-[oklch(0.47_0.17_28.33)] mt-6"></div>

    </div>


<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

  {filtered.map((p, i) => (
    <div
      key={i}
       data-aos="fade-up"
      data-aos-delay={i * 90}
      className="group relative rounded-3xl overflow-hidden bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500"
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={p.img}
          className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
        />

        {/* TOP BADGE */}
        <div className="absolute top-4 left-4 backdrop-blur-md bg-white/70 px-4 py-1 rounded-full text-xs font-medium text-gray-700 shadow">
          {p.type}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">

        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {p.title}
        </h3>

        <p className="text-sm text-gray-500 mb-4">
          {p.location}
        </p>

        {/* HIDDEN DESC ON HOVER */}
        <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
          <p className="text-sm text-gray-600 leading-relaxed">
            {t("projectHoverDesc")}
          </p>
        </div>

        {/* LINE */}
        <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-[oklch(0.47_0.17_28.33)] transition-all duration-500"></div>

      </div>

    </div>
  ))}

</div>

  </div>
</section>
<section className="mt-10" data-aos="fade-up">

  <div className="max-w-6xl mx-auto sm:px-6">

    <div
      className="
        relative overflow-hidden
        bg-[#0B1C2C] text-white

        rounded-none
        sm:rounded-3xl

        px-5 py-10
        sm:p-10
        md:p-14
      "
    >

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">

          <p
            className={`text-[#F5C542] tracking-[4px] mb-3 ${
              i18n.language === "ta"
                ? "text-[13px]"
                : "text-xs"
            }`}
          >
            {t("consultBadge")}
          </p>

          <h2
            className={`font-bold mb-4 ${
              i18n.language === "ta"
                ? "text-[28px] md:text-[32px] leading-[1.4]"
                : "text-3xl md:text-4xl leading-snug"
            }`}
          >
            {t("consultTitle1")}

            <span className="block">
              {t("consultTitle2")}
            </span>
          </h2>

          <p
            className={`text-gray-300 mb-6 ${
              i18n.language === "ta"
                ? "text-[14px] leading-[2]"
                : "leading-relaxed"
            }`}
          >
            {t("consultDesc")}
          </p>

          {/* POINTS */}
          <div
            className={`text-gray-300 mb-6 space-y-2 ${
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
          <button
            className={`bg-[oklch(0.47_0.17_28.33)] px-6 py-3 rounded-xl font-semibold hover:brightness-110 transition ${
              i18n.language === "ta"
                ? "text-[14px]"
                : ""
            }`}
          >
            {t("consultBtn")}
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          data-aos="fade-left"
        >

          <h3
            className={`font-semibold mb-4 ${
              i18n.language === "ta"
                ? "text-[14px]"
                : "text-lg"
            }`}
          >
            {t("consultContact")}
          </h3>

          <p
            className={`text-gray-300 mb-3 ${
              i18n.language === "ta"
                ? "text-[14px] leading-[1.8]"
                : "text-sm"
            }`}
          >
            📞 +91 9585275171
          </p>

          <p
            className={`text-gray-300 mb-3 ${
              i18n.language === "ta"
                ? "text-[14px] leading-[1.8]"
                : "text-sm"
            }`}
          >
            {t("consultCity")}
          </p>

          <p
            className={`text-gray-300 ${
              i18n.language === "ta"
                ? "text-[14px] leading-[1.8]"
                : "text-sm"
            }`}
          >
            {t("consultTime")}
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

        {/* ================= BLUEPRINT ================= */}
        <div className="mt-13 px-4 sm:px-6">

          <div className="text-center mb-10" data-aos="fade-down">
            <p className="text-[oklch(0.47_0.17_28.33)] tracking-[4px] text-xs mb-2">
              {t("blueprintBadge")}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {t("blueprintTitle")}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("blueprintDesc")}
            </p>
          </div>


{[
  {
    title: t("plan1Title"),
    area: "1000 sq.ft",
    beds: "2",
    bath: "2",
    parking: "1",
    icon: <FaHome />,
    img: blueprintImg1,
  },
  {
    title: t("plan2Title"),
    area: "1500 sq.ft",
    beds: "3",
    bath: "2-3",
    parking: "1",
    icon: <FaBuilding />,
    img: blueprintImg2,
  },
  {
    title: t("plan3Title"),
    area: "2500 sq.ft",
    beds: "4",
    bath: "3+",
    parking: "2",
    icon: <MdOutlineDesignServices />,
    img: blueprintImg3,
  },
  {
    title: t("plan4Title"),
    area: "2200 sq.ft",
    beds: "3-4",
    bath: "3",
    parking: "2",
    icon: <FaBuilding />,
    img: blueprintImg4,
  },
  {
    title: t("plan5Title"),
    area: "600 sq.ft",
    beds: "1",
    bath: "1",
    parking: "Optional",
    icon: <FaHome />,
    img: blueprintImg5,
  },
].map((plan, i) => (
            <div
              key={i}
                  data-aos="fade-up"
    data-aos-delay={i * 100}
              className={`flex flex-col md:flex-row items-center gap-12 mb-24 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* IMAGE */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={plan.img}
                  className="w-full h-[320px] object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="w-full md:w-1/2">

                <div className="flex items-center gap-3 mb-3 text-[oklch(0.47_0.17_28.33)]">
                  <span className="text-lg">{plan.icon}</span>
                  <span className="text-xs tracking-[3px]">{t("blueprintMiniBadge")}</span>
                </div>

                <h4 className="text-2xl font-semibold mb-4">
                  {plan.title}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t("blueprintPlanDesc")}
                </p>

                {/* ICON GRID */}
                <div className="grid grid-cols-2 gap-4 mb-6">

                  <Info icon={<FaRulerCombined />} label={t("infoArea")} value={plan.area} />
                  <Info icon={<FaBed />} label={t("infoArea")} value={plan.beds} />
                  <Info icon={<FaBath />} label={t("infoBathrooms")} value={plan.bath} />
                  <Info icon={<FaCar />} label={t("infoParking")} value={plan.parking} />

                </div>

                <ul className="text-sm text-gray-600 space-y-2">
                  <li>{t("blueprintPoint1")}</li>
                  <li>{t("blueprintPoint2")}</li>
                  <li>{t("blueprintPoint3")}</li>
                </ul>

              </div>

            </div>
          ))}

        </div>

        {/* YOUTUBE */}
<div className="mt-28 text-center px-4 sm:px-6" data-aos="fade-up">
  <h3 className="text-3xl font-bold mb-4">
    {t("blueprintPoint1")}
  </h3>

  <p className="text-gray-600 mb-12">
    {t("youtubeDesc")}
  </p>

  <div className="grid md:grid-cols-2 gap-10">
    {[
      "https://www.youtube.com/embed/Uhyk7ANYJxE",
      "https://www.youtube.com/embed/ODu9oKROd08",
    ].map((link, i) => (
      <VideoCard key={i} link={link} delay={i * 150} />
    ))}
  </div>

  <div className="mt-12" data-aos="fade-up">
    <a
      href="https://youtube.com/@bhavikshabuilders3620?si=AU7x2gWFmChiTfP6"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-8 py-3 rounded-full bg-[#0B1C2C] text-white font-medium"
    >
      {t("youtubeBtn")}
    </a>
  </div>
</div>

      </div>
    </section>
    
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-sm">
      <div className="text-[oklch(0.47_0.17_28.33)] text-lg">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}

function VideoCard({ link, delay }) {
  const [play, setPlay] = useState(false);
  const videoId = link.split("/embed/")[1];

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group relative rounded-2xl overflow-hidden shadow-xl"
    >
      {!play ? (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            className="w-full h-64 md:h-72 object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setPlay(true)}
              className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg"
            >
              ▶
            </button>
          </div>
        </>
      ) : (
        <iframe
          src={`${link}?autoplay=1`}
          className="w-full h-64 md:h-72"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}