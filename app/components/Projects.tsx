import React from 'react';
import Image from 'next/image'
function Projects() {
    return (
        <div className='container mx-auto mt-5'>
            <h1 className='text-2xl text-center font-semibold mb-5'>Projects</h1>
            <div className='container mx-auto flex justify-between space-x-4'>
                <div className='flex-1 bg-gray-200 p-4'>
                    <Image src='/shakyaarchitects.jpg' alt="Photo"
                        width={500}
                        height={300} />
                    <p>
                        Shakya Architects
                    </p>
                </div>

                <div className='flex-1 bg-gray-200 p-4'>
                    <Image src='/medley.jpg' alt="Photo"
                        width={500}
                        height={200} />
                    <p>
                        Medley
                    </p>
                </div>
                <div className='flex-1 bg-gray-200 p-4'>
                    <Image src='/medley.jpg' alt="Photo"
                        width={500}
                        height={200} />


                </div>
            </div>
        </div>
    );
}

export default Projects;
