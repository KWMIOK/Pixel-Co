import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";

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
              <article key={project.id} className="card">
                <div className="project-visual">
                  <img
                    src={project.logo}
                    alt={name}
                    className={`project-logo${project.logoClass ? ` ${project.logoClass}` : ""}`}
                  />
                </div>
                <h3>{name}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
