import React, { useEffect, useRef } from 'react';
import styles from '../../css/projects/ViewMore.module.css';
import downArrow from '../../assets/down-arrow.svg';
import '../../css/Animations.css';

function ViewMore({ state }){
    
    const arrow = useRef(null);

    useEffect(() => {
        if (state === '2' || state === '3') {
            if (arrow.current) {
                arrow.current.classList.add('RotateDown');
            }
        } else {
            if (arrow.current) {
                arrow.current.classList.remove('RotateDown');
            }
        }
    }, [state]); // This effect depends on `state` and runs whenever `state` changes

    return (
        <div className={styles.viewMoreMainDiv}>
            <div className={`${styles.viewMoreText} mainText`}>More Projects</div>
            <img className={styles.downArrow} src={downArrow} alt='Down Arrow' ref={arrow}></img>
        </div>
    )
}

export default ViewMore;