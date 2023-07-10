import React, { useState, useRef } from 'react';
import styles from "../pages/foretag/Foretag.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { motion } from "framer-motion";

function WorkshopCard(props) {
    return (
        <motion.div
            className={styles.card}
            whileHover={{
                boxShadow: "0px 0px 10px 0px var(--shadow)",
            }}
        >
            <motion.img 
                src="/hjarnvilja/stjarna-cyan.png"
                whileTap={{
                    scale: 0.9,
                }}
            ></motion.img>
            {/* <h2 style={{textAlign:"center"}}>{props.title}</h2> */}
            <hr/>
            <p>{props.description}</p>
        </motion.div>
    )
}

export default function Workshops() {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales nec neque cursus sodales. Integer sit amet consectetur est. Pellentesque quis libero sapien."
    return (
        <motion.div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // cursor: "pointer",
        }}
        >
            <h1>Workshops</h1>
            <div className={styles.row}>
                <WorkshopCard title="Workshop 1" description={description}/>
                <WorkshopCard title="Workshop 2" description={description}/>
                <WorkshopCard title="Workshop 3" description={description}/>
            </div>
        </motion.div>
    )

}