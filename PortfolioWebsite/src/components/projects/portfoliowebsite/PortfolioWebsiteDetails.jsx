import React, { useContext } from 'react'
import { StateContext } from '../../../StateContext.jsx'

import styles from '../../../css/projects/portfoliowebsite/PortfolioWebsiteDetails.module.css';
import projectImage from '../../../assets/projectImage.png';


function PortfolioWebsiteDetails(){

    const { value, setValue }= useContext(StateContext);

    function close(){
        //set up animation here
        setValue('A');
        return;
    }
    
    return (
        <div className={styles.portfolioWebsiteDetailsMainDiv}>

            <div className={styles.overlay}>
                <div className={styles.close} onClick={close}>X</div>
            </div>

            <div className={styles.content}>
                <div className={styles.topSection}>
                    <div className={styles.lhs}>
                        <div className={`${styles.type} subText`}>Web Development</div>
                        <div className={`${styles.name} mainText`}>
                            Portfolio Website
                        </div>
                        <div className={styles.spacer}></div>
                        <div className={`${styles.description} text`}>
                            This website was made in order to showcase my projects and skills. 
                            It was made using the React framework and is self-hosted.
                        </div>
                    </div>
                    <div className={styles.rhs}>
                        <div className={`${styles.tech} text`}>Technologies</div>
                        <div className={`${styles.projectpage} text`}>Open Project (arrow here)</div>
                    </div>
                </div>
                <div className={styles.bottomSection}>
                    <img className={styles.img} src={projectImage} alt='projectImage' />
                </div>
            </div>
        </div>
    )
}

export default PortfolioWebsiteDetails;