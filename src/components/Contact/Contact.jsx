import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { contact } from '../../data/contact'
import { profile } from '../../data/profile'
import './Contact.css'

const channels = [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    Icon: FaEnvelope,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sada-muhamed',
    href: profile.socials.linkedin,
    Icon: FaLinkedinIn,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/seada-moh',
    href: profile.socials.github,
    Icon: FaGithub,
    external: true,
  },
]

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <header className="contact__header">
          <span className="contact__label">Contact</span>
          <h2 className="contact__title">{contact.title}</h2>
          <div className="contact__bar" />
          <p className="contact__intro">{contact.intro}</p>
        </header>

        <div className="contact__grid">
          {channels.map(({ label, value, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              className="contact-card"
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <span className="contact-card__icon">
                <Icon />
              </span>
              <h3>{label}</h3>
              <p>{value}</p>
            </a>
          ))}
        </div>

        <a href={`mailto:${contact.email}`} className="btn btn--primary">
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Contact