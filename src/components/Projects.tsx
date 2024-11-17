import { TypeAnimation } from "react-type-animation"
import useStore from "../data/store";
import { projects } from "../data/data";

const Projects = () => {
    const { menuOpen } = useStore();
    return (
        <section className=" h-fit my-8 mt-12 flex gap-4 justify-center items-center">

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
                    <div className={`flex gap-1 flex-col w-full border-l-4 border-l-blue-600/40 my-4 pl-4 py-1 group hover:border-l-blue-600 cursor-pointer hover:bg-blue-500/5`} key={index}>
                        <h3 className=" text-2xl">{project.heading}</h3>
                        <p className=" text-base opacity-70">{project.smallDesc}</p>
                        <p className=" text-sm">{project.date}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Projects