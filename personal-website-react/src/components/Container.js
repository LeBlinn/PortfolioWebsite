import styles from '../css/Container.module.css';


function Container(){
    return (
        <div className={styles.mainDiv}>
            <div className={styles.lhs}>
                <h1>job stuff</h1> 
            </div>
            <div className={styles.rhs}>
                <h1>hi</h1>
            </div>
        </div>
    )
}

export default Container;