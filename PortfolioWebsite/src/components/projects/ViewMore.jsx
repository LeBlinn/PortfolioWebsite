import styles from '../../css/projects/ViewMore.module.css';
import downArrow from '../../assets/down-arrow.svg';

function ViewMore(){
    
    return (
        <div className={styles.viewMoreMainDiv}>
                {/*A button for viewing more projects.... One day*/}
                <div className={`${styles.viewMoreText} mainText`}>More Projects</div>
                <img className={styles.downArrow} src={downArrow} alt='Down Arrow'></img>
            </div>
    )
}

export default ViewMore;