import styles from '../../css/SingularProject.module.css';
import projectImage from '../../imgs/projectImage.png';

function SingularProject(){
    
    return (
        <div className={styles.mainDiv}>
            <div className={styles.lhs}>
                <div className={styles.name}>This Website</div>
                <img className={styles.img} src={projectImage} alt='projectImage'></img>
            </div>
            <div className={styles.rhs}>
                <div className={styles.paragraph}>
                    A Website Made using the React framework during my spare time.
                </div>
            </div>
        </div>
    )
}

export default SingularProject;