import styles from '../../css/intro/Intro.module.css';
import Header from './Header.jsx';
import Portfolio from './Portfolio.jsx';

function Intro(){
    return (
        <div className={styles.IntroMainDiv}>
            <Header className='SlideInFade'/>
            <Portfolio /> {/*might scrap portfolio*/}
        </div>
    )
}

export default Intro;