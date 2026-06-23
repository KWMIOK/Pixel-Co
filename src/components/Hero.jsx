import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero-klar">
      <div className="container section-y">
        <h1 className="display-huge">
          <span className="hero-title-line">{t.heroTitleLine1}</span>
          <span className="hero-title-line">{t.heroTitleLine2}</span>
        </h1>
        <p className="lead text-secondary-klar">{t.heroLead}</p>
      </div>
    </section>
  );
}
