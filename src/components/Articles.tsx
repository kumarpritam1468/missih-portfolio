import { TypeAnimation } from "react-type-animation"
import { Terminal } from "lucide-react";
import useStore from "../data/store";
import { articles } from "../data/data";
import { car } from "../data/ascii";
import { Link } from "react-router-dom";

const Articles = () => {
    const { menuOpen } = useStore();

    return (
        <section className=" h-fit mt-14 mb-8 flex gap-4 justify-center items-center w-full" id="articles">

            <div className={`flex flex-col py-10 px-14 ml-6 max-md:mr-6 h-fit w-[1024px] 2xl:w-[1200px] border-blue-600 border-x-2 rounded-3xl items-center relative ${menuOpen ? "md:mr-[324px] 2xl:mr-[424px]" : "md:mr-6"} transition-all duration-500 ease-in-out `}>
                <div className=" bg-black absolute left-8 -top-3.5 text-2xl z-20 px-4">
                    <TypeAnimation
                        sequence={[
                            1000,
                            "Articles",
                        ]}
                        speed={50}
                        cursor={false}
                    />
                </div>
                {articles.length > 0 ? (
                    <>
                        {articles.map((article, index) => (
                            <>
                                <div className={`flex gap-20 items-center w-full`} key={index}>

                                    <div className=" flex flex-col gap-6">
                                        {/* <h3 className=" text-3xl flex items-start gap-5"><span className=" text-4xl">$</span>Welcome to my portfolio</h3> */}

                                        <h1 className=" text-2xl tracking-wider flex items-start gap-5"><span className=" text-3xl">$</span>
                                            {article.title}
                                        </h1>

                                        <h2 className=" text-lg flex items-start gap-5">
                                            <span className=" text-3xl">$</span>
                                            {article.description}
                                        </h2>

                                        <Link to={`/article/${index}`} className=" flex gap-3 items-center bg-black border-2 border-blue-500 text-lg px-4 py-1.5 w-fit rounded-lg hover:rounded-3xl transition-all duration-500 ease-in-out">
                                            <Terminal />
                                            Read More
                                        </Link>
                                    </div>
                                </div>

                                {index !== articles.length - 1 && <div className=" h-[.75px] w-full bg-blue-600 my-10"></div>}
                            </>

                        ))}
                    </>
                ) : (
                    <div className=" size-full py-7 flex flex-col justify-center items-center gap-10">
                        <p className=" whitespace-pre text-[3px]">
                            {car}
                        </p>

                        <h2 className=" text-xl">
                            Articles in progress...
                        </h2>
                    </div>
                )}
            </div>

        </section >
    )
}

export default Articles