import "./App.css";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function App() {
  return (
    <>
      <div className="intro">
        <div className="intro-card">
          <img className="intro-card-photo" src="./cv-photo.png" />
          <div className="intro-card-text">
            <h1>
              {/* <GrPersonalComputer style={{ fontSize: "2.5rem" }} /> */}
              Hello World!
            </h1>
            <p>
              Me llamo Julia Sanchis, soy de Sevilla (España) y soy{" "}
              <strong>Software Developer</strong>. Apasionada, activa y siempre
              en búsqueda de nuevos horizontes, me defino como una persona con
              amplios intereses y una gran pasión por la tecnología desde
              pequeña. Constantemente inmersa en la exploración de las últimas
              innovaciones. Acualmente estoy realizando un curso{" "}
              <strong>Diseño y experiencia de usuario</strong> de la mano de{" "}
              <strong>Google</strong>.
            </p>
            <div className="intro-links-responsive">
              <button className="intro-link">
                <a href="https://www.github.com/bonirot" target="_blank">
                  <IoLogoGithub style={{ fontSize: "1.5rem" }} />
                </a>
              </button>
              <button className="intro-link">
                <a href="https://www.linkedin.com/in/jusanchis" target="_blank">
                  <FaLinkedin style={{ fontSize: "1.5rem" }} />
                </a>
              </button>
              <button className="intro-link">
                <a href="mailto:jursanchis@gmail.com" target="_blank">
                  <IoMdMail style={{ fontSize: "1.5rem" }} />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="intro-links">
          <button className="intro-link">
            <a href="https://www.github.com/bonirot" target="_blank">
              <IoLogoGithub
                style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
              />{" "}
              GitHub
            </a>
          </button>
          <button className="intro-link">
            <a href="https://www.linkedin.com/in/jusanchis" target="_blank">
              <FaLinkedin
                style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
              />{" "}
              LinkedIn
            </a>
          </button>
          <button className="intro-link">
            <a href="mailto:jursanchis@gmail.com" target="_blank">
              <IoMdMail
                style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
              />{" "}
              Email
            </a>
          </button>
        </div>
      </div>
      <div className="workExperience"></div>
    </>
  );
}

export default App;
