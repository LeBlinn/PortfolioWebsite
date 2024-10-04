import styles from '../../css/intro/Header.module.css';
import '../../css/Animations.css';

function Header(){
    return (
        <div className={styles.HeaderMainDiv}>
            <div className={`${styles.opacity} SlideInFade`}>
                <div className={`${styles.name} mainText`}>
                    Josh Blinn
                </div>
                <div className={`${styles.subname} subText`}>Computer Engineering student @UOttawa</div>
            </div>
                <div className={styles.spacer}></div>
                <div className={`${styles.description} text SlideInFadeDelay3`}>
                    A student trying to improve himself<br />
                    by doing all sorts of personal projects.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    Temporary Note for possible onlookers ~ Website is still getting worked on.
                </div>
        </div>
    )
}

export default Header;