import { NormalButtons } from "./normalButtons";
import { ResponsiveButtons } from "./responsiveButtons";

type IntroProp = {
  t: {
    hello: string;
    description: string;
    github: string;
    linkedin: string;
    contact: string;
    resume: string;
  };
};

export function Intro({ t }: IntroProp) {
  return (
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
  );
}
