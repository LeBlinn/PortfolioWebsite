import styles from '../../css/intro/Header.module.css';


function Header(){
    return (
        <div className={styles.HeaderMainDiv}>
                <div className={styles.name}>
                    Josh Blinn
                </div>
                <div className={styles.subname}>Computer Engineering student @UOttawa</div>
                <div className={styles.spacer}></div>
                <div className={styles.description}>
                    A student trying to improve himself<br />
                    by doing all sorts of personal projects.
                </div>
        </div>
    )
}

export default Header;