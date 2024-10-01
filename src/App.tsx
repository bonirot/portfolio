import "./App.css";

function App() {
  return (
    <>
      <div className="intro">
        <img className="intro-photo" src="./cv-photo.png" />
        <div className="intro-text">
          <h1>
            {/* <GrPersonalComputer style={{ fontSize: "2.5rem" }} /> */}
            ¡Hola!
          </h1>
          <p>
            Me llamo Julia Sanchis, soy de Sevilla (España) y soy{" "}
            <strong>Software Developer</strong>
          </p>
        </div>
        <div className="intro-links">
          <a href="https://www.github.com/bonirot">GitHub</a>
        </div>
      </div>
    </>
  );
}

export default App;
