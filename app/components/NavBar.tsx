'use client';

import { useState, useEffect } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container mx-auto px-4'>
      <div className='bg-black mt-5 rounded-3xl'>
        <div className='flex justify-between items-center p-2'>
          <a href='#' className='text-white text-xl z-50'>An</a>
          <div className='md:hidden z-50'>
            <button
              onClick={toggleMenu}
              className='text-white focus:outline-none focus:bg-gray-700 px-3 py-1 rounded-xl'
            >
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
          <div className={`fixed inset-0 bg-white z-40 ${isOpen ? 'flex' : 'hidden'} md:hidden flex-col`}>
            <div className='flex justify-end p-4'>
              <button
                onClick={toggleMenu}
                className='text-black focus:outline-none p-2'
              >
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
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <ul className='flex flex-col items-center justify-center flex-grow'>
              {['Home', 'Projects', 'About Me', 'Experience', 'Resume', 'Contact'].map((item) => (
                <li key={item} className='py-2'>
                  <a href='#' className='text-black hover:text-gray-600 text-2xl' onClick={toggleMenu}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className='hidden md:flex'>
            {['Home', 'Projects', 'About Me', 'Experience', 'Resume', 'Contact'].map((item) => (
              <li key={item} className='py-1 px-2'>
                <a href='#' className='hover:text-gray-300 text-white text-sm sm:text-base md:text-lg lg:text-xl'>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;