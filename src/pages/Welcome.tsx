import RenderWelcomeImage from "@/components/RenderWelcomeImage";
import { welcomeText } from "@/data/data";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Welcome = () => {
  const [step, setState] = useState(1);

  const handleSkip = () => {
    setState(5);
    console.log("clicked");
  }

  return (
    <div className={`${step >= 5 ? 'bg-transparent backdrop-blur-none top-full' : 'bg-black/5 backdrop-blur-sm top-0'} fixed top-0 left-0 w-svw h-svh transition-all duration-500 ease-in-out z-[100] flex items-end justify-start `} onClick={() => setState(prev => prev + 1)}>
      <div className={`w-svw h-1/3 xl:h-[43%] border-t-4 border-t-green-600 bg-emerald-950/80 rounded-t-[2.25rem] px-6 py-7 relative`} >
        <p className={`text-left text-2xl pt-3 ${step === 3 ? 'w-full h-1/2 xl:h-full xl:w-3/5' : 'w-1/2 h-full xl:w-3/5'} `}>
          {step === 1 && <TypeAnimation
            sequence={[
              `${welcomeText[step - 1]}`,
            ]}
            speed={70}
            cursor={true}
          />}
          {step === 2 && <TypeAnimation
            sequence={[
              `${welcomeText[step - 1]}`,
            ]}
            speed={70}
            cursor={true}
          />}
          {step === 3 && <TypeAnimation
            sequence={[
              `${welcomeText[step - 1]}`,
            ]}
            speed={70}
            cursor={true}
          />}
          {step === 4 && <TypeAnimation
            sequence={[
              `${welcomeText[step - 1]}`,
            ]}
            speed={70}
            cursor={true}
          />}
        </p>

        <button
          onClick={handleSkip}
          className={`w-fit px-6 py-2 border-x-2 border-[#59EE5F] flex flex-shrink-0 h-fit rounded-2xl gap-2 items-center shadow-[20px_0_20px_-20px_#22c55e,-20px_0_20px_-20px_#22c55e] absolute bottom-7 left-6 z-[101] `}
        >
          Skip all
          <ArrowRight size={24} strokeWidth={1.5} className=" -translate-y-0.5" />
        </button>

        <RenderWelcomeImage step={step} />
      </div>
    </div>
  )
}

export default Welcome