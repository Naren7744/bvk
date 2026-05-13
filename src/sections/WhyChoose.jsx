import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";


export default function WhyChoose() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
  const { t, i18n } = useTranslation();


  const features = [
    {
      title: t("whyFeature1Title"),
      desc:  t("whyFeature1Desc"),
    },
    {
      title:t("whyFeature2Title"),
      desc:  t("whyFeature2Desc"),
    },
    {
      title: t("whyFeature3Title"),
      desc: t("whyFeature3Desc"),
    },
    {
      title: t("whyFeature4Title"),
      desc: t("whyFeature4Desc"),
    },
    {
      title: t("whyFeature5Title"),
      desc:t("whyFeature5Desc"),
    },
    {
      title: t("whyFeature6Title"),
      desc: t("whyFeature6Desc"),
    },
  ];

  return (
    <section className="bg-[#0B1C2C] text-white py-24 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,0,0.05),transparent_40%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-down">

          <p className="inline-block text-[#F5C542] text-[10px] tracking-[3px] px-3 py-1 rounded backdrop-blur-sm bg-white/[0.04]">
           {t("whyBadge")}
          </p>

          <h2
  className={`font-bold mt-4 mb-4 ${
    i18n.language === "ta"
      ? "text-4x1 md:text-[38px] leading-[1.22]"
      : "text-4xl md:text-5xl leading-tight"
  }`}
>
            {t("whyTitle")}
          </h2>

         <p
  className={`text-gray-300 max-w-2xl mx-auto ${
    i18n.language === "ta"
      ? "leading-[2] text-[13px]"
      : "leading-relaxed"
  }`}
>
          {t("whyDesc")}
          </p>

        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, i) => (
            <div
              key={i}
                data-aos="fade-up"
              data-aos-delay={i * 120}
              className="
                bg-white/[0.04]
                backdrop-blur-md
                border border-white/10
                p-6 rounded-2xl
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[oklch(0.47_0.17_28.33/0.4)]
              "
            >
              <h3 className="text-lg font-semibold mb-3 text-[oklch(0.47_0.17_28.33)]">
                {item.title}
              </h3>

              <p
  className={`text-gray-300 ${
    i18n.language === "ta"
      ? "text-[15px] leading-[1.9]"
      : "text-sm leading-relaxed"
  }`}
>
                {item.desc}
              </p>
            </div>
          ))}

        </div>

{/* STATS */}
<div className="mt-20 grid md:grid-cols-3 gap-8 text-center">

  <div className="p-6 rounded-xl bg-white/[0.03] backdrop-blur-sm">
    <h3 className="text-3xl font-bold text-[oklch(0.47_0.17_28.33)] mb-2">
      <SmoothCount end={150} suffix="+" />
    </h3>
    <p className="text-gray-400 text-sm">{t("whyStat1")}</p>
  </div>

  <div className="p-6 rounded-xl bg-white/[0.03] backdrop-blur-sm">
    <h3 className="text-3xl font-bold text-[oklch(0.47_0.17_28.33)] mb-2">
      <SmoothCount end={10} suffix="+" />
    </h3>
    <p className="text-gray-400 text-sm">{t("whyStat2")}</p>
  </div>

  <div className="p-6 rounded-xl bg-white/[0.03] backdrop-blur-sm">
    <h3 className="text-3xl font-bold text-[oklch(0.47_0.17_28.33)] mb-2">
      <SmoothCount end={100} suffix="%" />
    </h3>
    <p className="text-gray-400 text-sm">{t("whyStat3")}</p>
  </div>

</div>

        {/* CTA */}
        <div className="mt-20 text-center" data-aos="zoom-in">

          <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
          {t("whyCtaDesc")}
          </p>

<a
  href="https://wa.me/919585275171?text=Hi%20I%20am%20interested%20in%20your%20construction%20services"
  target="_blank"
  rel="noopener noreferrer"
  className="relative px-8 py-3 rounded-xl font-semibold overflow-hidden group text-white inline-block cursor-pointer"
>
  <span className="absolute inset-0 bg-[oklch(0.47_0.17_28.33)] pointer-events-none"></span>

  <span className="absolute top-0 left-[-100%] w-[60%] h-full 
                   bg-gradient-to-r from-transparent via-white/30 to-transparent 
                   skew-x-[-20deg] 
                   group-hover:left-[120%] 
                   transition-all duration-[1200ms] ease-out pointer-events-none"></span>

  <span className="relative z-10">
    {t("whyBtn")}
  </span>
</a>

        </div>

      </div>
    </section>
  );
}

function SmoothCount({ end, suffix }) {

  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setStart(true);
        } else {
          setStart(false);
          setCount(0);
        }

      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`count-${end}`);

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };

  }, [end]);

  useEffect(() => {

    if (!start) return;

    let current = 0;

    const interval = setInterval(() => {

      current += Math.ceil(end / 50);

      if (current >= end) {
        current = end;
        clearInterval(interval);
      }

      setCount(current);

    }, 30);

    return () => clearInterval(interval);

  }, [start, end]);

  return (
    <span id={`count-${end}`}>
      {count}{suffix}
    </span>
  );
}