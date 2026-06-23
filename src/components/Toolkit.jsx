import { useLanguage } from "../context/LanguageContext";

const toolkitItems = [
  { titleKey: "toolkit1Title", bodyKey: "toolkit1Body" },
  { titleKey: "toolkit2Title", bodyKey: "toolkit2Body" },
  { titleKey: "toolkit3Title", bodyKey: "toolkit3Body" },
];

export default function Toolkit() {
  const { t } = useLanguage();

  return (
    <section id="toolkit" className="section-split">
      <div className="container section-y section-compact">
        <p className="section-kicker">{t.toolkitKicker}</p>
        <h2 className="display-section section-intro">{t.toolkitIntro}</h2>
        <div className="toolkit-grid">
          {toolkitItems.map(({ titleKey, bodyKey }) => (
            <article key={titleKey} className="toolkit-card">
              <h3>{t[titleKey]}</h3>
              <p className="text-secondary-klar">{t[bodyKey]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
