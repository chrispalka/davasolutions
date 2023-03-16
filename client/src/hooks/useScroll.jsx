import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scrollDirection, setScrollDirection] = useState(true);
  const [topOfPage, setTopOfPage] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? false : true;
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1)
      ) {
        setScrollDirection(direction);
      }
      if (window.pageYOffset === 0) {
        setTopOfPage(true);
      } else {
        setTopOfPage(false);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection, topOfPage]);

  return { scrollDirection, topOfPage };
};

export default useScroll;
