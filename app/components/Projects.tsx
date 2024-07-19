import React from 'react';
import Image from 'next/image';

function Projects() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full p-4'>
      <h1 className='text-2xl font-semibold mb-5'>Projects</h1>
      <div className='flex space-x-4'>
        <div className='flex-1 bg-gray-200 p-4'>
          <Image src='/shakyaarchitects.jpg' alt="Shakya Architects" width={500} height={300} />
          <p>Shakya Architects</p>
        </div>
        <div className='flex-1 bg-gray-200 p-4'>
          <Image src='/medley.jpg' alt="Medley" width={500} height={200} />
          <p>Medley</p>
        </div>
        <div className='flex-1 bg-gray-200 p-4'>
          <Image src='/medley.jpg' alt="Project 3" width={500} height={200} />
          <p>Project 3</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
