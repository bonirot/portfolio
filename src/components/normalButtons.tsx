import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";
import { Button } from "./button";

type BtnProps = {
  t: {
    github: string;
    linkedin: string;
    contact: string;
    resume: string;
  };
};
export function NormalButtons({ t }: BtnProps) {
  return (
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
          <FaLinkedin style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }} />
        }
        text={t.linkedin}
      />
      <Button
        href="mailto:jursanchis@gmail.com"
        icon={
          <IoMdMail style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }} />
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
  );
}
