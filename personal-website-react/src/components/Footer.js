import styles from '../css/Footer.module.css';
import Contact from './Contact';

function footer(){
    return (
        <div>
            <Contact />
            <div className={styles.spacer}></div>
            <div className={styles.mainDiv}>
                developed by Josh Blinn © 2024. All Rights Reserved.
            </div>
        </div>
    )
}

export default footer;