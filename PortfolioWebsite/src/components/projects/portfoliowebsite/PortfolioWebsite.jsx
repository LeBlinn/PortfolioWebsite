import React, { useContext } from 'react'
import { StateContext } from '../../../StateContext.jsx'

import styles from '../../../css/projects/portfoliowebsite/PortfolioWebsite.module.css';
import projectImage from '../../../assets/projectImage.png';

function PortfolioWebsite(){
    
    const { value, setValue }= useContext(StateContext);

    function handleClick() {
        //set up animation here
        setValue('B');
        return;
    }

    return (
        <div className={styles.portfolioWebsiteMainDiv}>
            <div className={styles.lhs} onClick={handleClick}>
                <div className={`${styles.name} mainText`}>This Website</div>
                <img className={styles.img} src={projectImage} alt='projectImage' />
            </div>
            <div className={styles.rhs}>
                <div className={`${styles.paragraph} text`}>
                    A Website Made using the React framework during my spare time.
                </div>
            </div>
        </div>
    )
}

export default PortfolioWebsite;