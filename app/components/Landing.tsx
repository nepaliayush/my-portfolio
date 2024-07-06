import React from 'react'

function Landing() {
  return (
    <div className="mx-4  md:mx-auto mt-5 flex flex-col items-center md:flex-row">
      <div className="w-96 md:w-1/2 flex justify-center md:justify-center mb-5 md:mb-0">
        <img src="ayushnepali1.png" alt="Photo" className="h-64 md:h-auto" />
      </div>
      <div className="w-96 md:w-1/2 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Ayush Nepali</h1>
        <p className="text-lg text-gray-600 animate-fade-in-up delay-200">Software Engineer</p>
      </div>
    </div>
  )
}

export default Landing
