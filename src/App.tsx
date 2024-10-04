import "./App.css";
import { useState } from "react";

import { translations } from "./utils/translations";
import { Project } from "./components/project";
import { ResponsiveButtons } from "./components/responsiveButtons";
import { Header } from "./components/header";
import { NormalButtons } from "./components/normalButtons";

function App() {
  const [language, setLanguage] = useState<"en" | "es">("en");

  const changeLanguage = (lang: "en" | "es") => {
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <>
      <Header changeLanguage={changeLanguage} />
      <div className="intro">
        <div className="intro-card">
          <img
            className="intro-card-photo"
            src="./cv-photo.png"
            alt="Julia Sanchis"
          />
          <div className="intro-card-text">
            <h1>{t.hello}</h1>
            <p>{t.description}</p>

            <ResponsiveButtons />
          </div>
        </div>
        <NormalButtons t={t} />
      </div>

      <h2>{t.projects}</h2>
      <Project />
    </>
  );
}

export default App;
