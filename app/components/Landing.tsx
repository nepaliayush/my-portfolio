import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function Landing() {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationFinished(true);
    }, 3500); // Match the duration of the typing animation (3.5s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
      {/* Image section - full width on small screens, half width on md and up */}
      <div className='w-full md:w-1/2 relative h-1/2 md:h-full animate-fade-in-up delay-200'>
        <Image
          src='/ayushnepali1.png'
          alt='Ayush Nepali'
          layout='fill'
          objectFit='contain'
        />
      </div>

      {/* Text section - full width on small screens, half width on md and up */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-4 md:p-8'>
        <div className='max-w-md text-center'>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4 typing-animation'>
            Hi, I am Ayush Nepali
          </h1>
          <p className='text-lg md:text-2xl text-gray-600 mb-4 md:mb-8 typing-animation'>
            Software Engineer
          </p>
        </div>
        {animationFinished && (
          <div className='mt-5 animate-fade-in-up delay-200'>
            <svg className="animate-bounce w-6 h-6"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#000000" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default Landing;
