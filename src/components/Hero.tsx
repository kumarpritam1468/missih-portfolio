import { TypeAnimation } from "react-type-animation"
// import { missih_github } from "../data/ascii"
import useStore from "../data/store";

const Hero = () => {
  const { menuOpen } = useStore();

  return (
    <section className=" h-fit mb-8 pt-12 flex gap-4 justify-center items-center" id="hero">

      <div className={`flex flex-col gap-6 py-8 px-12 ml-6 max-md:mr-6 h-fit w-[1024px] 2xl:w-[1200px] border-blue-600 border-x-2 rounded-3xl items-center relative ${menuOpen ? "md:mr-[324px] 2xl:mr-[424px]" : "md:mr-6"} transition-all duration-500 ease-in-out`}>
        <div className=" bg-black absolute left-8 -top-3.5 text-2xl z-20 pl-4 pr-2">
          <TypeAnimation
            sequence={[
              'Home',
            ]}
            speed={50}
            cursor={false}
          />
        </div>

        <div className=" w-full bg-slate-800 h-40 mb-16 text-center text-2xl relative">
            Cover Image

            <div className=" absolute ring-2 ring-black ring-offset-2 bg-black -bottom-14 left-10 size-28 rounded-full overflow-hidden flex items-center justify-center">
              <img src="/dp.png" alt="" className=" object-contain w-28" />
            </div>
        </div>

        {/* <p className=" w-40 max-w-40 text-[2px] text-left text-black bg-blue-500">
          {missih_github}
        </p> */}

        <div className=" flex flex-col w-full gap-6">
          {/* <h3 className=" text-3xl flex items-start gap-5"><span className=" text-4xl">$</span>Welcome to my portfolio</h3> */}

          <h1 className=" text-3xl tracking-wider flex items-start gap-5"><span className=" text-3xl">$</span>
            <TypeAnimation
              sequence={[
                'simy46_',
                1000,
              ]}
              speed={60}
              cursor={false}
            />
          </h1>

          <h2 className=" text-xl flex items-start gap-5">
            <span className=" text-3xl">$</span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                1000,
                'Computer Science Student',
                1000,
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

export default Hero