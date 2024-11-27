import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ProjectPage from "./pages/ProjectPage"


function App() {

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:index" element={<ProjectPage />} />
      </Routes>
    </main>
  )
}

export default App
