'use client';
import React, { useState, useEffect } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const disableCursor = () => {
      document.documentElement.style.cursor = 'none';
      document.body.style.cursor = 'none';
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseenter', disableCursor);

    // Disable cursor on page load
    disableCursor();

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseenter', disableCursor);
    };
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        border: '1px solid black',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    />
  );
};

export default CustomCursor;