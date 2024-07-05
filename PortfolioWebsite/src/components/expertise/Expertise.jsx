import React, { useEffect, useRef } from 'react';

import styles from '../../css/expertise/Expertise.module.css';
import '../../css/Animations.css';

import processor from '../../assets/processor.svg';
import microcontroller from '../../assets/microcontroller.svg';
import monitor from '../../assets/monitor.svg';

function Expertise() {
    const box1ref = useRef(null);
    const box2ref = useRef(null);
    const box3ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && window.matchMedia('(min-width: 951px)').matches) {
                    let classNameToAdd = 'SlideInFade';
                    if (entry.target === box2ref.current) {
                        classNameToAdd = 'SlideInFadeDelay1';
                    } else if (entry.target === box3ref.current) {
                        classNameToAdd = 'SlideInFadeDelay2';
                    }
                    entry.target.classList.add(classNameToAdd);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        if (box1ref.current) {
            observer.observe(box1ref.current);
        }
        if (box2ref.current) {
            observer.observe(box2ref.current);
        }
        if (box3ref.current) {
            observer.observe(box3ref.current);
        }

        return () => {
            if (box1ref.current) {
                observer.unobserve(box1ref.current);
            }
            if (box2ref.current) {
                observer.unobserve(box2ref.current);
            }
            if (box3ref.current) {
                observer.unobserve(box3ref.current);
            }
        };
    }, []);

    return (
        <div className={styles.mainDiv}>
            <div className={`${styles.title} mainText`}>
                My Expertise
            </div>
            <div className={styles.boxes}>
                <div className={styles.box1} ref={box1ref}>
                    <div className={styles.boxesTop}>
                        <img src={processor}></img>
                        <h2 className='mainText'>FPGA Development</h2>
                    </div>
                    <p className='text'>Experienced in FPGA Design. Xilinx, Vivado, Multisim, VHDL, System Verilog</p>
                </div>
                <div className={styles.box2} ref={box2ref}>
                    <div className={styles.boxesTop}>
                        <img src={microcontroller}></img>
                        <h2 className='mainText'>Embedded Systems</h2>
                    </div>
                    <p className='text'>Skilled in embedded development. Using microcontrollers, such as<br/>STM32, Arduino</p>
                </div>
                <div className={styles.box3} ref={box3ref}>
                    <div className={styles.boxesTop}>
                        <img src={monitor}></img>
                        <h2 className='mainText'>Software Developper</h2>
                    </div>
                    <p className='text'>Knowledgeable about high level languages such as Java, C#, python,
                        <br/>and<br/>
                        Low level languages such as C, C+
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Expertise;