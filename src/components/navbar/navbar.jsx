import { useState } from 'react'
import { navLinks } from '../../data/navLinks'
import { profile } from '../../data/profile'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const firstName = profile.name.split(' ')[0]

  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <a href="#home" className="navbar__logo">
          {firstName}
          <span>.</span>
        </a>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul className={`navbar__links ${isOpen ? 'is-open' : ''}`}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={() => setIsOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar