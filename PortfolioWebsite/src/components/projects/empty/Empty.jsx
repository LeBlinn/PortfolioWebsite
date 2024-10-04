import React, { useContext } from 'react'
import { StateContext } from '../../../StateContext.jsx'

import styles from '../../../css/projects/empty/Empty.module.css';
import projectImage from '../../../assets/Empty.png';

function Empty(){
    
    const { value, setValue }= useContext(StateContext);

    function handleClick() {
        //set up animation here
        //should never run anyways
        setValue('B');
        return;
    }

    return (
        <div className={styles.emptyMainDiv}>
            <div className={styles.lhs}>
                <div className={`${styles.name} mainText`}>Empty Project</div>
                <img className={styles.img} src={projectImage} alt='projectImage' />
            </div>
            <div className={styles.rhs}>
                <div className={`${styles.paragraph} text`}>
                    Just empty space while I work to add extra projects to my website.
                </div>
            </div>
        </div>
    )
}

export default Empty;