'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/#projects' },
    { name: 'About Me', href: '/#about-me' },
    { name: 'Experience', href: '/experience' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
<div className="bg-white fixed top-0 left-0 right-0 mx-8 sm:mx-28 pt-2  z-50">
      <div className='bg-black mt-2 rounded-3xl'>
        <div className='flex justify-between items-center p-2'>
          <Link href='/home'>
         
            <p className='text-white  text-xl md:text-2xl italic font-bold  px-2'>AN</p>
          </Link>
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
            <li  className='py-1 px-2'>
                 <Link href="/home">
                  
                </Link>
              </li> 
            <li  className='py-1 px-2'>
                 <Link href="/home">
                  <p className='text-slate-900 text-xl hover:text-slate-800'>Home</p>
                </Link>
              </li>
              <li  className='py-1 px-2'>
                 <Link href="/about">
                  <p className='text-slate-900 text-xl hover:text-slate-800'>Projects</p>
                </Link>
              </li>
              <li  className='py-1 px-2'>
                 <Link href="/about">
                  <p className='text-slate-900 text-xl hover:text-slate-800'>About me</p>
                </Link>
              </li>
              <li  className='py-1 px-2'>
                 <Link href="/about">
                  <p className='text-slate-900 text-xl hover:text-slate-800'>Resume</p>
                </Link>
              </li>
              <li  className='py-1 px-2'>
                 <Link href="/about">
                  <p className='text-slate-900 text-xl hover:text-slate-800'>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
          <ul className='hidden md:flex'>
        
              <li  className='py-1 px-2'>
                 <Link href="/home">
                  <p className='text-white text-xl hover:text-slate-300'>Home</p>
                </Link>
              </li>
              <li  className='py-1 px-2'>
                 <Link href="/#projects">
                  <p className='text-white text-xl hover:text-slate-300'>Projects</p>
                </Link>
              </li>
              <li  className='py-1 px-2'>
                 <Link href="/#about-me">
                  <p className='text-white text-xl hover:text-slate-300'>About me</p>
                </Link>
              </li>
              <li  className='py-1 px-2'>
                 <Link href="/#experience">
                  <p className='text-white text-xl hover:text-slate-300'>Resume</p>
                </Link>
              </li>
              <li  className='py-1 px-2'>
                 <Link href="/about">
                  <p className='text-white text-xl hover:text-slate-300'>Contact</p>
                </Link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
