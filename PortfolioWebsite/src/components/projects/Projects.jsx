import React, { useEffect, useRef, useState, } from 'react';
import styles from '../../css/projects/Projects.module.css';
import '../../css/Animations.css';
import ViewMore from './ViewMore.jsx';

import PortfolioWebsite from './portfoliowebsite/PortfolioWebsite.jsx';
import Empty from './empty/Empty.jsx';



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

    const [ state, setState ] = useState('3');

    const getSize = useRef(null);

    const ViewMoreClickRender = () => {
        //adds all projects on button click
        switch (state) {
            case '0': {
                setTimeout(() => {setState('1')}, 250);
                return (
                    <div className='marginIncrease'/>
                );
            }
            case '1': {
                return (
                    <div className='opacityZero Appeared'>
                        <div className={styles.line} />
                        <Empty />
                    </div>
                );
            }
            case '2': { //current animation not working
                setTimeout(() => {setState('3')}, 250);
                return (
                    <div className='Disappeared'>
                        <div className={styles.line} />
                        <Empty />
                    </div>
                );
            }
            case '3': {
                return (
                    <div className='marginDecrease' />
                );
            }
            default: 
                return (null)
        }
    }
    
    return (
        <div>
            <div className={styles.mainDiv} ref={Projectsref}>
                <div ref={getSize}>
                    <div className={`${styles.title} mainText`}>Latest Projects</div>
                    <div className={styles.titleLine}></div>
                </div>
                <div className={styles.spacer}></div>
                <div className={styles.projectsContainer}>
                    {/*I need to add functionality for more projects, but this will do for now*/}
                    <PortfolioWebsite />
                    <div className={styles.line} />
                    <Empty />
                    {ViewMoreClickRender()} 
                </div>
            </div>
            <div onClick={() => {
                console.log('ViewMore Clicked');
                if(state == '1') {
                    setState('2');
                } else if (state == '3') {
                    setState('0');
                }
                }}><ViewMore state={state}/>
            </div> {/*I added an extra div due to lazyness, definitely not best practice*/}
        </div>
    )
}

export default Projects;