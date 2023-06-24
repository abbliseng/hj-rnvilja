import { motion } from "framer-motion";
import styles from '../styles/Section.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faVolleyball } from '@fortawesome/free-solid-svg-icons'

function Section(color: string = "#FFA500", icon, content) {
    const textVariants = {
        initial: { opacity: 0, height: "0%"},
        hover: { opacity: 1, height: "auto" },
    }
    const imgVariants = {
        // initial: { rotate: 0},
        // hover: { rotate: 90},
    }
    const containerVariants = {
        initial: { opacity: 0.999 },
        hover: { opacity: 1 },
    }

    return (
        <motion.button className={styles.container} whileHover="hover" initial="initial" variants={containerVariants}
            style={{ backgroundColor: color }}
        >
            {/* <motion.img
                src={img}
                alt="" className={styles.img}
                variants={imgVariants}
                transition={{ ease: "easeOut", duration: 1 }}
            /> */}
            <FontAwesomeIcon icon={icon} className={styles.img} />
            <motion.span 
                className={styles.span}
                variants={textVariants}
            >
                {content}
            </motion.span>
        </motion.button>
    )
}

function SportsSection() {
    const content = (
        <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac tincidunt augue. Praesent vehicula magna sed ante molestie, quis elementum erat malesuada. Vivamus eu aliquam felis. Phasellus nec turpis condimentum.
        </>
    )
    return Section("#E18727", faVolleyball, content)
}

function BusinessSection() {
    const content = (
        <>
            Lorem ipsum dolor sit amet, consectetur adipiscing. Praesent vehicula magna sed ante molestie, quis elementum erat malesuada. Vivamus eu aliquam felis. Phasellus nec turpis.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing. Praesent vehicula magna sed ante molestie, quis elementum erat malesuada. Vivamus eu aliquam felis. Phasellus nec turpis.
            Lorem ipsum dolor sit amet, consectetur adipiscing. Praesent vehicula magna sed ante molestie, quis elementum erat malesuada. Vivamus eu aliquam felis. Phasellus nec turpis.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing. Praesent vehicula magna sed ante molestie, quis elementum erat malesuada. Vivamus eu aliquam felis. Phasellus nec turpis.
        </>
    )
    return Section("#00AACF", faHandshake, content)
}

export { Section, SportsSection, BusinessSection }