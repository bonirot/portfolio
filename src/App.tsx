import "./App.css";
import { useState } from "react";

import { translations } from "./utils/translations";
import { Project } from "./components/project";
import { Header } from "./components/header";
import { Intro } from "./components/introduction";

function App() {
  const [language, setLanguage] = useState<"en" | "es">("en");

  const changeLanguage = (lang: "en" | "es") => {
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <>
      <Header changeLanguage={changeLanguage} />
      <Intro t={t} />
      <Project t={t} />
    </>
  );
}

export default App;
