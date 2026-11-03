import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="about" style={{ minHeight: '100vh', paddingTop: 120 }} />
        <section id="projects" style={{ minHeight: '100vh', paddingTop: 120 }} />
        <section id="contact" style={{ minHeight: '100vh', paddingTop: 120 }} />
      </main>
    </>
  )
}

export default App