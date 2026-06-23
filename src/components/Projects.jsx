import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import { initials } from "../utils/initials";

export default function Projects() {
  const { language, t } = useLanguage();

  return (
    <section id="projects" className="section-projects">
      <div className="container section-y">
        <div className="section-head">
          <div>
            <h2>{t.projectsTitle}</h2>
          </div>
        </div>
        <div className="cards projects">
          {projects.map((project) => {
            const name = language === "ar" ? project.nameAr : project.nameEn;
            return (
              <article key={project.nameEn} className="card">
                <div className="project-visual">{initials(name)}</div>
                <h3>{name}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
