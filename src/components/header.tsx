type HeaderProps = {
  changeLanguage: (lang: "en" | "es") => void;
};

export function Header({ changeLanguage }: HeaderProps) {
  return (
    <header className="language-toggle">
      <button className="language-btn" onClick={() => changeLanguage("en")}>
        ENG
      </button>
      <button className="language-btn" onClick={() => changeLanguage("es")}>
        ESP
      </button>
    </header>
  );
}
