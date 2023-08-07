import React, { useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { motion } from "framer-motion";

function WorkshopCard({styles, description, title, img}) {
    return (
        <motion.div
            className={styles.card}
            whileHover={{
                boxShadow: "0px 0px 10px 0px var(--shadow)",
            }}
        >
            <motion.img 
                src={img}
                whileTap={{
                    scale: 0.9,
                }}
            ></motion.img>
            {/* <h2 style={{textAlign:"center"}}>{title}</h2> */}
            <hr/>
            <p>{description}</p>
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
            // cursor: "pointer",
        }}
        >
            <h1>Workshops</h1>
            <div className={styles.row}>
                <WorkshopCard styles={styles} title="Workshop 1" description={description} img={img_src}/>
                <WorkshopCard styles={styles} title="Workshop 2" description={description} img={img_src}/>
                <WorkshopCard styles={styles} title="Workshop 3" description={description} img={img_src}/>
            </div>
        </motion.div>
    )

}