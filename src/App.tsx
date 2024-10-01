import { BsFillPostcardFill } from "react-icons/bs";

import "./App.css";

function App() {
  return (
    <>
      <div className="intro">
        <img className="photo" src="./cv-photo.png" />
        <h1>
          <BsFillPostcardFill style={{ color: "yellow", fontSize: "2rem" }} />
          ¡Hola!
        </h1>
        <p>Me llamo Julia Sanchis y soy de Sevilla.</p>
        <p>Software Developer</p>
      </div>
    </>
  );
}

export default App;
