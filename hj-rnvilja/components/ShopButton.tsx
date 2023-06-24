import React, { useState, useRef } from 'react';
import styles from '../styles/ShopButton.module.css';

import { motion } from "framer-motion";

export default function ShopButton() {
    // const [isHovering, setIsHovering] = useState(false);

    // const handleMouseOver = () => {
    //     setIsHovering(true);
    // }

    // const handleMouseOut = () => {
    //     setIsHovering(false);
    // }

    return (
        <motion.div 
            className={styles.shopButton}
            initial={{ y: 70 }}
            whileHover={{ y: 10 }}
            // transition={{ duration: 0.25 }}
        >
            <h2>SHOP</h2>
            <span>Lorem ipsum dolor sit amet, pellentesque quis libero sapien :^)</span>
        </motion.div>
    )

}