import { useLanguage } from "../context/LanguageContext";
import BrandLogo from "./BrandLogo";

export default function Header() {
  const { t, toggleLanguage } = useLanguage();

  return (
    <header className="site-header" id="navScroll">
      <div className="container nav-wrap">
        <a href="#home" className="brand" aria-label="Home">
          <BrandLogo />
        </a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#projects">{t.navProjects}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>
        <button className="btn btn-outline-light btn-lang" type="button" onClick={toggleLanguage}>
          {t.langButton}
        </button>
      </div>
    </header>
  );
}
