import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ProjectPage from "./pages/ProjectPage"
import RabbitHole from "./pages/RabbitHole"
import ArticlePage from "./pages/ArticlePage"


function App() {

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:index" element={<ProjectPage />} />
        <Route path="/article/:index" element={<ArticlePage />} />
        <Route path="/rabbit-hole" element={<RabbitHole />} />
      </Routes>
    </main>
  )
}

export default App
