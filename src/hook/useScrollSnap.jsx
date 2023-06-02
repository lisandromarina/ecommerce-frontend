import React, { useRef } from 'react';

const useScrollSnap = () => {
  const containerRef = useRef(null);
  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    const touchCurrentX = e.touches[0].clientX;
    const touchDeltaX = touchStartX - touchCurrentX;

    if (Math.abs(touchDeltaX) > 20) {
      e.preventDefault();

      const container = containerRef.current;
      if (container) {
        container.scrollLeft += touchDeltaX;
      }
    }
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);

    const container = containerRef.current;
    if (container) {
      const containerWidth = container.clientWidth;
      const snapThreshold = containerWidth / 2; // Adjust this value as needed

      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth - containerWidth;

      let snapPosition = 0;
      if (scrollLeft < snapThreshold) {
        snapPosition = 0;
      } else if (scrollLeft < scrollWidth / 2 - snapThreshold) {
        snapPosition = Math.floor(scrollWidth / 2);
      } else if (scrollLeft < scrollWidth - snapThreshold) {
        snapPosition = Math.floor(scrollWidth / 2);
      } else {
        snapPosition = scrollWidth;
      }


      container.scrollTo({
        left: snapPosition,
        behavior: 'smooth',
      });
    }
  };

  return { containerRef, handleTouchStart };
};

export default useScrollSnap;