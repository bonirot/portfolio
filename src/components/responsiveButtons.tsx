import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";
import { Button } from "./button";

export function ResponsiveButtons() {
  return (
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
  );
}
