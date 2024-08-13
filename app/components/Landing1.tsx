import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const useVantaBirds = (elementRef: React.RefObject<HTMLDivElement>) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let effect: any = null;
    const loadEffect = async () => {
      try {
        if (!vantaEffect && elementRef.current) {
          const VANTA = (await import('vanta/dist/vanta.birds.min')).default;
          if (typeof VANTA.BIRDS !== 'function') {
            console.error('VANTA.BIRDS is not a function', VANTA);
            return;
          }
          effect = VANTA.BIRDS({
            el: elementRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xffffff,
            color1: 0x0,
            color2: 0x0,
            backgroundAlpha: 0.57
          });
          setVantaEffect(effect);
        }
      } catch (error) {
        console.error('Failed to load Vanta effect:', error);
      }
    };

    loadEffect();

    return () => {
      if (effect) effect.destroy();
    };
  }, [elementRef, vantaEffect]);
};

function Landing() {
  const vantaRef = useRef<HTMLDivElement>(null);
  useVantaBirds(vantaRef);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative">
      <div ref={vantaRef} style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1}} />
      <div className='text-center'>
        <h1 className='text-3xl md:text-8xl font-bold text-gray-900 mb-2 md:mb-4 animate-fade-in-up'>
          Hi, I am Ayush Nepali
        </h1>
        <p className='text-lg md:text-2xl text-gray-600 mb-4 md:mb-8 animate-fade-in-up delay-200'>
          Software Engineer
        </p>
      </div>
      <div className='mt-5'>
        <svg className="animate-bounce w-6 h-6"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="#000000" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </div>
    </div>
  );
}

export default Landing;