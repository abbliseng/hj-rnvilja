import React, { useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { motion } from "framer-motion";

function WorkshopCard({styles, description, title, img, t = "foretag"}) {

    const s = title == "Föreläsningar" ? {
        borderRadius: "50%",
        aspectRatio: "1/1",
    } : {}

    return (
        <motion.div
            className={styles.card}
            whileHover={{
                boxShadow: "0px 0px 10px 0px var(--shadow)",
                outline: `5px solid var(--${t})`,
                scale: 1.025,
            }}
        >
            <motion.img 
                src={img}
                whileTap={{ scale: 0.9 }}
                style={s}
            ></motion.img>
            <h2 style={{
                textAlign:"center",
                fontFamily: "Oswald",
                paddingTop: "15px"
            }}>{title}</h2>
            <hr/>
            <p style={{paddingBottom: "15px"}}>{description}</p>
            <motion.button whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.9 }}>Boka här!</motion.button>
        </motion.div>
    )
}

export default function Workshops({
    styles,
    t = "foretag"
}) {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales nec neque cursus sodales. Integer sit amet consectetur est. Pellentesque quis libero sapien."
    const img_src = t === "foretag" ? "/hjarnvilja/stjarna-cyan.png" : "/hjarnvilja/stjarna-orange.png"
    return (
        <motion.div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}
        >
            <h1>Erbjudanden</h1>
            <div className={styles.row}
                style={{
                    flexWrap: "wrap",
                }}
            >
                <WorkshopCard
                    styles={styles}
                    title="Workshop - Citronen"
                    description={"I denna workshop får vi chanson att möta våra känslor och ser om vi använder dessa på ett uppbyggande vis. Vad händer i laget när det går dåligt? Hur pratar vi med och om varandra inför och under ett tävlingstillfälle. Hur låter jag mina känslor påverka andra runt mig? Ofta kommer negativa känslor fram om vi verkligen vill vinna men ser chansen försvinna ifrån oss, skulle vi kunna hitta en kommunikation som gör oss starkare och ökar våra chanser att vända den nedåtgående spiralen?"}
                    img={"/hjarnvilja/drawn/citron.png"}
                    t = {t}
                />
                <WorkshopCard
                    styles={styles}
                    title="Workshop - Trädet"
                    description={"Självförtroende och självkänsla är två viktiga byggstenar i vårt liv och har stor påverkan på vårt mående. Men vad står dessa ord för, vad är det som skiljer dem åt och varför räcker det inte med bara den ena? I denna workshop går vi igenom begreppen och skapar lagets egna träd, med våra specifika styrkor och egenskaper. Det krävs mod att säga vad jag är bra på och vilka goda egenskaper jag har, därför blir denna övning lika mycket en individuell utmaning som en lagprestation. När övningen är slut har vi byggt trädet som symboliserar vårt lag."}
                    img={"/hjarnvilja/drawn/tradet.png"}
                    t = {t}
                />
                <WorkshopCard
                    styles={styles}
                    title="Föreläsningar"
                    description={"Hjärnviljas ledstjärna är att göra mental träning så lättillgänglig som möjligt för alla. Grundläggande övningar, verktyg och tankesätt förklaras med hjälp av enkla bilder och framförs med energi, engagemang och en gnutta humor. En föreläsning med Hjärnvilja skapar förutsättningar för att du ska kunna bli ditt bästa jag, både måendemässigt och inom det du önskar prestera i livet."}
                    img={"/hjarnvilja/maria-forelasning.jpg"}
                    t = {t}
                />
            </div>
        </motion.div>
    )

}