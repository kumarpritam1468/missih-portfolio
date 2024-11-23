import Articles from "./components/Articles"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Timeline from "./components/Timeline"

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Timeline />
      <Articles />
      <Contact />
    </main>
  )
}

export default App
