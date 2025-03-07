import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const NavBar = () => {
  const [toggle, setToggle] = useState(false) // State to manage the toggle for the mobile menu
  const [activeLink, setActiveLink] = useState('home')

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar' role="navigation" aria-label="Main Navigation">
      {/* Logo */}
      <a href="#home">
        <img src={logo} alt="hoobank logo" className="w-[124px] h-[32px]" />
      </a>

      {/* Desktop Navigation Links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} ${activeLink === nav.id ? 'text-[#33bbcf]' : 'text-white'}`}
          >
            <a href={`#${nav.id}`}
              onClick={() => setActiveLink(nav.id)}
              aria-current={activeLink === nav.id ? "page" : undefined}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          aria-expanded={toggle}
          aria-controls="mobile-menu"
          aria-label={toggle ? "Close menu" : "Open menu"}
          onClick={() => setToggle((prev) => !prev)}
          className="focus:outline-none focus:ring-2 focus:ring-[#33bbcf] rounded-md"
        >
          <img src={toggle ? close : menu} className="w-[28px] h-[28px] object-contain" alt="" />
        </button>

        {/* Mobile Navigation Links */}
        <div
          id="mobile-menu"
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} ${activeLink === nav.id ? 'text-[#33bbcf]' : 'text-white'}`}
              >
                <a
                  href={`#${nav.id}`}
                  onClick={() => {
                    setActiveLink(nav.id);
                    setToggle(false);
                  }}
                  aria-current={activeLink === nav.id ? "page" : undefined}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}



export default NavBar