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


import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

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

function SwiperReferences() {
  return (
    <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        pagination={true}
        modules={[EffectCreative, Pagination]}
        className="mySwiper3"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
  )
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
        <div style={{
          width: "100%",
          minHeight: "300px",
          position: "relative",
        }}>
          <SwiperReferences />
        </div>
        <div className={styles.break}></div>
        <div
          className={styles.row}
          style={{
            // overflow: "scroll",
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
