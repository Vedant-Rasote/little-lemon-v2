'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor: React.FC = () => {
  const customCursorRef = useRef<HTMLDivElement>(null);

  const handleMousePointerMove = (event: PointerEvent) => {
    const { clientX, clientY } = event;
    gsap.to(customCursorRef.current!, { x: clientX, y: clientY });
  };

  const hideCursorOnTouch = () => {
    customCursorRef.current!.style.display = 'none';
  };

  const onPointerEnterInteractive = () => {
    customCursorRef.current!.style.background = 'none';
    customCursorRef.current!.style.border = '1px solid rgba(255, 255, 255, 0.9)';
    gsap.to(customCursorRef.current!, { scale: 2 });
  };

  const onPointerLeaveInteractive = () => {
    customCursorRef.current!.style.background = 'rgba(255, 255, 255, 0.9)';
    gsap.to(customCursorRef.current!, { scale: 1 });
  };

  useEffect(() => {
    const initialPointer = window.matchMedia('(pointer: fine)').matches ? 'mouse' : 'touch';
    if (initialPointer === 'touch') {
      hideCursorOnTouch();
    }

    document.addEventListener('pointermove', (event) => {
      switch (event.pointerType) {
        case 'mouse':
          handleMousePointerMove(event);
          const interactiveElements = Array.from(document.getElementsByClassName('interactive')) as HTMLElement[];
          interactiveElements.forEach((interactiveElement) => {
            interactiveElement.addEventListener('pointerenter', onPointerEnterInteractive);
            interactiveElement.addEventListener('pointerleave', onPointerLeaveInteractive);
          });
          break;
        case 'pen':
        case 'touch':
          hideCursorOnTouch();
          break;
        default:
          console.log(`pointerType ${event.pointerType} is not supported`);
      }
    });

    return () => {
      document.removeEventListener('pointermove', handleMousePointerMove);

      const interactiveElements = Array.from(document.getElementsByClassName('interactive')) as HTMLElement[];
      interactiveElements.forEach((interactiveElement) => {
        interactiveElement.removeEventListener('pointerenter', onPointerEnterInteractive);
        interactiveElement.removeEventListener('pointerleave', onPointerLeaveInteractive);
      });
    };
  }, []);

  return (
    <div id='custom__cursor' ref={customCursorRef} className='custom__cursor'></div>
  );
};

export default Cursor;
