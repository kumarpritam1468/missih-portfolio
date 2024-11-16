import { TypeAnimation } from "react-type-animation"
import { missih_github } from "../data/ascii"
import useStore from "../data/store";

const Hero = () => {
  const { menuOpen } = useStore();

  return (
    <section className=" h-fit mb-8 pt-12 flex gap-4 justify-center items-center">

      <div className={`flex gap-20 py-8 px-10 ml-6 max-md:mr-6 h-fit w-[1024px] 2xl:w-[1200px] border-blue-600 border rounded-2xl items-center relative ${menuOpen ? "md:mr-[324px] 2xl:mr-[424px]" : "md:mr-6"} transition-all duration-500 ease-in-out`}>
        <div className=" bg-[#171717] absolute left-6 -top-3.5 text-2xl z-20 px-4">
          Home
        </div>

        <p className=" w-40 max-w-40 text-[2px] text-left text-black bg-blue-500">
          {missih_github}
        </p>

        <div className=" flex flex-col gap-6">
          {/* <h3 className=" text-3xl flex items-start gap-5"><span className=" text-4xl">$</span>Welcome to my portfolio</h3> */}

          <h1 className=" text-3xl tracking-wider flex items-start gap-5"><span className=" text-3xl">$</span>
            <TypeAnimation
              sequence={[
                'Your Name here',
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
                1000,
                'Other details here Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt corrupti autem animi officia sapiente hic qui harum eum esse.',
                1000,
              ]}
              speed={75}
              cursor={false}
            />
          </h2>
        </div>
      </div>

      {/* <Navbar /> */}

    </section>
  )
}

export default Hero