const Container = ({ menuOpen, children } : { menuOpen: boolean, children: React.ReactNode }) => {
    return (
        <div className={`
      flex flex-col gap-6 py-8 px-12 ml-6 max-md:mr-6 
      h-fit w-[1024px] 2xl:w-[1200px] 
      border-green-600 border-x-2 rounded-3xl 
      items-center relative
      shadow-[20px_0_20px_-20px_#22c55e,-20px_0_20px_-20px_#22c55e]
      ${menuOpen ? "md:mr-[324px] 2xl:mr-[424px]" : "md:mr-6"}
      transition-all duration-500 ease-in-out
    `}>
            {children}
        </div>
    );
};

export default Container;