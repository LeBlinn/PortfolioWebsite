import styles from '../css/Portfolio.module.css';

import React, { useRef, useEffect } from 'react';

function Portfolio(){
    
    // Reference to the portfolio element
    const portfolioRef = useRef(null);

    // Scroll event handler
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (portfolioRef.current) {
            // This will adjust the horizontal scroll as you scroll down
            portfolioRef.current.scrollLeft = scrollY;
        }
    };

    // Attach the scroll event listener to window
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, []);
    
    return (
        <div className={styles.mainDiv} ref={portfolioRef}>
           <h1 className={styles.Portfolio}>Portfolio</h1> 
        </div>
    )
}

export default Portfolio;