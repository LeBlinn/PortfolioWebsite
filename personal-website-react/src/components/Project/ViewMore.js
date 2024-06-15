import styles from '../../css/ViewMore.module.css';
import downArrow from '../../imgs/svgs/down-arrow.svg';

function ViewMore(){
    
    return (
        <div className={styles.MainDiv}>
                {/*A button for viewing more projects.... One day*/}
                <div className={styles.viewMoreText}>More Projects</div>
                <img className={styles.downArrow} src={downArrow} alt='Down Arrow'></img>
            </div>
    )
}

export default ViewMore;