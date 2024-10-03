import { useState } from "react";

export function Header() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const changeLanguage = (lang: "en" | "es") => {
    setLanguage(lang);
  };
  return (
    <header className="language-toggle">
      {" "}
      <img
        onClick={() => changeLanguage("en")}
        alt="English"
        src="./uk.png"
        className="language-icon"
      />
      <img
        onClick={() => changeLanguage("es")}
        alt="Español"
        src="./spain.png"
        className="language-icon"
      />
    </header>
  );
}
