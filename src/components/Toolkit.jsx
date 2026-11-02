import { useLanguage } from "../context/LanguageContext";

import brandingW from "../assets/projects/Icons/Branding_W.png";
import illustrationW from "../assets/projects/Icons/Illustration_W.png";
import enviroW from "../assets/projects/Icons/Enviro_W.png";
import marketW from "../assets/projects/Icons/Market_W.png";
import webW from "../assets/projects/Icons/Web_W.png";
import printW from "../assets/projects/Icons/Print_W.png";

const iconMap = {
  Branding_W: brandingW,
  Illustration_W: illustrationW,
  Enviro_W: enviroW,
  Market_W: marketW,
  Web_W: webW,
  Print_W: printW,
};

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
              <img src={iconMap[imageKey]} alt={t[titleKey]} className="services-icons" />
              <h3>{t[titleKey]}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}