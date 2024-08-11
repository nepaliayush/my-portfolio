import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='container mx-auto'>
      <div className='bg-black mt-5 mb-5 rounded-3xl'>
        <div className='flex justify-center items-center p-3'>
          <p className='text-sm sm:text-sm md:text-base lg:text-xl text-center text-white px-2'>
            &copy; {currentYear} Ayush Nepali. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;