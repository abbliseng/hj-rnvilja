import React, { useState, useRef } from 'react';
import styles from '../styles/ShopButton.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { motion } from "framer-motion";

export default function ShopButton() {
    return (
        <motion.div 
            className={styles.shopButton}
            initial={{ y: 45 }}
            whileHover={{ y: 10 }}
            onClick={() => {
                window.open("/shop.html", "_self")
            }}
        >
            <FontAwesomeIcon icon={faShoppingCart} className={styles.img} />
            <h3>Workshops – Föreläsningar</h3>
        </motion.div>
    )

}