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
            style={{ backgroundColor: color, overflow: "hidden" }}
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
            <h3 style={{textAlign:"center"}}>
                Lagidrott – Individuell Idrott
            </h3>
            {/* Att vara sitt absolut bästa jag när det väl gäller är en konst. Det är många parametrar som ska stämma för att vi ska stå överst på prispallen. För att orka behöver vägen fram till prispallen kännas guldkantad och härlig. Visst kan vi slita oss fram till ett guld, men det är bättre att jobba för kroppen än emot den. Genom att synka ihop kropp och hjärna kan du som idrottare lägga fokus på rätt moment vid träning och tävling. Den mentala träningen hjälper dig/er att frigöra energi, kraft och bli ert bästa jag. */}
            <h4 style={{fontStyle:"italic", textAlign:"center", fontWeight:"400"}}>
                Tryck för att läsa mer
            </h4>
        </>
    )
    return Section("var(--idrott)", faVolleyball, content, "75%", "/idrott.html")
}

function BusinessSection() {
    const content = (
        <>
            <h3 className="title-font" style={{textAlign:"center"}}>Ledarskap – Organisationsutveckling</h3>
            {/* Ledarskap är en av Hjärnviljas stora passioner. Det finns alltid något nytt att lära inom ledarskap och Hjärnvilja kan finnas med oavsett om det gäller förändringsarbete, utveckling, krishantering eller som utbildare och inspiratör.
            <br/><br/>
            Som ledare behöver du ofrånkomligen ta svåra beslut, skapa samsyn bland människor med olika viljor och samtidigt hålla ihop dig själv, även när det stormar som mest. I de utmaningar du ställs inför som ledare kan Hjärnvilja vara en guide och en trygg punkt att bolla sina tankegångar med.
            <br/><br/>
            Hjärnvilja erbjuder e-kurser, utbildningar, workshops samt individuell coaching av ledare. Välj från det befintliga utbudet eller skräddarsy efter era specifika behov.   */}
            <h4 style={{fontStyle:"italic", textAlign:"center"}}>
                Tryck för att läsa mer
            </h4>
        </>
    )
    return Section("var(--foretag)", faHandshake, content, "-75%", "/foretag.html")
}

export { Section, SportsSection, BusinessSection }