import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();  // Hook to get the current route location

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page when the route changes
  }, [location]);

  return null;  // This component doesn't render anything, just a side effect
};

export default ScrollToTop;