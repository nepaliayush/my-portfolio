import React from 'react';
import Image from 'next/image';

function Landing() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* Adjust height to account for NavBar */}
      {/* Left section for image */}
      <div className='w-full md:w-1/2 relative h-1/2 md:h-full'>
        <Image
          src='/ayushnepali1.png'
          alt='Ayush Nepali'
          layout='fill'
          objectFit='contain'
        />
      </div>

      {/* Right section for text */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-4 md:p-8'>
        <div className='max-w-md text-center'>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4 animate-fade-in-up'>
            Hi&lsquo; I am Ayush Nepali
          </h1>
          <p className='text-lg md:text-2xl text-gray-600 mb-4 md:mb-8 animate-fade-in-up delay-200'>
           Software Engineer
          </p>
          <button className='bg-black text-white px-4 md:px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300'>
            Explore More !
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
