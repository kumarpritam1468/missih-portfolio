import { TypeAnimation } from "react-type-animation"
import useStore from "../data/store";
import { Instagram, Send, Twitter } from "lucide-react";

const Contact = () => {
    const { menuOpen } = useStore();
    return (
        <section className=" h-fit my-14 flex gap-4 justify-center items-center" id="contact">

            <div className={`flex gap-32 max-md:flex-col max-md:gap-6 py-8 px-12 ml-6 max-md:mr-6 h-fit w-[1024px] 2xl:w-[1200px] border-blue-600 border-x-2 rounded-3xl items-center relative ${menuOpen ? "md:mr-[324px] 2xl:mr-[424px]" : "md:mr-6"} transition-all duration-500 ease-in-out`}>

                <div className=" bg-[#171717] absolute left-8 -top-3.5 text-2xl z-20 pl-4 pr-2">
                    <TypeAnimation
                        sequence={[
                            'Contact Me',
                        ]}
                        speed={50}
                    />
                </div>


                <div className=" w-1/2 max-md:w-full">
                    <div className={`flex items-center w-full my-4 pl-4 py-1 `} >
                        <div className=" flex flex-col gap-1">
                            <h3 className=" text-2xl">Email:</h3>
                            <p className=" text-base opacity-70">simy.46.dev@gmail.com</p>
                        </div>
                    </div>
                    <div className={`flex items-center w-full my-4 pl-4 py-1 `} >
                        <div className=" flex flex-col gap-1">
                            <h3 className=" text-2xl">Github:</h3>
                            <p className=" text-base opacity-70">simy46</p>
                        </div>
                    </div>
                    <div className={`flex items-center w-full my-4 pl-4 py-1 `} >
                        <div className=" flex flex-col gap-1">
                            <h3 className=" text-2xl">Social:</h3>
                            <div className=" mt-2 flex gap-4">
                                <Twitter className=" opacity-60 hover:opacity-100 cursor-pointer hover:-translate-y-0.5 transition-all duration-300" />
                                <Instagram className=" opacity-60 hover:opacity-100 cursor-pointer hover:-translate-y-0.5 transition-all duration-300" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" w-1/2 max-md:w-full flex flex-col items-center gap-6">
                    <textarea className=" w-full border border-blue-600 bg-transparent rounded-xl p-4 placeholder:text-blue-400/70 focus:outline-none focus:rounded-3xl transition-all duration-300 resize-none" placeholder="Type Message Here_" rows={6}></textarea>

                    <button className=" flex gap-3 items-center bg-transparent border border-blue-500 text-sm px-3 py-2 w-fit rounded-lg hover:rounded-[2rem] transition-all duration-500">
                        <Send size={20} strokeWidth={1} />
                        Send Message
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Contact