import { TypeAnimation } from "react-type-animation";
import useStore from "../data/store";
import { projects } from "../data/data";

const CurrentWork = () => {
    const { menuOpen } = useStore();
    return (
        <section className=" h-fit my-14 flex gap-4 justify-center items-center">

            <div className={`
      flex gap-12 items-start py-8 px-20 ml-6 max-md:mr-6 
      h-fit w-[1024px] 2xl:w-[1200px] 
      border-green-600 border-x-2 rounded-3xl relative
      shadow-[20px_0_20px_-20px_#22c55e,-20px_0_20px_-20px_#22c55e]
      ${menuOpen ? "md:mr-[324px] 2xl:mr-[424px]" : "md:mr-6"}
      transition-all duration-500 ease-in-out
    `}>

                <div className=" bg-black absolute left-8 -top-3.5 text-2xl z-20 pl-4 pr-2">
                    <TypeAnimation
                        sequence={[
                            'simy46@simy-debian:',
                        ]}
                        speed={50}
                        cursor={false}
                    />
                    <span className="text-blue-700 ml-2">
                        <TypeAnimation
                            sequence={[
                                1000,
                                '~/Current Work',
                            ]}
                            speed={50}
                            cursor={false}
                        />
                    </span>
                    <span className=" ml-2">
                        <TypeAnimation
                            sequence={[
                                1500,
                                '$',
                            ]}
                            speed={50}
                            cursor={false}
                        />
                    </span>
                </div>

                {projects.filter((project) => project.inProgress === true).map((project, index) => (
                    <div key={index} className=" flex-1 flex flex-col gap-4 items-start justify-start">
                        <img src="/hacker.png" alt="" className="" />

                        <h2 className=" text-xl"><span className=" text-2xl mr-3">$</span>{project.heading}:~</h2>

                        <p className=" text-green-500/90">{project.smallDesc}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default CurrentWork