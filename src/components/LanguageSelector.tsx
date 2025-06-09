import { useState } from "react";
import { useTranslation } from "react-i18next";

type LanguageSelectorProps = {
  isScrolled: boolean;
};

const LanguageSelector = ({ isScrolled }: LanguageSelectorProps) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Español");

  const languages = [
    { code: "es", label: "Español", icon: "/flags/es.svg" },
    { code: "en", label: "English", icon: "/flags/us.svg" },
    { code: "fr", label: "Français", icon: "/flags/fr.svg" },
  ];

  const handleSelect = (langCode: string) => {
    const lang = languages.find((l) => l.code === langCode);
    if (!lang) return;
    setSelected(lang.label);
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  const selectedLang = languages.find((l) => l.label === selected);

  return (
    <div className="flex flex-col text-sm relative items-stretch">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex gap-3 text-left px-4 pr-2 py-2 rounded cursor-pointer transition-colors duration-300 ${isScrolled ? "text-gray-700" : "text-white"
          }`}
      >
        <div className="flex items-center gap-2">
          {selectedLang && (
            <img
              src={selectedLang.icon}
              alt={selectedLang.label}
              className="w-6 h-4 rounded-sm"
            />
          )}
          <span>{selected}</span>
        </div>
        <svg
          className={`w-5 h-5 inline float-right transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#6B7280"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full top-full bg-white border border-gray-300 rounded shadow-md mt-1 py-2">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="px-4 py-2 hover:bg-gray-100 hover:text-gray-900 cursor-pointer flex items-center gap-2"
              onClick={() => handleSelect(lang.code)}
            >
              <img
                src={lang.icon}
                alt={lang.label}
                className="w-6 h-4 rounded-sm"
              />
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
