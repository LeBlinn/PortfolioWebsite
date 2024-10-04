import styles from '../../css/intro/Portfolio.module.css';

import React, { useRef, useEffect } from 'react';

function Portfolio(){
    
    // Reference to the portfolio element
    const portfolioRef = useRef();

    // Scroll event handler
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (portfolioRef.current) {
            portfolioRef.current.scrollLeft = scrollY*2;
        }
    };

    // Event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

    // Unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, []);
    
    return (
        <div className={`${styles.portfolioMainDiv} mainText`}>
            <div className={styles.scrollContainer} ref={portfolioRef}>
                <div className={styles.Margin}></div>
                <h1 className={styles.Portfolio}>Portfolio</h1> 
            </div>
        </div>
    )
}

export default Portfolio;