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

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards, EffectCoverflow } from "swiper/modules";

type Reference = {
  img: string,
  title: string,
  description: string,
}

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

type SwiperReferencesProps = {
  references: Reference[],
}

function SwiperReferences({ references }: SwiperReferencesProps) {
  return (
    <div className='swiper-wrapper'>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCards]}
        className="mySwiper"
      >
        {
          references.map((reference) => {
            return (
              <SwiperSlide key={reference.title}>
                <div className={styles.ref_card}>
                  <div className={styles.ref_card_text_section}>
                    <p className={styles.ref_card_text_title}>{reference.title}</p>
                    <p className={styles.ref_card_text_description}>{reference.description}</p>
                  </div>
                  <div className={styles.ref_card_img_section}>
                    <img className={styles.ref_card_img} src={reference.img} alt={reference.title} />
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default function BusinessPage({ }) {
  const references: Reference[] = [
    {
      img: "/hjarnvilja/idrott/sofie-gidlund.jpg",
      title: "Sofie Gidlund – Skidåkare f.d alpin tävlingsåkare",
      description: "Genom utvecklande samtal fyllda med massor av skratt, glädje och energi hjälpte Maria mig verkligen att förstå vem jag är och varför jag presterat som jag gjort. Trots att jag utövade en hyfsat okänd sport för henne engagerade hon sig på en gång och tog reda på allt hon behövde veta för att kunna hjälpa mig. Från start blev jag bemött med kärlek och omtänksamhet. Maria gav mig verktyg som hjälpte mig att förstå mitt tankesätt samt fick mig att uppskatta och vara nöjd med mig själv. Hon hjälpte mig alltså inte bara inom idrotten utan hjälpte mig även att växa som människa. Du fick mig att förstå vem jag är och vad jag vill göra. Så tack för att jag fick utforska hjärnans hemligheter med dig Maria!",
    },
    {
      img: "/hjarnvilja/idrott/EAV.jpg",
      title: "Ellinor Axelsson Vaughn – Skytte",
      description: "Det är tack vare Maria som jag lyckades ta mig till mitt första Paralympics fyra år tidigare än vad jag trodde var möjligt! Det är otroligt vad mycket Maria gjort för mig under de två år vi har jobbat tillsammans. Marias mentala coachning gjorde att jag under mitt första Paralympics kunde sätta personbästa, och främst av allt vända en tävling som började i katastrof till att avsluta fantastiskt bra! Utan mental träning och coachning hade jag inte tagit mig så här långt som jag gjort på bara något år! Det ska bli spännande att se hur långt vi kan nå på fyra år till nästa Paralympics i Tokyo! ",
    },
    {
      img: "/hjarnvilja/idrott/koping-ridklubb.png",
      title: "Köpings ridklubb – tävlingssektionen",
      description: "Maria höll en fantastisk föreläsning för oss. Hon guidade oss i tankens värld och förklarade hur vi kan vända begränsande tankar till positiva och möjliga! Det var så mycket energi, skratt och värde i de exempel och verktyg som Maria delade med sig av. Hon fångade oss alla! Oavsett ålder och tidigare erfarenheter kunde vi känna igen oss i Marias exempel och överföra dem till vår egen situation. Alla deltagare kommer att ta med sig sin egen mentala Barbapappa på nästa tävling.",
    },
    {
      img: "",
      title: "Anna Axberg – golf",
      description: "Mental coaching med Maria har förändrat min syn på mig själv, min sport och mitt sätt att utöva den. Jag har lärt mig att ta kontroll över situationer jag förut inte kunde handskas med, exempelvis nervositet, stress och mitt humör. Maria har fått mig att förstå vad som har legat till grund för de blockeringar jag tidigare fått inför och på tävlingar och lärt mig hur jag ska gå till väga för häva dessa. Vi har tillsammans kommit fram till vad mitt syfte med golfen är, och arbetat med målsättningar som är anpassade just för mig. Jag upplever att jag har växt som människa och som idrottare både på det mentala och fysiska planet. Nu längtar jag bara till nästa säsong och ser fram emot ett långt samarbete med Maria!",
    },
    {
      img: "",
      title: "Anders Block – HLR-instruktör",
      description: "Som instruktör av HLR möter man alla typer av människor; de som redan kan, de som har svårare att lära in, de som varit med om HLR på en kamrat, flamsiga grupper och allvarliga grupper. Maria har fått mig att känna mig trygg i det jag gör och på så vis får jag hög och jämn kvalitet på mina utbildningar. Jag har även fått hjälp med att hantera nervositet inför en utbildning. Så till dig som vill nå ut med ditt budskap inför en grupp människor kan jag verkligen rekommendera Maria på Hjärnvilja!",
    },
    {
      img: "",
      title: "Säljchef, Coop Forum",
      description: "Genom sin kunskap i värdskap och mental träning fick Maria oss på Coop Forum Häggvik att baka in våra nytillkomna arbetsuppgifter i vardagen utan att de kändes betungande. Med vilja och rätt attityd tar vi nu oss an möjligheterna istället för att fastna på problemen. Maria har hjälpt oss att lyfta blicken och inte fastna i gamla invanda mönster. Tack! Ser fram emot fler tillfällen att jobba med Maria!",
    },
    {
      img: "",
      title: "Friskis & Svettis Västerås, spinning",
      description: "Maria är en glad och entusiasmerande föreläsare som är lätt att förstå och fångade vårt intresse. Hon pratade om tankens kraft och om hur hjärnan omedvetet påverkar oss. Hur man med tankens kraft kan ta sig i stort hur långt som helst. Vi fick utöva några enkla övningar och efter dessa övningar var det inte svårt att övertyga oss om att tankens kraft verkligen fungerar.",
    },
    {
      img: "",
      title: "Sharon – hundsport",
      description: "Att resonera och reflektera tillsammans med Maria om vikten av att utveckla mentala förmågor, har påverkat mitt tävlande i en väldigt positiv riktning. Maria har varit en fantastisk källa till inspiration och gett mig nyanserade mentala perspektiv, vilket hjälpt mig i jakten på mentalt hållbara strategier. Maria har även hjälpt mig att tänka mer komplext och långsiktigt kring målsättningar. Otroligt tacksam för Marias coachning!",
    },
    {
      img: "",
      title: "VGF",
      description: "Vi har tränat hårt men alltid hamnat precis utanför pallen. Marias mentala träning har hjälpt tjejerna att prestera det där lilla extra som krävdes för att vi skulle ta brons på Svenska Cupen 2010.",
    },
    {
      img: "",
      title: "Winnet",
      description: "Tack Maria för att du på ett mycket inspirerande, proffsigt, lustfyllt och handgripligt (!) sätt fick oss att ta fram den mentala styrkan inom oss. Du fick mig att inse vikten av att vara sams med mig själv, att ledarskap handlar om så mycket mer än att peka med hela handen.",
    }
  ]


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
          <SwiperReferences references={references}/>
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
