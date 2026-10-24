import { useEffect, useId, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import { initials } from "../utils/initials";

export default function Projects() {
  const { language, t } = useLanguage();
  const [activeProject, setActiveProject] = useState(null);
  const titleId = useId();

  useEffect(() => {
    if (!activeProject) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

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
            const isOpenable = Boolean(project.gallery?.length || project.video);

            return (
              <article
                key={project.id ?? project.nameEn}
                className={`card${isOpenable ? " is-openable" : ""}`}
              >
                {isOpenable ? (
                  <button
                    type="button"
                    className="project-open"
                    onClick={() => setActiveProject(project)}
                    aria-haspopup="dialog"
                  >
                    <ProjectVisual project={project} name={name} />
                    <h3>{name}</h3>
                  </button>
                ) : (
                  <>
                    <ProjectVisual project={project} name={name} />
                    <h3>{name}</h3>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {activeProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="project-modal-bar">
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setActiveProject(null)}
              >
                {t.projectClose}
              </button>
            </div>
            <div className="project-modal-body">
              <dl className="project-meta">
                <div>
                  <dt>{t.projectTitleLabel}</dt>
                  <dd id={titleId}>
                    {language === "ar" ? activeProject.nameAr : activeProject.nameEn}
                  </dd>
                </div>
                <div>
                  <dt>{t.projectClientLabel}</dt>
                  <dd>
                    {language === "ar" ? activeProject.clientAr : activeProject.clientEn}
                  </dd>
                </div>
                <div>
                  <dt>{t.projectServicesLabel}</dt>
                  <dd>
                    {language === "ar"
                      ? activeProject.servicesAr
                      : activeProject.servicesEn}
                  </dd>
                </div>
                <div>
                  <dt>{t.projectOverviewLabel}</dt>
                  <dd>
                    {language === "ar"
                      ? activeProject.overviewAr
                      : activeProject.overviewEn}
                  </dd>
                </div>
              </dl>
              <div className="project-modal-gallery">
                {activeProject.gallery?.map((mediaUrl) => {
                  const isVideo = mediaUrl.endsWith(".mp4") || mediaUrl.includes("video");

                  return isVideo ? (
                    <video
                      key={mediaUrl}
                      src={mediaUrl}
                      controls
                      playsInline
                      className="project-modal-video"
                    />
                  ) : (
                    <img
                      key={mediaUrl}
                      src={mediaUrl}
                      alt=""
                      className="project-modal-image"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectVisual({ project, name }) {
  if (project.video) {
    return (
      <div className="project-visual has-video">
        <video
          src={project.video}
          controls
          playsInline
          muted
          preload="metadata"
          className="project-thumb-video"
          onClick={(e) => e.stopPropagation()} // Prevents opening the modal when clicking video controls
        />
      </div>
    );
  }

  if (project.thumbnail) {
    return (
      <div className="project-visual has-image">
        <img src={project.thumbnail} alt="" className="project-thumb" />
      </div>
    );
  }

  return <div className="project-visual">{initials(name)}</div>;
}