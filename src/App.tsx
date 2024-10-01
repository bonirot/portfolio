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
              <strong>Software Developer</strong>
            </p>
            <div className="intro-links-responsive">
              <button className="intro-link">
                <a href="https://www.github.com/bonirot" target="_blank">
                  <IoLogoGithub /> GitHub
                </a>
              </button>
              <button className="intro-link">
                <a href="https://www.linkedin.com/in/jusanchis" target="_blank">
                  <FaLinkedin /> LinkedIn
                </a>
              </button>
              <button className="intro-link">
                <a href="mailto:jursanchis@gmail.com" target="_blank">
                  <IoMdMail /> Email
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="intro-links">
          <button className="intro-link">
            <a href="https://www.github.com/bonirot" target="_blank">
              <IoLogoGithub /> GitHub
            </a>
          </button>
          <button className="intro-link">
            <a href="https://www.linkedin.com/in/jusanchis" target="_blank">
              <FaLinkedin /> LinkedIn
            </a>
          </button>
          <button className="intro-link">
            <a href="mailto:jursanchis@gmail.com" target="_blank">
              <IoMdMail /> Email
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
