import { missih_github } from "../data/ascii"

const Hero = () => {
  return (
    <section className=" h-[100svh] px-32 flex gap-4 justify-center items-center pb-4">

      <div className=" flex gap-20 py-8 px-10 h-fit w-fit max-w-screen-xl border-blue-600 border rounded-2xl items-center relative">
        <div className=" bg-[#171717] absolute left-6 -top-3.5 text-2xl z-20 px-4">
          Home
        </div>

        <p className=" w-fit max-w-40 text-[3px] text-left">
          {missih_github}
        </p>

        <div className=" flex flex-col gap-6">
          {/* <h3 className=" text-3xl flex items-start gap-5"><span className=" text-4xl">$</span>Welcome to my portfolio</h3> */}

          <h1 className=" text-3xl tracking-wider flex items-start gap-5"><span className=" text-4xl">$</span>Your Name here</h1>

          <h2 className=" text-xl flex items-start gap-5"><span className=" text-4xl">$</span>Other details here Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt corrupti autem animi officia sapiente hic qui harum eum esse.</h2>
        </div>
      </div>

    </section>
  )
}

export default Hero