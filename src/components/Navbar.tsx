import { Twirl as Hamburger } from 'hamburger-react'
import useStore from '../data/store';

const Navbar = () => {
  const {menuOpen, setMenuOpen} = useStore();
  const pathname = window.location.pathname;

  const showExtra = pathname === '/' || pathname.startsWith('/#');

  return (
    <nav className="">
      <div className=' fixed z-50 top-6 right-8' onClick={() => setMenuOpen(!menuOpen)}>
        <Hamburger rounded />
      </div>

      <div className={`flex fixed flex-col justify-center items-center top-0 z-40 border-l border-l-blue-600 h-screen bg-[#171717] w-[300px] 2xl:w-[400px] max-md:w-screen gap-12 text-3xl ${menuOpen ? 'right-0' : '-right-96 max-md:-right-full'} transition-all duration-500 ease-in-out`}>
        <a href="/#hero" className="navlink">Home</a>
        <a href="/#articles" className={`navlink ${!showExtra ? 'hidden' : ''}`}>Articles</a>
        <a href="/rabbit-hole" className="navlink">Rabbit Hole</a>
        <a href="/#contact" className={`navlink ${!showExtra ? 'hidden' : ''}`}>Contact me</a>
      </div>
    </nav>
  )
}

export default Navbar