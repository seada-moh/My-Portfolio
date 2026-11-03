import Typewriter from '../Typewriter/Typewriter'
import { profile } from '../../data/profile'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__role">
            <Typewriter words={profile.roles} />
          </h2>
          <p className="hero__bio">{profile.bio}</p>

          <div className="hero__socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>

          <div className="hero__buttons">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__image">
          <img src={profile.photo} alt={profile.name} />
        </div>
      </div>
    </section>
  )
}

export default Hero