import { TypeAnimation } from "react-type-animation"
import useStore from "../data/store";
import { Instagram, Twitter } from "lucide-react";

const Contact = () => {
    const { menuOpen } = useStore();
    return (
        <section className=" h-fit my-14 flex gap-4 justify-center items-center">

            <div className={`flex flex-col py-8 px-12 ml-6 max-md:mr-6 h-fit w-[1024px] 2xl:w-[1200px] border-blue-600 border-x-2 rounded-3xl items-center relative ${menuOpen ? "md:mr-[324px] 2xl:mr-[424px]" : "md:mr-6"} transition-all duration-500 ease-in-out`}>

                <div className=" bg-[#171717] absolute left-8 -top-3.5 text-2xl z-20 pl-4 pr-2">
                    <TypeAnimation
                        sequence={[
                            'Contact Me',
                        ]}
                        speed={50}
                    />
                </div>


                <div className={`flex items-center w-full border-l-4 border-l-blue-600/40 my-4 pl-4 py-1 group hover:border-l-blue-600  `} >
                    <div className=" flex flex-col gap-1">
                        <h3 className=" text-2xl">Email:</h3>
                        <p className=" text-base opacity-70">youremail@gmail.com</p>
                    </div>
                </div>
                <div className={`flex items-center w-full border-l-4 border-l-blue-600/40 my-4 pl-4 py-1 group hover:border-l-blue-600  `} >
                    <div className=" flex flex-col gap-1">
                        <h3 className=" text-2xl">Phone:</h3>
                        <p className=" text-base opacity-70">+0123456789</p>
                    </div>
                </div>
                <div className={`flex items-center w-full border-l-4 border-l-blue-600/40 my-4 pl-4 py-1 group hover:border-l-blue-600  `} >
                    <div className=" flex flex-col gap-1">
                        <h3 className=" text-2xl">Social:</h3>
                        <div className=" mt-2 flex gap-4">
                            <Twitter className=" opacity-60 hover:opacity-100 cursor-pointer hover:-translate-y-0.5 transition-all duration-300" />
                            <Instagram className=" opacity-60 hover:opacity-100 cursor-pointer hover:-translate-y-0.5 transition-all duration-300" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact