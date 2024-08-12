'use client';
import React, { useState, useEffect, useCallback } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const updateCursorPosition = useCallback((x: number, y: number) => {
    setPosition({ x, y });
    setIsVisible(true);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    updateCursorPosition(e.clientX, e.clientY);
  }, [updateCursorPosition]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      updateCursorPosition(touch.clientX, touch.clientY);
    }
  }, [updateCursorPosition]);

  const handleTouchEnd = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    const disableCursor = () => {
      document.documentElement.style.cursor = 'none';
      document.body.style.cursor = 'none';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', disableCursor);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    disableCursor();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', disableCursor);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseMove, handleTouchMove, handleTouchEnd]);

  if (!isVisible) return null;

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