import { about } from '../../data/about'
import { profile } from '../../data/profile'
import './About.css'

function About() {
  const { title, paragraphs, education, learning } = about

  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__media">
          <div className="about__frame" />
          <img src={profile.aboutPhoto} alt={profile.name} />
        </div>

        <div className="about__content">
          <span className="about__label">About</span>
          <h2 className="about__title">{title}</h2>
          <div className="about__bar" />

          {paragraphs.map((text) => (
            <p key={text} className="about__text">
              {text}
            </p>
          ))}

          <div className="about__facts">
            <article className="about__card">
              <h3>Education</h3>
              <p className="about__card-main">{education.degree}</p>
              <p>
                {education.school}, {education.place}
              </p>
              <span className="about__badge">{education.status}</span>
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