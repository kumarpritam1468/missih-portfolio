const RenderWelcomeImage = ({step}: {step: number}) => {
  console.log(step);
  return (
    <>
      {step === 1 && <img src="/step1.png" alt="step1" className=" absolute right-0 bottom-0 w-[45vw] xl:w-[40vw]" />}
      {step === 2 && <img src="/step2.png" alt="step2" className=" absolute right-0 xl:right-16 bottom-0 w-[45vw] xl:w-[20vw]" />}
      {step === 3 && <img src="/step3.png" alt="step3" className=" absolute -right-5 bottom-0 w-[65vw] xl:w-[40vw]" />}
      {step === 4 && <img src="/step4.png" alt="step4" className=" absolute right-0 bottom-0 w-[42vw] xl:w-[30vw]" />}
    </>
  )
}

export default RenderWelcomeImage