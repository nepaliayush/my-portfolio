import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='w-96  container md:w-full md:mx-auto bg-black mt-5 mb-5 rounded-3xl'>
      <div className='flex justify-center p-2'>
        <p className='text-sm md:text-xl text-center text-white'>
          &copy; {currentYear} Ayush Nepali. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;