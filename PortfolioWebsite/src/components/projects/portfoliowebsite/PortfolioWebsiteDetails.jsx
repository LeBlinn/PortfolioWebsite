import React, { useContext } from 'react'
import { StateContext } from '../../../StateContext.jsx'

import styles from '../../../css/projects/portfoliowebsite/PortfolioWebsiteDetails.module.css';
import '../../../css/Animations.css'
import projectImage from '../../../assets/projectImage.png';
import leftArrow from '../../../assets/left-arrow.svg';


function PortfolioWebsiteDetails(){

    const { value, setValue }= useContext(StateContext);

    function close(){
        //set up animation here
        setValue('A');
        return;
    }

    function projectLink() {
        //opens new tab to project website
        window.open('https://github.com/LeBlinn/PortfolioWebsite', '_blank');
    }
    
    return (
        <div className={styles.portfolioWebsiteDetailsMainDiv}>

            <div className={styles.overlay}>
                <div className={styles.close}>
                    <div className={styles.circle} onClick={close}>
                        <img className={styles.leftArrow} src={leftArrow} alt='leftArrow'/>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.mobileDiv}>
                    <div className={`${styles.topTopSection} SlideInFade`}>
                        <div className={`${styles.type} subText`}>
                            Web Development
                        </div>
                        <div className={`${styles.name} mainText`}>
                            Portfolio Website
                        </div>
                    </div>
                    <div className={styles.topSection}>
                        <div className={styles.lhs}>
                            <div className={styles.spacer}></div>
                            <div className={`${styles.description} text`}>
                                This website was made in order to showcase my projects and skills. 
                                It was made using the React framework and is self-hosted using Nginx.<br/><br/>
                                I made sure to not use anything else in order to properly learn front end development fundamentals.
                            </div>
                        </div>
                        <div className={styles.rhs}>
                            <div className={`${styles.tech} text`}>
                                {/*I'm not sure I want to put anything here now*/}
                            </div>
                            <div className={`${styles.projectpage} text`} onClick={projectLink}>
                                Open Project&nbsp;&nbsp; <img className={styles.projectArrow} src={leftArrow} alt='leftArrow'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomSection}>
                    {/*This is where I post all project images*/}
                    <img className={styles.img} src={projectImage} alt='projectImage' />
                    <img className={styles.img} src={projectImage} alt='projectImage' />
                    <img className={styles.img} src={projectImage} alt='projectImage' />
                    <img className={styles.img} src={projectImage} alt='projectImage' />
                </div>
            </div>
        </div>
    )
}

export default PortfolioWebsiteDetails;