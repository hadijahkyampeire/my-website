import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  console.log('CustomCursor rendered, position:', position);

  useEffect(() => {
    // Force hide all default cursors
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';
    
    const updateCursorPosition = (e) => {
      console.log('Mouse/Touchpad moved:', e.clientX, e.clientY);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Track mouse/touchpad movement
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('pointermove', updateCursorPosition);
    document.addEventListener('touchmove', updateCursorPosition);

    // Track hover states on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .MuiButton-root, .MuiIconButton-root, .MuiChip-root, input, textarea, [role="button"]');
    
    interactiveElements.forEach(element => {
      element.style.cursor = 'none';
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
      element.addEventListener('pointerenter', handleMouseEnter);
      element.addEventListener('pointerleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('pointermove', updateCursorPosition);
      document.removeEventListener('touchmove', updateCursorPosition);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
        element.removeEventListener('pointerenter', handleMouseEnter);
        element.removeEventListener('pointerleave', handleMouseLeave);
      });
    };
  }, []);

  console.log('CustomCursor: Rendering cursor at position:', position);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${position.x - 15}px`,
        top: `${position.y - 15}px`,
        backgroundColor: '#ff0000', // Bright red for testing
        border: '3px solid #ffffff',
      }}
    />
  );
};

export default CustomCursor; 