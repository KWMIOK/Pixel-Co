import { useLanguage } from "../context/LanguageContext";

const toolkitItems = [
  { titleKey: "toolkit1Title", imageKey: "Branding_W" },
  { titleKey: "toolkit2Title", imageKey: "Illustration_W" },
  { titleKey: "toolkit3Title", imageKey: "Enviro_W" },
  { titleKey: "toolkit4Title", imageKey: "Market_W" },
  { titleKey: "toolkit5Title", imageKey: "Web_W" },
  { titleKey: "toolkit6Title", imageKey: "Print_W" },
];

export default function Toolkit() {
  const { t } = useLanguage();

  return (
    <section id="toolkit" className="section-split">
      <div className="container section-y section-compact">
        <p className="section-kicker">{t.toolkitKicker}</p>
        <div className="toolkit-grid">
          {toolkitItems.map(({ titleKey, imageKey }) => (
            <article key={titleKey} className="toolkit-card">
              <img src={`src/assets/projects/Icons/${imageKey}.png`} alt={t[titleKey]} className="services-icons" />
              <h3>{t[titleKey]}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
