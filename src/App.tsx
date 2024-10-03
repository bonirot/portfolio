import "./App.css";
import { useState } from "react";

import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";
import { translations } from "./utils/translations";
import { Button } from "./components/button";
import { Project } from "./components/project";

function App() {
  const [language, setLanguage] = useState<"en" | "es">("en");

  const changeLanguage = (lang: "en" | "es") => {
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <>
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

            <div className="intro-links-responsive">
              <Button
                href="https://www.github.com/bonirot"
                icon={<IoLogoGithub style={{ fontSize: "1.5rem" }} />}
              />
              <Button
                href="https://www.linkedin.com/in/jusanchis/?locale=en_US"
                icon={<FaLinkedin style={{ fontSize: "1.5rem" }} />}
              />
              <Button
                href="mailto:jursanchis@gmail.com"
                icon={<IoMdMail style={{ fontSize: "1.5rem" }} />}
              />
              <Button
                href="./cv.pdf"
                icon={<PiReadCvLogoFill style={{ fontSize: "1.5rem" }} />}
              />
            </div>
          </div>
        </div>

        <div className="intro-links">
          <Button
            href="https://www.github.com/bonirot"
            icon={
              <IoLogoGithub
                style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
              />
            }
            text={t.github}
          />

          <Button
            href="https://www.linkedin.com/in/jusanchis/?locale=en_US"
            icon={
              <FaLinkedin
                style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
              />
            }
            text={t.linkedin}
          />
          <Button
            href="mailto:jursanchis@gmail.com"
            icon={
              <IoMdMail
                style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
              />
            }
            text={t.contact}
          />
          <Button
            href="./cv.pdf"
            icon={
              <PiReadCvLogoFill
                style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
              />
            }
            text={t.resume}
          />
        </div>
      </div>

      <h2>{t.projects}</h2>
      <section className="projects">
        <Project />
      </section>
    </>
  );
}

export default App;
