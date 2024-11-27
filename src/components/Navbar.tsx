import { Twirl as Hamburger } from 'hamburger-react'
import useStore from '../data/store';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {menuOpen, setMenuOpen} = useStore();

  return (
    <nav className="">
      <div className=' fixed z-50 top-6 right-8' onClick={() => setMenuOpen(!menuOpen)}>
        <Hamburger rounded />
      </div>

      <div className={`flex fixed flex-col justify-center items-center top-0 z-40 border-l border-l-blue-600 h-screen bg-[#171717] w-[300px] 2xl:w-[400px] max-md:w-screen gap-12 text-3xl ${menuOpen ? 'right-0' : '-right-96 max-md:-right-full'} transition-all duration-500 ease-in-out`}>
        <Link to="/" className="navlink">Home</Link>
        <Link to="/articles" className="navlink">Articles</Link>
        <Link to="/projects" className="navlink">Rabbit Hole</Link>
        <Link to="/contact" className="navlink">Contact me</Link>
      </div>
    </nav>
  )
}

export default Navbar