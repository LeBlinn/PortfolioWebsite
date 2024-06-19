import styles from '../css/Width.module.css';

function footer({ children }){
    return (
        <div className={styles.widthDiv}>
            {children}
        </div>
    )
}

export default footer;