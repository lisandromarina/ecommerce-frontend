import { useEffect, useState } from 'react';

function useResponsiveItemsQuantity() {
  const [itemsQuantity, setItemsQuantity] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 480) {
        setItemsQuantity(4);
      } else if (screenWidth < 768) {
        setItemsQuantity(4);
      } else if (screenWidth < 1200) {
        setItemsQuantity(6);
      } else {
        setItemsQuantity(8);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return itemsQuantity;
}

export default useResponsiveItemsQuantity;