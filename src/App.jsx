import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <section id="contact" style={{ minHeight: '100vh', paddingTop: 120 }} />
      </main>
    </>
  )
}

export default App