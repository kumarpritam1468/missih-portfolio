import { TypeAnimation } from "react-type-animation"
import useStore from "../data/store";
import { projects } from "../data/data";
import { ArrowUpRightFromSquare, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
    const { menuOpen } = useStore();
    return (
        <section className=" h-fit my-14 flex gap-4 justify-center items-center">

            <div className={`flex flex-col py-8 px-12 ml-6 max-md:mr-6 h-fit w-[1024px] 2xl:w-[1200px] border-blue-600 border-x-2 rounded-3xl items-center relative ${menuOpen ? "md:mr-[324px] 2xl:mr-[424px]" : "md:mr-6"} transition-all duration-500 ease-in-out`}>

                <div className=" bg-[#171717] absolute left-8 -top-3.5 text-2xl z-20 pl-4 pr-2">
                    <TypeAnimation
                        sequence={[
                            500,
                            'Projects',
                        ]}
                        speed={50}
                    />
                </div>

                {projects.map((project, index) => (
                    <div className={`flex justify-between items-center w-full my-3 px-4 py-1 group hover:bg-blue-600/10`} key={index}>
                        <div className=" flex flex-col gap-1">
                            <h3 className=" text-2xl">{project.heading}</h3>
                            <p className=" text-base opacity-70">{project.smallDesc}</p>
                            <p className=" text-sm">{project.date}</p>
                        </div>

                        <div className=" hidden group-hover:flex items-center gap-6">
                            {project.inProgress ?
                                <p className=" text-base opacity-70">[In Progress]</p> :
                                <ArrowUpRightFromSquare className=" mr-6 opacity-70 cursor-pointer" />
                            }

                            <Link to={`/project/${index}`} className=" flex gap-3 items-center bg-transparent border-2 border-blue-500 text-sm px-3 py-1 w-fit rounded-lg">
                                <Terminal />
                                More Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default ProjectsSection