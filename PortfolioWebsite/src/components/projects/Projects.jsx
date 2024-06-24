import React, { useEffect, useRef } from 'react';
import styles from '../../css/projects/Projects.module.css';

import PortfolioWebsite from './portfoliowebsite/PortfolioWebsite.jsx';
import ViewMore from './ViewMore.jsx';


function Projects(){

    const Projectsref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && window.matchMedia('(min-width: 951px)').matches) {
                    entry.target.classList.add('SlideInFadeHor');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 });

        if (Projectsref.current) {
            observer.observe(Projectsref.current);
        }

        return () => {
            if (Projectsref.current) {
                observer.unobserve(Projectsref.current);
            }
        };
    }, []);
    
    return (
        <div>
            <div className={styles.mainDiv} ref={Projectsref}>
                <div>
                    <div className={`${styles.title} mainText`}>Latest Projects</div>
                    <div className={styles.titleLine}></div>
                </div>
                <div className={styles.spacer}></div>
                <div className={styles.projectsContainer}>
                    {/*I need to add functionality for more projects, but this will do for now*/}
                    <PortfolioWebsite />
                    <PortfolioWebsite />
                    <PortfolioWebsite />
                    <PortfolioWebsite />
                </div>
            </div>
            <ViewMore /> {/*I added an extra div due to lazyness, definitely not best practice*/}
        </div>
    )
}

export default Projects;