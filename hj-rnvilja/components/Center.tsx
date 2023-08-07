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
                    src="/hjarnvilja/maria-hoppar.jpg"
                    alt="Hjärnvilja"
                    className={styles.centerImage}
                />
                {/* <div className={styles.buttonSection}>
                    <SwitchButton rot="180" />
                    <SwitchButton rot="0" />
                </div> */}
                <span className={styles.centerImageSpan}>
                    {/* Hjärnvilja arbetar med att få företag och föreningar att sträva mot ett gemensamt mål och må bra på vägen dit. Genom samtal, inspirerande workshops och insiktsfulla övningar skapas lust, engagemang och välmående. Bättre resultat och mer energi får ni på köpet. Hjärnvilja tar sig även an enskilda individer som vill utvecklas inom sin sport eller i sitt yrkesliv. */}
                    Hjärnvilja grundades genom förälskelsen till mental träning. Att kunna guida människor till prestationer de inte själva trodde var möjliga är en oslagbar känsla. Hjärnviljas ledstjärna är att göra mental träning så lättillgänglig som möjligt för alla, med enkla bilder, mycket energi och engagemang skapas förutsättningar för att du ska kunna bli ditt bästa jag.
                    <br/><br/>
                    Oavsett sammanhang kan alla ha användning av den mentala träningens övningar och verktyg. Vi kommer inte bara prestera bättre, vi får välmående, energi, fokus och självtillit på köpet.
                    <br/><br/>
                    Hjärnvilja erbjuder en webbkurs i grundläggande mental träning som på ett enkelt och pedagogiskt vis skapar förståelse för hur mental träning kan användas. Även individuell coaching erbjuds. Hjärnvilja har även föreläsningar och workshops för lag.
                </span>
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