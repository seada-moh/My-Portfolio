import { useEffect, useState } from 'react'
import { navLinks } from '../../data/navLinks'
import { profile } from '../../data/profile'
import './Navbar.css'

const SCROLL_THRESHOLD = 20

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const firstName = profile.name.split(' ')[0]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
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