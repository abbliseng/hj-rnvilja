import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from '../styles/Center.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Center() {
    return (
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
            <motion.div
                className={styles.imgSection}
                animate={{
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    // y: [0, -50]
                }}
                transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
            >
                <img
                    src="/hjarnvilja/maria-camo.jpg"
                    alt="Hjärnvilja"
                    className={styles.centerImage}
                />
                {/* <div className={styles.buttonSection}>
                    <SwitchButton rot="180" />
                    <SwitchButton rot="0" />
                </div> */}
                <span className={styles.centerImageSpan}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales nec neque cursus sodales. Integer sit amet consectetur est. Pellentesque quis libero sapien." - Someone smort</span>
            </motion.div>
        </div>
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