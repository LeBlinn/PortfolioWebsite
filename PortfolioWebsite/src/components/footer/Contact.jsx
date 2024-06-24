import styles from '../../css/footer/Contact.module.css';


function Contact(){
    return (
        <div className={styles.contactMainDiv}>
            <div className={`${styles.header} mainText`}>
                Contact
            </div>
            <div className={`${styles.subWord} text`}>
                    I am currently looking for a job in any topic related to Computer Engineering.
                </div>
            <div className={styles.spacer}></div>
            <div className={`${styles.contacts} text`}>
                <ul>
                    <li><a href="https://www.linkedin.com/in/josh-blinn/">LinkedIn</a></li>
                    <li><a href="https://github.com/LeBlinn">GitHub</a></li>
                    <li><a href="mailto:joshyblinn@gmail.com">joshyblinn@gmail.com</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;