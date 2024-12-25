import { useParams } from "react-router-dom"
import { articles } from "../data/data";
import { TypeAnimation } from "react-type-animation";
import useStore from "../data/store";

const ArticlePage = () => {
  const { index } = useParams();
  const { menuOpen } = useStore();

  const article = articles[Number(index)];

  return (
    <section className=" h-fit mb-8 pt-20 flex gap-4 justify-center items-center" id="hero">

      <div className={`flex gap-20 py-8 px-12 ml-6 max-md:mr-6 h-fit w-[1024px] 2xl:w-[1200px] border-blue-600 border-x-2 rounded-3xl items-center relative ${menuOpen ? "md:mr-[324px] 2xl:mr-[424px]" : "md:mr-6"} transition-all duration-500 ease-in-out`}>
        <div className=" bg-black absolute left-8 -top-3.5 text-2xl z-20 pl-4 pr-2">
          <TypeAnimation
            sequence={[
              `${article.title}`,
            ]}
            speed={50}
          />
        </div>

        <div className=" flex flex-col gap-6 pt-6">
          {/* <h3 className=" text-3xl flex items-start gap-5"><span className=" text-4xl">$</span>Welcome to my portfolio</h3> */}

          <h1 className=" text-2xl tracking-wider flex items-start gap-5"><span className=" text-3xl">$</span>
            <TypeAnimation
              sequence={[
                1000,
                `${article.description}`,
              ]}
              speed={75}
              cursor={false}
            />
          </h1>

          <h2 className=" text-xl flex items-start gap-5">
            <span className=" text-3xl">$</span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                3500,
                `${article.longerDesc}`,
              ]}
              speed={75}
              cursor={false}
            />
          </h2>
        </div>
      </div>

    </section>
  )
}

export default ArticlePage