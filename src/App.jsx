import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" style={{ minHeight: '100vh', paddingTop: 120 }} />
        <section id="about" style={{ minHeight: '100vh', paddingTop: 120 }} />
        <section id="projects" style={{ minHeight: '100vh', paddingTop: 120 }} />
        <section id="contact" style={{ minHeight: '100vh', paddingTop: 120 }} />
      </main>
    </>
  )
}

export default App