'use client';

import { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-96 container md:w-full md:mx-auto bg-black dark:bg-slate-400 mt-5 rounded-3xl'>
      <div className='flex justify-between items-center p-2'>
        <div className='flex items-center '>
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-white focus:outline-none focus:bg-gray-700 px-3 p-1 rounded-xl'
            >
              {/* Menu Icon */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </button>
          </div>
          <a href='#' className='hidden md:block text-white dark:text-slate-50 text-xl'>An</a>
        </div>
        <ul className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block mt-2 md:mt-0 md:ml-4 `}>
          <li className='py-1 px-2'>
            <a href='#' className='hover:text-gray-300 text-white text-xl'>Home</a>
          </li>
          <li className='py-1 px-2'>
            <a href='#' className='hover:text-gray-300 text-white text-xl'>Projects</a>
          </li>
          <li className='py-1 px-2'>
            <a href='#' className='hover:text-gray-300 text-white text-xl'>About Me</a>
          </li>
          <li className='py-1 px-2'>
            <a href='#' className='hover:text-gray-300 text-white text-xl'>Experience</a>
          </li>
          <li className='py-1 px-2'>
            <a href='#' className='hover:text-gray-300 text-white text-xl'>Resume</a>
          </li>
          <li className='py-1 px-2'>
            <a href='#' className='hover:text-gray-300  text-white text-xl'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;