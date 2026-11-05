import { profile } from '../../data/profile'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        &copy; {year} {profile.name}. Built with React.
      </p>
      <a href="#home">Back to top</a>
    </footer>
  )
}

export default Footer