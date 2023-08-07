import React, { useState, useRef } from 'react';
import styles from "../pages/foretag/Foretag.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { motion } from "framer-motion";

function Form() {
    return (
        <div style={{flexBasis:"50%"}}>
            {/* Form with username and password */}
            <form className={styles.form}>
                <label>
                    Namn:
                    <input type="text" name="name" />
                </label>
                
                <label>
                    Företag:
                    <input type="text" name="foretag" />
                </label>
                <label>
                    E-post:
                    <input type="text" name="email" />
                </label>
                <label>
                    Telefon:
                    <input type="text" name="phone" />
                </label>
                <div className={styles.own_row_label}>
                    Vad är du intresserad av?
                    <div>
                        <label htmlFor="workshops">Workshops:</label>
                        <input type="checkbox" id="workshops" name="workshops" />
                    </div>
                    <div>
                        <label htmlFor="forelasningar">Föreläsningar:</label>
                        <input type="checkbox" id="forelasningar" name="forelasningar" />
                    </div>
                    <div>
                        <label htmlFor="utbildningar">Utbildningar:</label>
                        <input type="checkbox" id="utbildningar" name="utbildningar" />
                    </div>
                </div>
                <label className={styles.own_row_label}>
                    Meddelande:
                    <textarea name="message" />
                </label>
                <motion.input 
                    whileHover={{ scale: 1.025 }}
                type="submit" value="Skicka" />
            </form>
        </div>
    )
}

export default function FormsSection() {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales nec neque cursus sodales. Integer sit amet consectetur est. Pellentesque quis libero sapien."
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h1 style={{textAlign:"center"}}>Kursportal | Intresseanmälan</h1>
            <div className={styles.row}>
                <p style={{flexBasis:"50%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Form />
            </div>
        </div>
    )

}