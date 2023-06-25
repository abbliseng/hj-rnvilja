import React, { useState, useRef } from 'react';
import styles from '../styles/ShopButton.module.css';

import { motion } from "framer-motion";

export default function ShopButton() {
    return (
        <motion.div 
            className={styles.shopButton}
            initial={{ y: 70 }}
            whileHover={{ y: 10 }}
            onClick={() => {
                window.open("/shop", "_self")
            }}
        >
            <h2>SHOP</h2>
            <span>Lorem ipsum dolor sit amet, pellentesque quis libero sapien :^)</span>
        </motion.div>
    )

}