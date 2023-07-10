import React, { useState, useRef } from 'react';
import styles from "../pages/foretag/Foretag.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { motion } from "framer-motion";

function Form() {
    return (
        <div style={{flexBasis:"50%"}}>
            {/* Form with username and password */}
            <form>
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
                <label>
                    Vad är du intresserad av?
                    <input type="checkbox" value="Mental träning" />
                </label>
                <label>
                    Meddelande:
                    <textarea name="message" />
                </label>
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
                // alignItems: "center",
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