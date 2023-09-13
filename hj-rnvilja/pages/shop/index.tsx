import styles from './Shop.module.scss'
import { motion } from "framer-motion";

type Product = {
    name: string,
    subtitle?: string,
    price?: number,
    description?: string,
    image?: string,
    link?: string,
    type?: string,
}

function ProductCard({
    name,
    subtitle = "",
    price = 0,
    description = "",
    image = "",
    link = "/",
    type = "shop",
}: Product) {
    return (
        <motion.div
        
        whileHover={{
            boxShadow: "0px 0px 10px 0px var(--shadow)",
            // outline: `5px solid var(--shop)`,
            scale: 1.025,
        }}
            className={styles.productCard}
            style={{
                backgroundColor: `var(--${type})`,
            }}
            onClick={() => window.open(link, "_blank")}
        >
            <div>
                <h2>{name}</h2>
                <span style={{fontStyle:"italic"}}>{subtitle}</span>
            </div>
            <div className={styles.centerAlign}>
                <span>{description}</span>
            </div>
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
                    name="Grundkurs i självledarskap"
                    type="foretag"
                    link='https://hjarnvilja.thrivecart.com/ledarskap-grundkurs/'
                    description='Mer information om kursen hittar du här'
                />
                <ProductCard
                    name="Grundkurs i mental träning"
                    subtitle='+ möjlighet till individuell coaching'
                    type="idrott"
                    link="https://hjarnvilja.thrivecart.com/mental-traning-grundkurs/"
                    description='Mer information om kursen hittar du här'
                />
                {/* <div className={styles.break}></div>
                <ProductCard
                    name="Workshop - Citronen"
                />
                <ProductCard
                    name="Workshop - Trädet"
                />
                <div className={styles.break}></div>
                <ProductCard
                    name="Föreläsning"
                /> */}
            </div>
            {/* <div className={styles.products}>
                <div className={styles.break}></div>
                <motion.button whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.95 }} className={styles.button}>Individuell coaching erbjuds</motion.button>
            </div> */}
        </main>
    )
}