import styles from './Shop.module.scss'
import { motion } from "framer-motion";

type Product = {
    name: string,
    price?: number,
    description?: string,
    image?: string,
    link?: string,
}

function ProductCard({
    name,
    price = 0,
    description = "",
    image = "",
    link = "/",
}: Product) {
    return (
        <motion.div
        
        whileHover={{
            boxShadow: "0px 0px 10px 0px var(--shadow)",
            // outline: `5px solid var(--shop)`,
            scale: 1.025,
        }}
            className={styles.productCard}
        >
            <h2>{name}</h2>
        </motion.div>
    )
}

export default function ShopPage({}) {
    return (
        <main
            className={styles.container}
        >
            <h1>Shop</h1>
            <div className={styles.products}>
                <ProductCard
                    name="Utbildning -"
                />
                <ProductCard
                    name="Utbildning -"
                />
                <div className={styles.break}></div>
                <ProductCard
                    name="Workshop - Citronen"
                />
                <ProductCard
                    name="Workshop - Trädet"
                />
                <div className={styles.break}></div>
                <ProductCard
                    name="Föreläsning"
                />
            </div>
            <div className={styles.products}>
                <div className={styles.break}></div>
                <motion.button whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.95 }} className={styles.button}>Individuell coaching erbjuds</motion.button>
            </div>
        </main>
    )
}