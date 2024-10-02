import "./App.css";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <div className="intro">
        <div className="intro-card">
          <img className="intro-card-photo" src="./cv-photo.png" />
          <div className="intro-card-text">
            <h1>Hello World!</h1>
            <p>
              My name is Julia Sanchis, I am from Seville (España) and I am a{" "}
              <strong>Software Developer</strong>. Passionate, active, and
              always seeking new horizons, I define myself as a person with
              broad interests and a great passion for technology since
              childhood. Constantly immersed in exploring the latest
              innovations. Currently I am taking the <strong>Google</strong>{" "}
              course on <strong>Design and User Experience</strong>.
            </p>
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
            text="GitHub"
          />

          <Button
            href="https://www.linkedin.com/in/jusanchis/?locale=en_US"
            icon={
              <FaLinkedin
                style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
              />
            }
            text="LinkedIn"
          />
          <Button
            href="mailto:jursanchis@gmail.com"
            icon={
              <IoMdMail
                style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
              />
            }
            text="Contact"
          />
          <Button
            href="./cv.pdf"
            icon={
              <PiReadCvLogoFill
                style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
              />
            }
            text="Resume"
          />
        </div>
      </div>
      <h2>MY PROJECTS</h2>
      <div className="projects">
        <div className="project-container">
          <h3>Gappllery</h3>
          <img
            className="project-img"
            src="https://res.cloudinary.com/dx4fwligc/image/upload/v1727891352/portfolio-github/uwwr5x2vcfuw1v2e1esy.png"
          />
        </div>
        <div className="project-container">
          <h3>Rick and Morty API</h3>
          <img
            className="project-img"
            src="https://res.cloudinary.com/dx4fwligc/image/upload/v1727891352/portfolio-github/hdqs1leaxncf4jgvvecx.png"
          />
        </div>
      </div>
    </>
  );
}

export default App;
