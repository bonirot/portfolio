type HeaderProps = {
  changeLanguage: (lang: "en" | "es") => void;
};

export function Header({ changeLanguage }: HeaderProps) {
  return (
    <header className="language-toggle">
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
  );
}
