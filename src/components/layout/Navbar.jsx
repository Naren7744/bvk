import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";


export default function Navbar() {
const { t, i18n } = useTranslation();
const [open, setOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

const navRef = useRef(null);
const location = useLocation();

const isHomePage = location.pathname === "/";

const links = [
{ name: t("navHome"), path: "/" },
{ name: t("navProjects"), path: "/projects" },
{ name: t("navServices"), path: "/services" },
{ name: t("navContact"), path: "/contact" },
{ name: t("navAbout"), path: "/about" },

];

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 30);
};
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
const setHeight = () => {
if (navRef.current) {
document.documentElement.style.setProperty(
"--nav-height",
`${navRef.current.offsetHeight}px`
);
}
};


setHeight();
window.addEventListener("resize", setHeight);

return () => window.removeEventListener("resize", setHeight);


}, []);

return ( <header ref={navRef} className="fixed top-0 left-0 w-full z-50 overflow-hidden">
<div className={`max-w-7xl mx-auto px-6 py-3 flex items-center justify-between rounded-xl mt-3 transition-all duration-300
${
  scrolled || !isHomePage
    ? "bg-gradient-to-r from-[#0B1C2C]/40 via-[#0B1C2C]/70 to-[#0B1C2C]/16 backdrop-blur-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
    : "bg-transparent"
}`}
>


    {/* LOGO */}
    <div className="flex items-center gap-3 cursor-pointer group select-none">
      <div className="relative flex items-center justify-center">

        <img
          src="/logo.png"
          alt="Bhaviksha Builders"
          className="
            h-12 w-auto object-contain
            -translate-x-[18px]
            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            group-hover:scale-[1.03]
            group-hover:-translate-y-[1px]
            group-hover:-translate-x-[9px]
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]
            group-hover:drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]
          "
        />

        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
                        transition duration-500
                        bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      </div>
    </div>

    {/* MENU */}
   <nav
  className={`
    hidden md:flex items-center font-medium
    ${
      i18n.language === "ta"
        ? "gap-7 text-[13px]"
        : "gap-11 text-[16px]"
    }
    mx-auto 
  `}
>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `relative cursor-pointer transition-all duration-300 ${
              isActive ? "text-white" : "text-gray-300"
            } group`
          }
        >
          {link.name}

          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[oklch(0.47_0.17_28.33)] transition-all duration-300 group-hover:w-full"></span>

          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-md bg-[oklch(0.47_0.17_28.33/0.15)] rounded"></span>
        </NavLink>
      ))}
    </nav>
    {/* LANGUAGE SWITCH */}
<div className="hidden md:flex items-center mr-2">

  <div
    className="
      flex items-center gap-1
      p-1
      rounded-xl
      bg-[#0B1C2C]/75
      border border-white/10
      backdrop-blur-xl
    "
  >

    {/* EN */}
    <button
      onClick={() => i18n.changeLanguage("en")}
      className={`
        min-w-[30px] h-[29px]
        px-4
        flex items-center justify-center
        rounded-lg text-[12px] font-medium
        transition-all duration-300
        ${
          i18n.language === "en"
            ? "bg-white text-black shadow-md"
            : "text-gray-300 hover:text-white hover:bg-white/5"
        }
      `}
    >
      EN
    </button>

    {/* TA */}
    <button
      onClick={() => i18n.changeLanguage("ta")}
      className={`
        min-w-[30px] h-[29px]
        px-4
        flex items-center justify-center
        rounded-lg text-[12px] font-medium
        transition-all duration-300
        ${
          i18n.language === "ta"
            ? "bg-white text-black shadow-md"
            : "text-gray-300 hover:text-white hover:bg-white/5"
        }
      `}
    >
      தமிழ்
    </button>

  </div>

</div>

    {/* BUTTON */}


<NavLink
  to="/getquote"
  className="hidden md:block relative px-5 py-2 text-sm font-medium rounded-md text-white overflow-hidden group cursor-pointer"
>

  <span className="absolute inset-0 bg-[oklch(0.47_0.17_28.33)]"></span>

  <span
    className="absolute top-0 left-[-100%] w-[60%] h-full 
               bg-gradient-to-r from-transparent via-white/30 to-transparent 
               skew-x-[-20deg] 
               group-hover:left-[120%] 
               transition-all duration-[1200ms] ease-out"
  ></span>

  <span
    className={`relative z-10 tracking-wide ${
      i18n.language === "ta"
        ? "text-[13px]"
        : ""
    }`}
  >
    {t("getQuote")}
  </span>

</NavLink>

    {/* MOBILE ICON */}
    <button
      className="md:hidden text-white text-xl"
      onClick={() => setOpen(!open)}
    >
      {open ? <FaTimes /> : <FaBars />}
    </button>
  </div>

{/* MOBILE MENU */}
{open && (
  <div className="md:hidden mx-6 mt-2 bg-[#0B1C2C]/90 backdrop-blur-xl rounded-xl p-6 border border-white/10 shadow-lg">

    <div className="flex flex-col items-start space-y-4">

      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={() => setOpen(false)}
          className="w-full text-gray-300 hover:text-white transition text-sm font-medium tracking-wide"
        >
          {link.name}
        </NavLink>
      ))}
{/* LANGUAGE SWITCH */}
<div className="flex gap-2 w-full">

  <button
    onClick={() => i18n.changeLanguage("en")}
    className={`flex-1 py-2 rounded-md text-sm border transition ${
      i18n.language === "en"
        ? "bg-white text-black border-white"
        : "border-white/20 text-gray-300"
    }`}
  >
    EN
  </button>

  <button
    onClick={() => i18n.changeLanguage("ta")}
    className={`flex-1 py-2 rounded-md text-sm border transition ${
      i18n.language === "ta"
        ? "bg-white text-black border-white"
        : "border-white/20 text-gray-300"
    }`}
  >
    தமிழ்
  </button>

</div>
      {/* Divider */}
      <div className="w-full h-[1px] bg-white/10 my-2"></div>

<NavLink
  to="/getquote"
  onClick={() => setOpen(false)}
  className={`w-full block text-center bg-[oklch(0.47_0.17_28.33)] text-white py-3 rounded-md transition hover:brightness-110 font-semibold ${
    i18n.language === "ta"
      ? "text-[14px]"
      : "text-sm"
  }`}
>
  {t("getQuote")}
</NavLink>

    </div>

  </div>
)}
</header>

);
}
