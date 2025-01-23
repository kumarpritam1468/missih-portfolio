import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TypeAnimation } from "react-type-animation"
// import { missih_github } from "../data/ascii"
import useStore from "../data/store";
import Container from "./Container";
import { BookOpenCheck, CodeXml, Eye } from "lucide-react";

const Hero = () => {
  const { menuOpen } = useStore();

  return (
    <section className=" h-fit mb-8 pt-12 max-md:pt-28 flex gap-4 justify-center items-center" id="hero">

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
                '~/Home',
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

        <div className=" w-full bg-slate-800 h-60 max-md:h-32 mb-16 max-md:mb-10 text-center text-2xl relative">
          <img src="/banner.png" alt="" className=" size-full object-cover border-[1.5px] rounded-md border-green-500 " />

          <div className=" absolute bg-black -bottom-14 max-md:-bottom-10 left-10 size-28 max-md:size-20 rounded-full overflow-hidden flex items-center justify-center ring-[2px] ring-green-500 ring-offset-2 ring-offset-black shadow-[0_0_3rem_#22c55e]">
            <img src="/dp3.png" alt="" className=" object-contain w-28" />
          </div>
        </div>

        {/* <p className=" w-40 max-w-40 text-[2px] text-left text-black bg-green-500">
          {missih_github}
        </p> */}

        <div className=" w-full h-fit flex justify-between items-end">
          <div className=" flex flex-col w-full gap-6">
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

            <h2 className=" text-xl flex items-start gap-5 text-green-500">
              <span className=" text-3xl">$</span>
              <TypeAnimation
                sequence={[
                  1000,
                  'Computer Science Student',
                  1000,
                ]}
                speed={75}
                cursor={false}
              />
            </h2>
          </div>

          <div className=" flex gap-6 items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild className=" cursor-pointer">
                    <Eye />
                  </TooltipTrigger>
                  <TooltipContent className=" text-base border border-green-600 text-green-500 bg-black" >
                    <p>Views : 1,754</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild className=" cursor-pointer">
                    <BookOpenCheck />
                  </TooltipTrigger>
                  <TooltipContent className=" text-base border border-green-600 text-green-500 bg-black" >
                    <p>Books Read : 17</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild className=" cursor-pointer">
                    <CodeXml />
                  </TooltipTrigger>
                  <TooltipContent className=" text-base border border-green-600 text-green-500 bg-black" >
                    <p>Programming Languages Known : 7</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
          </div>
        </div>
      </Container>

    </section>
  )
}

export default Hero