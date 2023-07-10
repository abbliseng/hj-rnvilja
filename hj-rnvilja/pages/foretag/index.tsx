import styles from "./Foretag.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpaghettiMonsterFlying,
  faImage,
  faWandMagicSparkles,
  faHippo,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Workshops from "../../components/Workshops";
import FormsSection from "../../components/FormsSection";
import { motion } from "framer-motion";

function SponsorLogo(props) {
  return (
    <motion.div
        whileHover={{
            scale: 1.1,
        }}
    >
      <FontAwesomeIcon
        color="var(--foretag)"
        icon={props.icon}
        style={{ width: "40px" }}
      ></FontAwesomeIcon>
    </motion.div>
  );
}

export default function BusinessPage({}) {
  return (
    <main className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <h1 style={{ width: "100%", textAlign: "center" }}>Om mig / Företag</h1>
        <div className={styles.row}></div>
        <div className={styles.break}></div>
        <h1>Referenser</h1>
        <div className={styles.row}></div>
        <div className={styles.break}></div>
        <div
          className={styles.row}
          style={{
            width: "100%",
            // maxHeight: "100px",
            justifyContent: "space-evenly",
          }}
        >
        <SponsorLogo icon={faImage} />
        <SponsorLogo icon={faSpaghettiMonsterFlying} />
        <SponsorLogo icon={faWandMagicSparkles} />
        <SponsorLogo icon={faShoppingCart} />
        <SponsorLogo icon={faHippo} />
        </div>
        <div className={styles.break}></div>
        <h1>Utbildningar</h1>
        <div className={styles.break}></div>
        <Workshops />
        <div className={styles.break}></div>
        <FormsSection />
        {/* <h1>Kursportal / formulär</h1>
        <div className={styles.row}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sodales nec neque cursus sodales. Integer sit amet consectetur est.
            Pellentesque quis libero sapien.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sodales nec neque cursus sodales. Integer sit amet consectetur est.
            Pellentesque quis libero sapien. Lorem adipiscing elit. Maecenas
            sodales nec neque cursus sodales. Integer sit amet consectetur est.
            Pellentesque quis libero sapien. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Maecenas sodales nec neque cursus
            sodales. Integer sit amet consectetur est. Pellentesque quis libero
            sapien.
            <br />
            <br />
            Lorem ipsum dolor sit sodales nec neque cursus sodales. Integer sit
            amet consectetur est. Pellentesque quis libero sapien.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sodales nec neque cursus sodales. Integer sit amet consectetur est.
            Pellentesque quis libero sapien.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sodales nec neque cursus sodales. Integer sit amet consectetur est.
            Pellentesque quis libero sapien. Lorem adipiscing elit. Maecenas
            sodales nec neque cursus sodales. Integer sit amet consectetur est.
            Pellentesque quis libero sapien. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Maecenas sodales nec neque cursus
            sodales. Integer sit amet consectetur est. Pellentesque quis libero
            sapien.
            <br />
            <br />
            Lorem ipsum dolor sit sodales nec neque cursus sodales. Integer sit
            amet consectetur est. Pellentesque quis libero sapien.
          </p>
        </div> */}
      </div>
    </main>
  );
}
