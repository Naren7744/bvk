import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import test1 from "../assets/hservice_img/test1.jpg";
import test2 from "../assets/hservice_img/test2.jpg";
import test3 from "../assets/hservice_img/test3.jpg";
import test4 from "../assets/hservice_img/test4.jpg";
import test5 from "../assets/hservice_img/test5.jpg";

const testimonials = (t) => [
  {
    name: "Suresh Kumar",
    role: t("testRole1"),
    image: test1,
    text: t("testText1"),
  },
  {
    name: "Lakshmi Priya",
    role: t("testRole2"),
    image: test2,
    text: t("testText2"),
  },
  {
    name: "Karthik Raj",
    role: t("testRole3"),
    image: test3,
    text: t("testText3"),
  },
  {
    name: "Divya Lakshmi",
    role: t("testRole4"),
    image: test4,
    text: t("testText4"),
  },
  {
    name: "Prakash Kumar",
    role: t("testRole5"),
    image: test5,
    text: t("testText5"),
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { t, i18n } = useTranslation();
  const testimonialList = testimonials(t);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonialList.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

    const current = testimonialList[active];


  return (
    <section className="py-15 bg-gray-100 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div data-aos="fade-right" key={active}>

          <p className="text-[oklch(0.47_0.17_28.33)] font-semibold mb-2">
            {t("testBadge")}
          </p>

          <h2
  className={`font-bold mb-6 ${
    i18n.language === "ta"
      ? "text-[32px] leading-[1.3]"
      : "text-4xl"
  }`}
>
            {t("testTitle")}
          </h2>
         <p   className={`text-gray-700 mb-8 data-aos="fade-up" ${
  i18n.language === "ta"
    ? "text-[14px] leading-[2]"
    : "text-xl leading-relaxed"
}`}  >
  “{current.text}”
</p>

       

          <div 
            className="flex items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <img
              src={current.image}
              alt={current.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-[oklch(0.47_0.17_28.33)]"
            />

            <div>
              <h3 className="font-semibold text-lg">
                {current.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {current.role}
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE LIST */}
        <div className="space-y-4" data-aos="fade-left">

          {testimonialList.map((t, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                i === active
                  ? "bg-[#0B1C2C] text-white shadow-lg scale-[1.02]"
                  : "bg-white hover:shadow-md"
              }`}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p
  className={`opacity-70 ${
    i18n.language === "ta"
      ? "text-[13px] leading-[1.8]"
      : "text-sm"
  }`}
>
  {t.role}
</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}