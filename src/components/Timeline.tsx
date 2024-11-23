import { TypeAnimation } from "react-type-animation"
import useStore from "../data/store"
import { Terminal } from "lucide-react";
import { timeline } from "../data/data";

const Timeline = () => {
    const { menuOpen } = useStore();
    return (
        <section className=" h-fit my-14 flex gap-4 justify-center items-center">

            <div className={`flex gap-8 pb-8 pt-12 px-12 ml-6 max-md:mr-6 h-fit w-[1024px] 2xl:w-[1200px] border-blue-600 border-x-2 rounded-3xl relative ${menuOpen ? "md:mr-[324px] 2xl:mr-[424px]" : "md:mr-6"} transition-all duration-500 ease-in-out`}>

                <div className=" bg-[#171717] absolute left-8 -top-3.5 text-2xl z-20 pl-4 pr-2">
                    <TypeAnimation
                        sequence={[
                            'Timeline',
                        ]}
                        speed={50}
                    />
                </div>

                <div className=" flex flex-grow flex-col items-center">
                    <div className=" rounded-full size-6 bg-blue-600"></div>
                    <div className=" h-full w-[3px] bg-gradient-to-b from-blue-600/80 to-transparent"></div>
                </div>

                <div className=" flex-col flex gap-12 ">
                    {timeline.map((item, index) => (
                        <div className=" flex gap-4 flex-col" key={index}>
                            <h2 className=" text-2xl">{item.title}</h2>
                            <div className=" flex gap-5 items-start ml-4">
                                <span><Terminal size={20} /></span>
                                <p className=" text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

        </section>
    )
}

export default Timeline