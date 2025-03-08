import { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const nodeRef = useRef(null);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggle && nodeRef.current && !nodeRef.current.contains(event.target)) {
        setToggle(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggle]);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} ${activeLink === nav.id ? 'text-[#33bbcf]' : 'text-white'} hover:text-[#33bbcf] transition-colors`}
          >
            <a href={`#${nav.id}`} onClick={() => setActiveLink(nav.id)}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          aria-label={toggle ? "Close menu" : "Open menu"}
          onClick={() => setToggle((prev) => !prev)}
          className="focus:outline-none focus:ring-2 focus:ring-[#33bbcf] rounded-md"
        >
          <img 
            src={toggle ? close : menu} 
            className="w-[28px] h-[28px] object-contain transition-transform duration-300"
            alt="" 
          />
        </button>

        <CSSTransition
          in={toggle}
          nodeRef={nodeRef}
          timeout={200}
          classNames="mobile-menu"
          unmountOnExit
        >
          <div
            ref={nodeRef}
            className="p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10"
          >
            <ul className="list-none flex flex-col justify-end items-start flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] w-full ${
                    index !== navLinks.length - 1 ? 'mb-4' : 'mb-0'
                  } ${activeLink === nav.id ? 'text-[#33bbcf]' : 'text-white'}`}
                >
                  <a
                    href={`#${nav.id}`}
                    className="block w-full p-2 hover:bg-gray-800 rounded transition-colors"
                    onClick={() => {
                      setActiveLink(nav.id);
                      setToggle(false);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </CSSTransition>
      </div>
    </nav>
  );
};

export default NavBar;