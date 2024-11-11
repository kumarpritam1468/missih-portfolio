const Navbar = () => {
  return (
    <nav className=" h-20 px-32 w-full flex items-center justify-between border-b border-b-blue-600">
        <h1 className=" text-2xl flex gap-2">
            FirstName <span className=" hidden md:block">Lastname</span>
        </h1>

        <div className=" flex gap-12 text-2xl">
            <a href="#hero" className="navlink">Home</a>
            <a href="#blogs" className="navlink">Blogs</a>
            <a href="#projects" className="navlink">Projects</a>
            <a href="#contact" className="navlink">About</a>
        </div>
    </nav>
  )
}

export default Navbar