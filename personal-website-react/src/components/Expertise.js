import styles from '../css/Expertise.module.css';
import vite from '../imgs/svgs/vite.svg';

function Expertise(){
    return (
        <div className={styles.mainDiv}>
            <div className={styles.title}>
                My Expertise
            </div>
            <div className={styles.boxes}>
                <div className={styles.box1}>
                    <div className={styles.boxesTop}>
                        <img src={vite}></img>
                        <h2>FPGA Development</h2>
                    </div>
                    <p>Experienced in FPGA Design. Xilinx, Vivado, Multisim, VHDL, System Verilog</p>
                </div>
                <div className={styles.box2}>
                    <div className={styles.boxesTop}>
                        <img src={vite}></img>
                        <h2>Embedded Systems</h2>
                    </div>
                    <p>Skilled in embedded development. Using microcontrollers, such as<br/>STM32, Arduino</p>
                </div>
                <div className={styles.box3}>
                    <div className={styles.boxesTop}>
                        <img src={vite}></img>
                        <h2>Software Developper</h2>
                    </div>
                    <p>Knowledgeable about high level languages such as Java, C#, python,
                        <br/>and<br/>
                        Low level languages such as C, C+
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Expertise;