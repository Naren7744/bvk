import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    budget: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    setForm({
      name: "",
      phone: "",
      email: "",
      type: "",
      budget: "",
      message: "",
    });

    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section className="bg-gray-100 py-15 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16" data-aos="fade-down">
          <p className="text-[oklch(0.47_0.17_28.33)] text-xs tracking-[4px] mb-3">
            {t("contactBadge")}
          </p>

          <h2
  className={`font-bold mb-4 text-[#0B1C2C] ${
    i18n.language === "ta"
      ? "text-[36px] md:text-[54px] leading-[1.3]"
      : "text-4xl md:text-5xl"
  }`}
>
            {t("contactTitle")}
          </h2>

          <p
  className={`text-gray-600 max-w-2xl mx-auto ${
    i18n.language === "ta"
      ? "text-[14px] leading-[2]"
      : ""
  }`}
>
           {t("contactDesc")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">

          {/* LEFT - FORM */}
          <div className="bg-white shadow-xl rounded-3xl p-8 flex flex-col justify-between" data-aos="fade-right">

            <div>
              <h3 className="text-xl font-semibold mb-6 text-[oklch(0.47_0.17_28.33)]">
                {t("contactFormTitle")}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="relative" data-aos="fade-up">
                  <FaUser className="absolute top-4 left-4 text-gray-400" />
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("contactName")}
                    className="w-full pl-12 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[oklch(0.47_0.17_28.33/0.4)]"
                  />
                </div>

                <div className="relative" data-aos="fade-up" data-aos-delay="100">
                  <FaPhoneAlt className="absolute top-4 left-4 text-gray-400" />
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={t("contactPhone")}
                    className="w-full pl-12 border border-gray-200 rounded-lg px-4 py-3"
                  />
                </div>

                <div className="relative" data-aos="fade-up" data-aos-delay="200">
                  <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t("contactEmail")}
                    className="w-full pl-12 border border-gray-200 rounded-lg px-4 py-3"
                  />
                </div>

                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3"     data-aos="fade-up"
                  data-aos-delay="300"
                >
               <option value="">{t("contactSelect")}</option>
                <option>{t("contactType1")}</option>
                <option>{t("contactType2")}</option>
                <option>{t("contactType3")}</option>
                <option>{t("contactType4")}</option>
                </select>

                <input
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  placeholder={t("contactBudget")}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3"      data-aos="fade-up"
                  data-aos-delay="400"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("contactMessage")}
                  rows="4"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3"    data-aos="fade-up"
                  data-aos-delay="500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[oklch(0.47_0.17_28.33)] text-white py-3 rounded-lg font-medium hover:scale-[1.02] transition"   data-aos="zoom-in"
                  data-aos-delay="600"
                >
                 {t("contactBtn")}
                </button>

              </form>
            </div>

            {/* CONTACT INFO */}
            <div className="mt-8 space-y-3 text-sm text-gray-600">
              <p className="flex items-center gap-3" data-aos="fade-up">
                <FaPhoneAlt className="text-[oklch(0.47_0.17_28.33)]" />
                +91 9585275171
              </p>

              <p className="flex items-center gap-3"  data-aos="fade-up" data-aos-delay="100">
                <FaEnvelope className="text-[oklch(0.47_0.17_28.33)]" />
                bhavikshabuilders@gmail.com
              </p>

             <p className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="200">
  <FaMapMarkerAlt className="text-[oklch(0.47_0.17_28.33)]" />
  {t("contactCity")}
</p>
            </div>

          </div>

          {/* RIGHT - MAP */}
          <div className="flex flex-col h-full"  data-aos="fade-left">

            <div className="rounded-3xl overflow-hidden shadow-xl h-[60%]">
              <iframe
                title="location"
                src="https://www.google.com/maps?q=Salem,Tamil%20Nadu&output=embed"
                className="w-full h-full border-0"
              ></iframe>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 mt-6 flex-1"  data-aos="fade-up"
              data-aos-delay="200">
              <h3 className="text-lg font-semibold mb-3 text-[#0B1C2C]">
                {t("contactLocation")}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {t("contactVisit")}
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

              <p className="text-sm">
                🕒 {t("contactTime")}
              </p>
            </div>

          </div>

        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          <div className="relative bg-white rounded-2xl shadow-2xl px-8 py-8 w-[90%] max-w-sm text-center animate-popup" data-aos="zoom-in">

            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 text-2xl">✓</span>
            </div>

            <h3 className="text-lg font-semibold mb-2 text-[#0B1C2C]">
              {t("popupTitle")}
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              {t("popupDesc")}
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 rounded-md bg-[oklch(0.47_0.17_28.33)] text-white"
            >
              {t("popupBtn")}
            </button>

          </div>
        </div>
      )}
    </section>
  );
}