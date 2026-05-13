import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import projectImg1a from "../assets/hservice_img/projectImg1a.jpg";
import projectImg1b from "../assets/hservice_img/projectImg1b.jpg"; 
import projectImg2a from "../assets/hservice_img/projectImg2a.jpg"; 
import projectImg2b from "../assets/hservice_img/projectImg2b.jpg"; 
import projectImg3a from "../assets/hservice_img/projectImg3a.jpg"; 
import projectImg3b from "../assets/hservice_img/projectImg3b.jpg"; 
import projectImg4a from "../assets/hservice_img/projectImg4a.jpg"; 
import projectImg4b from "../assets/hservice_img/projectImg4b.jpg"; 
import projectImg5a from "../assets/hservice_img/projectImg5a.jpg"; 
import projectImg5b from "../assets/hservice_img/projectImg5b.jpg"; 
import projectImg6a from "../assets/hservice_img/projectImg6a.jpg"; 
import projectImg6b from "../assets/hservice_img/projectImg6b.jpg"; 

const projects = (t) => [
  {
    title: t("project1Title"),
    type: t("project1Type"),
    location: t("project1Location"),
    images: [projectImg1a, projectImg1b],
  },
  {
    title: t("project2Title"),
    type: t("project2Type"),
    location: t("project2Location"),
    images: [projectImg2a, projectImg2b],
  },
  {
    title: t("project3Title"),
    type: t("project3Type"),
    location: t("project3Location"),
    images: [projectImg3a, projectImg3b],
  },
  {
    title: t("project4Title"),
    type: t("project4Type"),
    location: t("project4Location"),
    images: [projectImg4a, projectImg4b],
  },
  {
    title: t("project5Title"),
    type: t("project5Type"),
    location: t("project5Location"),
    images: [projectImg5a, projectImg5b],
  },
  {
    title: t("project6Title"),
    type: t("project6Type"),
    location: t("project6Location"),
    images: [projectImg6a, projectImg6b],
  },
];

/* ================= CARD ================= */
function ProjectCard({ project, onClick }) {
  const [i, setIndex] = useState(0);
const { t, i18n } = useTranslation();
const projectList = projects(t);



  

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onClick={() => onClick(project)}
      className="relative overflow-hidden rounded-2xl group shadow-xl cursor-pointer"  data-aos="fade-up"
      data-aos-delay={i * 120} bg-white
    >
      <img
        src={project.images[i]}
        className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      <div className="absolute bottom-0 p-5 text-white">
        <p className="inline-block text-[#F5C542] text-[10px] sm:text-xs tracking-[2px] mb-1 px-2 py-[3px] rounded-sm backdrop-blur-sm bg-white/[0.03]">
          {project.type}
        </p>
        <h3
  className={`font-bold ${
    i18n.language === "ta"
      ? "text-[19px] sm:text-[22px] leading-[1.6]"
      : "text-xl"
  }`}
>
  {project.title}
</h3>
        <p
  className={`text-gray-300 ${
    i18n.language === "ta"
      ? "text-[13px] sm:text-[15px] leading-[1.8]"
      : "text-sm"
  }`}
>
  {project.location}
</p>
      </div>
    </div>
  );
}

/* ================= LIGHTBOX ================= */
function Lightbox({ project, onClose }) {
  const [index, setIndex] = useState(0);
const { t, i18n } = useTranslation();
const projectList = projects(t);



  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 overflow-hidden bg-white">

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl"
      >
        ✕
      </button>

      {/* Prev */}
      <button
        onClick={() => setIndex(index === 0 ? 1 : 0)}
        className="absolute left-3 sm:left-6 text-white text-3xl"
      >
        ‹
      </button>

      {/* Image */}
      <img
        src={project.images[index]}
       className="max-h-[75vh] max-w-[92vw] rounded-xl shadow-lg object-contain" alt={project.title}
      />

      {/* Next */}
      <button
        onClick={() => setIndex(index === 0 ? 1 : 0)}
        className="absolute right-6 text-white text-3xl"
      >
        ›
      </button>

    </div>
  );
}

/* ================= MAIN ================= */
export default function Projects() {
  const [selected, setSelected] = useState(null);
const { t, i18n } = useTranslation();
const projectList = projects(t);



    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-14 sm:py-16 bg-gray-100 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="text-center mb-14" data-aos="fade-down">
          <p className="text-[oklch(0.47_0.17_28.33)] font-semibold mb-2">
           {t("projectsBadge")}
          </p>

          <h2
  className={`font-bold ${
    i18n.language === "ta"
      ? "text-[30px] sm:text-[38px] md:text-[42px] leading-[1.35]"
      : "text-4xl"
  }`}
>
            {t("projectsTitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((p, i) => (
            <ProjectCard key={i} project={p} onClick={setSelected} />
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <Lightbox project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}