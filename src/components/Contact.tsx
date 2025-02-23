import { TypeAnimation } from "react-type-animation"
import useStore from "../data/store";
import { Github, Instagram, Send, Twitter } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { menuOpen } = useStore();
    const [isPending, setIsPending] = useState(false);
    const form = useRef<HTMLFormElement | any>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsPending(true);

        emailjs
            .sendForm('service_c5jkb27', 'template_bx8hzfq', form.current, {
                publicKey: 'BC1W1_o-ZhTvmX3Ke',
            })
            .then(
                () => {
                    setIsPending(false);
                },
                (error) => {
                    setIsPending(false);
                    console.log(error);
                },
            );
    };
    return (
        <section className=" h-fit my-14 flex gap-4 justify-center items-center" id="contact">

            <div className={`flex gap-32 max-md:flex-col max-md:gap-6 py-8 px-12 ml-6 max-md:mr-6 h-fit max-md:w-[95vw] w-[1024px] 2xl:w-[1200px] border-green-600 border-x-2 rounded-3xl items-center relative ${menuOpen ? "md:mr-[324px] 2xl:mr-[424px]" : "md:mr-6"} transition-all duration-500 ease-in-out shadow-[20px_0_20px_-20px_#22c55e,-20px_0_20px_-20px_#22c55e]`}>

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
                                '~/Contact Me',
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


                <div className=" w-1/2 max-md:w-full flex flex-col gap-6">
                    <div className={`flex items-center w-full pl-4 py-1 `} >
                        <div className=" flex flex-col gap-1">
                            <h3 className=" text-2xl">Email:</h3>
                            <a href="mailto:simy.46.dev@gmail.com" className=" text-base opacity-70 hover:opacity-100 cursor-pointer hover:-translate-y-0.5 transition-all duration-300">simy.46.dev@gmail.com</a>
                        </div>
                    </div>
                    <div className={`flex items-center w-full pl-4 py-1 `} >
                        <div className=" flex flex-col gap-1">
                            <h3 className=" text-2xl">Social:</h3>
                            <div className=" mt-2 flex gap-4">
                                <Twitter className=" opacity-60 hover:opacity-100 cursor-pointer hover:-translate-y-0.5 transition-all duration-300" />
                                <Instagram className=" opacity-60 hover:opacity-100 cursor-pointer hover:-translate-y-0.5 transition-all duration-300" />
                                <Github className=" opacity-60 hover:opacity-100 cursor-pointer hover:-translate-y-0.5 transition-all duration-300" />
                            </div>
                        </div>
                    </div>
                </div>

                <form className=" w-1/2 max-md:w-full flex flex-col items-center gap-6" onSubmit={sendEmail} ref={form}>
                    <input type="text" name="from_name" className=" w-full border border-green-600 bg-transparent rounded-xl p-4 placeholder:text-green-400/70 focus:outline-none focus:rounded-3xl transition-all duration-300" placeholder="Your Email_" />
                    <textarea className=" -mt-3 w-full border border-green-600 bg-transparent rounded-xl p-4 placeholder:text-green-400/70 focus:outline-none focus:rounded-3xl transition-all duration-300 resize-none" placeholder="Type Message Here_" name="message" rows={6}></textarea>

                    <button className=" flex gap-3 items-center bg-transparent border border-green-500 text-sm px-3 py-2 w-fit rounded-lg hover:rounded-[2rem] transition-all duration-500" type="submit">
                        <Send size={20} strokeWidth={1} />
                        {isPending ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>

        </section>
    )
}

export default Contact