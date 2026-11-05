import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { projects } from '../../data/projects'
import './Projects.css'

const categories = ['All', ...new Set(projects.map((project) => project.category))]

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <header className="projects__header">
          <span className="projects__label">Projects</span>
          <h2 className="projects__title">These are my latest projects</h2>
          <div className="projects__bar" />
        </header>

        <div className="projects__filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`projects__filter ${category === activeCategory ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {visibleProjects.map(
            ({ title, category, description, tags, image, github, live }) => (
              <article key={title} className="project-card">
                <div className="project-card__media">
                  {image ? (
                    <img src={image} alt={title} />
                  ) : (
                    <span className="project-card__initial">{title.charAt(0)}</span>
                  )}

                  <div className="project-card__overlay">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${title} source code`}
                    >
                      <FaGithub />
                    </a>
                    {live && (
                      <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${title} live demo`}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-card__body">
                  <span className="project-card__category">{category}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul className="project-card__tags">
                    {tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects