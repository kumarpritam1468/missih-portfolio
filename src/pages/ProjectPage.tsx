import { useParams } from "react-router-dom"
import { projects } from "../data/data";

const ProjectPage = () => {
  const {index} = useParams();

  const project = projects[Number(index)];
  return (
    <div>{project.heading}</div>
  )
}

export default ProjectPage