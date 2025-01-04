import { TypeAnimation } from "react-type-animation"
import { Terminal } from "lucide-react";
import useStore from "../data/store";
import { articles } from "../data/data";
import { car } from "../data/ascii";
import { Link } from "react-router-dom";
import Container from "./Container";

const Articles = () => {
    const { menuOpen } = useStore();

    return (
        <section className=" h-fit mt-14 mb-8 flex gap-4 justify-center items-center w-full" id="articles">

            <Container menuOpen={menuOpen}>
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
                                '~/Articles',
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

                                        <Link to={`/article/${index}`} className=" flex gap-3 items-center bg-black border-2 border-green-500 text-lg px-4 py-1.5 w-fit rounded-lg hover:rounded-3xl transition-all duration-500 ease-in-out">
                                            <Terminal />
                                            Read More
                                        </Link>
                                    </div>
                                </div>

                                {index !== articles.length - 1 && <div className=" h-[.75px] w-full bg-green-600 my-10"></div>}
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
            </Container>

        </section >
    )
}

export default Articles