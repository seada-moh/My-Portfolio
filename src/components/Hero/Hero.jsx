import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Typewriter from '../Typewriter/Typewriter'
import { profile } from '../../data/profile'
import './Hero.css'

const socialLinks = [
  { label: 'GitHub', href: profile.socials.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: FaLinkedinIn },
  { label: 'Instagram', href: profile.socials.instagram, Icon: FaInstagram },
  { label: 'Facebook', href: profile.socials.facebook, Icon: FaFacebookF },
]

function Hero() {
  return (
    <section id="home" className="hero">
      <svg className="hero__defs" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="hero-blob" clipPathUnits="objectBoundingBox">
            <path d="M0.18,0 L1,0 L1,1 L0.3,1 C0.12,0.933 0.06,0.783 0.22,0.683 C0.38,0.583 0.24,0.467 0.3,0.367 C0.36,0.267 0.3,0.12 0.18,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__role">
            <Typewriter words={profile.roles} />
          </h2>
          <p className="hero__bio">{profile.bio}</p>

          <div className="hero__socials">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
              >
                <Icon />
              </a>
            ))}
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
      </div>

      <div className="hero__visual">
        <div className="hero__shape" />
        <img src={profile.photo} alt={profile.name} />
      </div>
    </section>
  )
}

export default Hero