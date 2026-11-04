import { about } from '../../data/about'
import './About.css'

function About() {
  const { title, paragraphs, education, learning } = about

  return (
    <section id="about" className="about">
      <div className="about__inner">
        <h2 className="about__title">
          {title}
          <span>.</span>
        </h2>

        <div className="about__grid">
          <div className="about__text">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <div className="about__cards">
            <article className="about__card">
              <h3>Education</h3>
              <p className="about__card-main">{education.degree}</p>
              <p>{education.school}, {education.place}</p>
              <p className="about__badge">{education.status}</p>
            </article>

            <article className="about__card">
              <h3>Currently Learning</h3>
              <ul className="about__tags">
                {learning.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About