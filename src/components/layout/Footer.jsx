import { FaWhatsapp, FaInstagram, FaYoutube, FaGoogle, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {

  const { t, i18n } = useTranslation();
  return (
    <footer className="bg-gradient-to-b from-[#0B1C2C] to-[#071520] text-white pt-15 pb-1 overflow-hidden">

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-14 items-start">

        {/* BRAND */}
        <div className="space-y-5">

<div className="flex items-center gap-3 cursor-pointer group select-none">

<div className="flex items-center gap-3 cursor-pointer group select-none">
  <div className="relative flex items-center justify-center">

    <img
      src="/logo.png"
      alt="Bhaviksha Builders"
      className="
        h-12 w-auto object-contain
        -translate-x-[16px]
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        group-hover:scale-[1.03]
        group-hover:-translate-y-[1px]
        group-hover:-translate-x-[9px]
        drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]
        group-hover:drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]
      "
    />

    {/* subtle light */}
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
                    transition duration-500
                    bg-gradient-to-r from-transparent via-white/10 to-transparent" />

  </div>
</div>

</div>

         <p
  className={`text-gray-400 max-w-xs ${
    i18n.language === "ta"
      ? "text-[15px] leading-[1.9]"
      : "text-sm leading-relaxed"
  }`}
>
  {t("footerDesc")}
</p>

          {/* ADDRESS */}
          <div className="flex items-start gap-3 text-gray-400 text-sm max-w-xs">
            <FaMapMarkerAlt className="mt-1 text-[oklch(0.47_0.17_28.33)]" />
           <p
  className={`${
    i18n.language === "ta"
      ? "leading-[1.9] text-[14px]"
      : "leading-relaxed"
  }`}
>
  {t("footerAddress1")} <br />
  {t("footerAddress2")} <br />
  {t("footerAddress3")}
</p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-6 relative inline-block">
            {t("footerQuick")}
            <span className="block w-10 h-[2px] bg-[oklch(0.47_0.17_28.33)] mt-2"></span>
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            {[
  { name: t("navHome"), path: "/" },
  { name: t("navAbout"), path: "/about" },
  { name: t("navServices"), path: "/services" },
  { name: t("navProjects"), path: "/projects" },
  { name: t("navContact"), path: "/contact" },
].map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                  className="hover:text-white transition flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[oklch(0.47_0.17_28.33)] rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-6 relative inline-block">
            {t("footerServices")}
            <span className="block w-10 h-[2px] bg-[oklch(0.47_0.17_28.33)] mt-2"></span>
          </h3>

<ul className="space-y-3 text-gray-400 text-sm">
  {[
    t("footerService1"),
    t("footerService2"),
    t("footerService3"),
    t("footerService4"),
    t("footerService5"),
  ].map((item, i) => (
    <li key={i} className="hover:text-white transition">
      {item}
    </li>
  ))}
</ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-6 relative inline-block">
           {t("footerContact")}
            <span className="block w-10 h-[2px] bg-[oklch(0.47_0.17_28.33)] mt-2"></span>
          </h3>

          <div className="space-y-4 text-gray-400 text-sm mb-6">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[oklch(0.47_0.17_28.33)]" /> +91 95852 75171
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[oklch(0.47_0.17_28.33)]" /> bhavikshabuilders@gmail.com
            </p>
                          <p
  className={`mb-2 ${
    i18n.language === "ta"
      ? "text-[15px] leading-[1.8]"
      : "text-sm"
  }`}
>
  📍 {t("contactAddress")}
</p>
            
            
          </div>

          {/* SOCIAL */}
          <div className="flex gap-3">
            {[ 
              { icon: <FaWhatsapp />, link: "https://wa.me/919585275171", color: "hover:bg-[oklch(0.47_0.17_28.33)]" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/bhavikshabuilders?igsh=ZWowd3JtbnR1bHli", color: "hover:bg-[oklch(0.47_0.17_28.33)]" },
              { icon: <FaYoutube />, link: "https://youtube.com/@bhavikshabuilders3620?si=-fE1v-27M3hj3veZ", color: "hover:bg-[oklch(0.47_0.17_28.33)]" },
              { icon: <FaGoogle />, link: "https://google.com", color: "hover:bg-[oklch(0.47_0.17_28.33)]" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/10 ${item.color} transition duration-300 hover:scale-110`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM */}
<div className="mt-16 pt-4 pb-3 text-center text-gray-500 text-sm relative">

  {/* gradient divider */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[1px] bg-gradient-to-r from-transparent via-[oklch(0.47_0.17_28.33)] to-transparent"></div>

  {/* content */}
  <p className="tracking-wide">
    © {new Date().getFullYear()} 
    <span className="text-white font-medium mx-1">
      BHAVIKSHA BUILDERS
    </span>
    {t("footerRights")}
  </p>

</div>

    </footer>
  );
}