import styles from '../css/Header.module.css';


function Header(){
    return (
        <div className={styles.mainDiv}>
            <div className={styles.lhs}>
                <div className={styles.name}>
                    Josh Blinn
                    <div className={styles.subname}>Computer Engineering student @UOttawa</div>
                </div>
                <div className={styles.spacer}></div>
                <div className={styles.description}>
                    A student trying to improve himself<br />
                    by doing all sorts of personal projects.
                </div>
            </div>
            <div className={styles.rhs}>
                <div className={styles.contact}>
                    {/*<button>Contact</button> -- I'm commenting this because idk if I want it*/}
                </div>
            </div>
        </div>
    )
}

export default Header;