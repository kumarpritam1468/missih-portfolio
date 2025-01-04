import Articles from "../components/Articles"
import Contact from "../components/Contact"
import CurrentWork from "../components/CurrentWork"
import Hero from "../components/Hero"
import ProjectsSection from "../components/ProjectsSection"
import Timeline from "../components/Timeline"

const Home = () => {
    return (
        <>
            <Hero />
            <ProjectsSection />
            <CurrentWork />
            <Timeline />
            <Articles />
            <Contact />
        </>
    )
}

export default Home