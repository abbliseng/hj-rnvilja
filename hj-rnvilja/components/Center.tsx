import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from '../styles/Center.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Center() {
    return (
        <>
            <div
                className={styles.container}
            >
                <div className={styles.logoSection}>
                    <motion.img
                        animate={{
                            scale: [0.8, 1],
                            y: [-30, 0]
                        }}
                        transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
                        src="/hjarnviljaorange-transparent.png"
                        alt="Hjärnvilja"
                        className={styles.logo}
                    />
                </div>
                <div className={styles.arrows}>
                    <motion.img
                        className={styles.orange_1}
                        src="/hjarnvilja/arrows/orange-arrow-1.png"
                    />
                    <span className={styles.orange_1_span}>Mental träning</span>

                    <motion.img
                        className={styles.orange_2}
                        src="/hjarnvilja/arrows/orange-arrow-2.png"
                    />
                    <span className={styles.orange_2_span}>Idrottare?</span>
                    
                    <motion.img
                        className={styles.blue_1}
                        src="/hjarnvilja/arrows/blue-arrow-1.png"
                    />
                    <span className={styles.blue_1_span}>Företag?</span>
                    
                    <motion.img
                        className={styles.blue_2}
                        src="/hjarnvilja/arrows/blue-arrow-2.png"
                    />
                    <span className={styles.blue_2_span}>Ledarskap</span>
                    
                    <motion.img
                        className={styles.magenta_1}
                        src="/hjarnvilja/arrows/magenta-arrow-1.png"
                    />
                    <span className={styles.magenta_1_span}>Shoppingsugen?</span>
                </div>
            </div>
        </>
    )
}

function SwitchButton(props) {
    return (
        <motion.button
            className={styles.button}
            whileHover={{
                color: "#ED0C6E",   
            }}
        >
            <FontAwesomeIcon icon={faArrowRight} style={{
                transform: `rotate(${props.rot}deg)`,
                color: "inherit"
            }}/>
            {/* <i
                style={{
                    transform: `rotate(${props.rot}deg)`,
                }}
                src="/arrow.ico"
            ></i> */}
        </motion.button>
    )
}