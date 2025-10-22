import { useState, useEffect } from "react"

const Navbar = () => {
    const [active,setActive] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className={`Navbar py-4 px-4 flex justify-between items-center fixed w-full top-0 left-0 right-0 bg-black/50 backdrop-blur-md z-40`}>
            <div className="logo">
                <h1 className="text-2xl md:text-3xl font-bold text-white"><a href="#Home">Portfolio</a></h1>
            </div>
            
            <button 
                className="md:hidden z-50 text-2xl" 
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {mobileMenu ? '✕' : '☰'}
            </button>

            <ul className={`menu md:flex items-center sm:gap-10 gap-4 fixed md:static top-0 right-0 h-screen md:h-auto w-[60%] md:w-auto flex-col md:flex-row justify-center  sm:bg-zinc-800 bg-zinc-900/95x md:bg-transparent backdrop-blur-md transition-all duration-300 ease-in-out md:translate-x-0 ${mobileMenu ? 'translate-x-0' : 'translate-x-full'} md:opacity-100`}>
                <li>
                    <a onClick={() => setMobileMenu(false)} href="#Home" className="sm:text-lg text-base font-medium px-4 py-2 rounded-md transition-all duration-300 md:hover:bg-violet-500 block">Home</a>
                </li>
                <li>
                    <a onClick={() => setMobileMenu(false)} href="#About" className="sm:text-lg text-base font-medium px-4 py-2 rounded-md transition-all duration-300 md:hover:bg-violet-500 block">About</a>
                </li>
                <li>
                    <a onClick={() => setMobileMenu(false)} href="#Projects" className="sm:text-lg text-base font-medium px-4 py-2 rounded-md transition-all duration-300 md:hover:bg-violet-500 block">Projects</a>
                </li>
                <li>
                    <a onClick={() => setMobileMenu(false)} href="#Articles" className="sm:text-lg text-base font-medium px-4 py-2 rounded-md transition-all duration-300 md:hover:bg-violet-500 block">Article</a>
                </li>
                <li>
                    <a onClick={() => setMobileMenu(false)} href="#Contact" className="sm:text-lg text-base font-medium px-4 py-2 rounded-md transition-all duration-300 md:hover:bg-violet-500 block">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
