import { TypeAnimation } from "react-type-animation"
import { article1 } from "../data/ascii"
import { Terminal } from "lucide-react";
import useStore from "../data/store";
import { articles } from "../data/data";

const Articles = () => {
    const { menuOpen } = useStore();

    return (
        <section className=" h-fit my-12 flex gap-4 justify-center items-center w-full">

            <div className={`flex flex-col py-10 px-10 ml-6 max-md:mr-6 h-fit w-[1024px] 2xl:w-[1200px] border-blue-600 border rounded-2xl items-center relative ${menuOpen ? "md:mr-[324px] 2xl:mr-[424px]" : "md:mr-6"} transition-all duration-500 ease-in-out`}>
                <div className=" bg-[#171717] absolute left-6 -top-3.5 text-2xl z-20 px-4">
                    Articles
                </div>
                {articles.map((article, index) => (
                    <>
                        <div className={`flex gap-20 items-center w-full`} key={index}>

                            <p className=" w-40 max-w-28 text-[1px] text-left text-black bg-blue-500">
                                {article1}
                            </p>

                            <div className=" flex flex-col gap-6">
                                {/* <h3 className=" text-3xl flex items-start gap-5"><span className=" text-4xl">$</span>Welcome to my portfolio</h3> */}

                                <h1 className=" text-3xl tracking-wider flex items-start gap-5"><span className=" text-3xl">$</span>
                                    <TypeAnimation
                                        sequence={[
                                            5000,
                                            `${article.title}`,
                                            1000,
                                        ]}
                                        speed={60}
                                        cursor={false}
                                    /></h1>

                                <h2 className=" text-xl flex items-start gap-5">
                                    <span className=" text-3xl">$</span>
                                    <TypeAnimation
                                        sequence={[
                                            // Same substring at the start will only be typed once, initially
                                            6000,
                                            `${article.description}`,
                                            1000,
                                        ]}
                                        speed={75}
                                        cursor={false}
                                    />
                                </h2>

                                <button className=" flex gap-3 items-center bg-[#171717] border-2 border-blue-500 text-2xl px-8 py-2 w-fit rounded-lg hover:rounded-3xl transition-all duration-300 ease-in-out">
                                    <Terminal />
                                    Read More
                                </button>
                            </div>
                        </div>

                        {index !== articles.length - 1 && <div className=" h-[.75px] w-full bg-blue-600 my-10"></div>}
                    </>
                ))}
            </div>

        </section>
    )
}

export default Articles