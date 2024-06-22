import styles from '../../css/footer/Footer.module.css';
import Contact from './Contact';

function footer(){
    return (
        <div className={styles.footerMainDiv}>
            <Contact />
            <div className={styles.footnote}>
                developed by Josh Blinn © 2024. All Rights Reserved.
            </div>
        </div>
    )
}

export default footer;