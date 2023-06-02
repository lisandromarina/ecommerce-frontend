import { useState, useEffect } from 'react';

const usePageable = (initialItemsPerPage, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 480) {
        setItemsPerPage(4);
      } else if (screenWidth > 481 & screenWidth < 768) {
        setItemsPerPage(4);
      } else if (screenWidth > 769 & screenWidth < 1200) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(8);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const resetPage = () => {
    setCurrentPage(initialPage);
  };

  const paginateItems = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);
  
    return items.slice(startIndex, endIndex);
  };

  return { currentPage, goToPage, paginateItems, resetPage };
};

export default usePageable;