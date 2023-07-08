import { motion } from "framer-motion";
import styles from '../styles/Section.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faVolleyball } from '@fortawesome/free-solid-svg-icons'

function Section(color: string = "#FFA500", icon, content, percentage: string = "50%", link: string = "/") {
    const textVariants = {
        initial: { opacity: 0, height: "0%"},
        hover: { opacity: 1, height: "auto" },
    }
    const containerVariants = {
        initial: { opacity: 0.999 },
        hover: { opacity: 1 },
    }
    const overlayVariants = {
        initial: { opacity: 0},
        click: { opacity: 1},
    }

    return (
        <motion.button
            className={styles.container}
            whileHover="hover"
            initial="initial"
            variants={containerVariants}
            style={{ backgroundColor: color }}
            whileTap="click"
            // when clicked route to the correct page
            onClick={() => {
                window.open(link, "_self")
            }}

        >
            {/* <motion.div
                className={styles.overlay}
                style={{ backgroundColor: color }}
                variants={overlayVariants}
                transition={{ ease: "easeOut", duration: 1 }}
            ></motion.div> */}
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
    return Section("var(--idrott)", faVolleyball, content, "75%", "/idrott")
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
    return Section("var(--foretag)", faHandshake, content, "-75%", "/foretag")
}

export { Section, SportsSection, BusinessSection }