import styles from '../../css/Projects.module.css';

import React, { useRef, useEffect } from 'react';

import SingularProject from './SingularProject';
import ViewMore from './ViewMore';


function Projects(){
    
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
        <div>
            <div className={styles.mainDiv}>
                <div className={styles.title}>Latest Projects</div>
                <div className={styles.titleLine}></div>
                <div className={styles.spacer}></div>
                <div className={styles.projectsContainer}>
                    {/*I need to add functionality for more projects, but this will do for now*/}
                    <SingularProject />
                    <SingularProject />
                </div>
            </div>
            <ViewMore /> {/*I added an extra div due to lazyness, definitely not best practice*/}
        </div>
    )
}

export default Projects;