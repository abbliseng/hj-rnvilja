import React, { useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { motion } from "framer-motion";

function Form({ styles }) {
    return (
        <div className={styles.form_container}>
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

export default function FormsSection({ styles }) {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales nec neque cursus sodales. Integer sit amet consectetur est. Pellentesque quis libero sapien."
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h1 style={{ textAlign: "center" }}>Vill du veta mer eller boka något?</h1>
            <div className={styles.row}
                style={{
                    flexWrap: "wrap",
                }}
            >
                {/* <p 
                    // className={styles.form_container}
                    style={{
                        backgroundColor: "var(--bg-light)",
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom: "15px",
                        maxWidth: "1000px",
                        width: "100%",
                        // make text selectable
                        userSelect: "text",
                    }}
                >
                    Hör gärna av dig till mig via mail (maria@hjarnvilja.se) om du har några frågor om mina tjänster! 
                    Om du är företagare och önskar en offert så kan du antingen specificera dina önskemål i meddelanderutan eller lämna telenummer/e-mail så hör jag av mig så fort jag kan!
                </p> */}
                {/* Image */}
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src="/hjarnvilja/maria-gullig.jpg"
                        alt="Brain"
                        style={{
                            // width: "100%",
                            maxWidth: "400px",
                            borderRadius: "50%",
                            aspectRatio: "1/1",
                            objectFit: "cover",
                        }}
                    />
                </div>
                {/* Onclick open mail */}
                <motion.button
                    onClick={() => window.open("mailto:maria@hjarnvilja.se")}
                    style={{
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom: "15px",
                        marginTop: "25px",
                            maxWidth: "500px",
                            cursor: "pointer",
                    }}
                    whileHover={{ scale: 1.025 }}
                >
                    Kontakta mig
                </motion.button>
                {/* <Form styles={styles} /> */}
            </div>
        </div>
    )

}