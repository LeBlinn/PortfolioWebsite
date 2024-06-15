import styles from '../css/Skills.module.css';


function Skills(){
    return (
        <div className={styles.mainDiv}>
            <div className={styles.lhs}>
                <div className={styles.progLanguages}>
                    <h1>Programming Languages</h1>
                    <ul>
                        <li>
                            <p>C</p>
                        </li>
                        <li>
                            <p>C++</p>
                        </li>
                        <li>
                            <p>Java</p>
                        </li>
                        <li>
                            <p>Python</p>
                        </li>
                        <li>
                            <p>Javascript</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.spacer}></div>
                <div className={styles.hdLanguages}>
                    <h1>Hardware Description Languages</h1>
                    <ul>
                        <li>
                            <p>System Verilog</p>
                        </li>
                        <li>
                            <p>VHDL</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.spacer}></div>
                <div className={styles.education}>
                    <h1>Education</h1>
                    <ul>
                        <li>
                            <h2>Bachelor's in Computer engineering</h2>
                            <p>2021 - 2025</p>
                        </li>
                    </ul> 
                </div>
                <div className={styles.spacer}></div>
                <div className={styles.experience}>
                    <h1>Professional Experience</h1>
                    <ul>
                        <p>None :(</p>
                    </ul>
                </div>
            </div>
            <div className={styles.rhs}>
                <div className={styles.technologies}>
                    <h1>Technologies</h1>
                    <ul>
                        <li>
                            <h2>FPGA development</h2>
                            <p>Quartus, Vivado, Multisim</p>
                        </li>
                        <li>
                            <h2>Microcontroller development</h2>
                            <p>STM, Arduino</p>
                        </li>
                        <li>
                            <h2>Operating Systems</h2>
                            <p>Windows, Linux (Debian, Ubuntu, RHEL)</p>
                        </li>
                        <li>
                            <h2>Source Control</h2>
                            <p>Git, GitHub</p>
                        </li>
                        <li>
                            <h2>Website development</h2>
                            <p>HTML, CSS, JS, React</p>
                        </li>
                        <li>
                            <h2>Mobile App development</h2>
                            <p>Android Studio</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;