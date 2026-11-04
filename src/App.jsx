import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <section id="projects" style={{ minHeight: '100vh', paddingTop: 120 }} />
        <section id="contact" style={{ minHeight: '100vh', paddingTop: 120 }} />
      </main>
    </>
  )
}

export default App