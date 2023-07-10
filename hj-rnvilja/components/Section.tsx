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
            Att vara sitt absolut bästa jag när det väl gäller är en konst. Många parametrar ska stämma för att vi ska hamna överst på prispallen. Att orka hela vägen fram till målet går enklare om vägen dit känns lärorik, utvecklande och guldkantad. Visst kan vi slita oss fram till ett guld, slå på oss själva och må dåligt under tiden. Men genom den mentala träningen skapar vi välmående genom att jobba för kroppen snarare än emot den. 
            <br/><br/>
            Tillsammans arbetar vi bort låsningar, ofördelaktiga mönster, ältande tankar. Istället lär du dig att lägga fokus på rätt moment, hur du bibehåller din energi och vad som skapar välmående för just dig. Allt för att du ska klara av hög inre press, förväntningar utifrån och kritiska moment när det verkligen gäller.
            <br/><br/>
            Hjärnvilja erbjuder en webbkurs i grundläggande mental träning som på ett enkelt och pedagogiskt vis skapar förståelse för hur mental träning kan användas. Även individuell coaching erbjuds. Hjärnvilja har även föreläsningar och workshops för lag.
            <br/><br/>
            <span style={{fontStyle:"italic"}}>
                Tryck för att läsa mer
            </span>
        </>
    )
    return Section("var(--idrott)", faVolleyball, content, "75%", "/idrott")
}

function BusinessSection() {
    const content = (
        <>
            Ledarskap är en av Hjärnviljas stora passioner. Det finns alltid något nytt att lära och som ledare behöver du ofrånkomligen ta svåra beslut, skapa samsyn bland människor med olika viljor och samtidigt hålla ihop dig själv, även när det stormar som mest. Hjärnvilja kan bistå i alla olika lägen, både i förändring, utveckling, krishantering eller som utbildare och inspiratör. 
            <br/><br/>
            Hjärnviljas filosofi är att skapa ledare som är trygga, insiktsfulla, nyfikna och som vet när de behövs och när de kan backa. Lika viktigt som att ta tag i saker när det verkligen gäller, är det att kunna ge gruppen utrymme att försöka på egen hand. Det skapar självförtroende hos medarbetarna och tillit till ledaren. 
            <br/><br/>
            Hjärnvilja erbjuder e-kurser, utbildningar, workshops samt individuell coaching av ledare. Välj från det befintliga utbudet eller skräddarsy efter era specifika behov.
            <br/><br/>
            <span style={{fontStyle:"italic"}}>
                Tryck för att läsa mer
            </span>
        </>
    )
    return Section("var(--foretag)", faHandshake, content, "-75%", "/foretag")
}

export { Section, SportsSection, BusinessSection }