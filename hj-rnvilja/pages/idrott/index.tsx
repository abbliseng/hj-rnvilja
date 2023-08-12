import styles from "./Idrott.module.scss";

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
import React, { useState } from "react";

type Reference = {
  img: string,
  title: string,
  description: string,
  meta?: {
    [key: string]: string,
  }
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
                    {
                      reference.meta && reference.meta.type === "fit" &&
                      <img className={styles.ref_card_img} src={reference.img} alt={reference.title}
                        style={{ objectFit: "contain" }}
                      />
                    }
                    {
                      // IF there is no meta
                      !reference.meta &&
                      <img className={styles.ref_card_img} src={reference.img} alt={reference.title} />
                    }
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

export default function SportsPage({ }) {
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
      img: "/hjarnvilja/idrott/Anna-Golf.jpg",
      title: "Anna Axberg – golf",
      description: "Mental coaching med Maria har förändrat min syn på mig själv, min sport och mitt sätt att utöva den. Jag har lärt mig att ta kontroll över situationer jag förut inte kunde handskas med, exempelvis nervositet, stress och mitt humör. Maria har fått mig att förstå vad som har legat till grund för de blockeringar jag tidigare fått inför och på tävlingar och lärt mig hur jag ska gå till väga för häva dessa. Vi har tillsammans kommit fram till vad mitt syfte med golfen är, och arbetat med målsättningar som är anpassade just för mig. Jag upplever att jag har växt som människa och som idrottare både på det mentala och fysiska planet. Nu längtar jag bara till nästa säsong och ser fram emot ett långt samarbete med Maria!",
    },
    {
      img: "",
      title: "Anders Block – HLR-instruktör",
      description: "Som instruktör av HLR möter man alla typer av människor; de som redan kan, de som har svårare att lära in, de som varit med om HLR på en kamrat, flamsiga grupper och allvarliga grupper. Maria har fått mig att känna mig trygg i det jag gör och på så vis får jag hög och jämn kvalitet på mina utbildningar. Jag har även fått hjälp med att hantera nervositet inför en utbildning. Så till dig som vill nå ut med ditt budskap inför en grupp människor kan jag verkligen rekommendera Maria på Hjärnvilja!",
    },
    {
      img: "/hjarnvilja/foretag/coop.png",
      title: "Säljchef, Coop Forum",
      description: "Genom sin kunskap i värdskap och mental träning fick Maria oss på Coop Forum Häggvik att baka in våra nytillkomna arbetsuppgifter i vardagen utan att de kändes betungande. Med vilja och rätt attityd tar vi nu oss an möjligheterna istället för att fastna på problemen. Maria har hjälpt oss att lyfta blicken och inte fastna i gamla invanda mönster. Tack! Ser fram emot fler tillfällen att jobba med Maria!",
      meta: {
        type: "fit"
      },
    },
    {
      img: "/hjarnvilja/foretag/friskis.png",
      title: "Friskis & Svettis Västerås, spinning",
      description: "Maria är en glad och entusiasmerande föreläsare som är lätt att förstå och fångade vårt intresse. Hon pratade om tankens kraft och om hur hjärnan omedvetet påverkar oss. Hur man med tankens kraft kan ta sig i stort hur långt som helst. Vi fick utöva några enkla övningar och efter dessa övningar var det inte svårt att övertyga oss om att tankens kraft verkligen fungerar.",
    },
    {
      img: "/hjarnvilja/idrott/Sharon.jpg",
      title: "Sharon – hundsport",
      description: "Att resonera och reflektera tillsammans med Maria om vikten av att utveckla mentala förmågor, har påverkat mitt tävlande i en väldigt positiv riktning. Maria har varit en fantastisk källa till inspiration och gett mig nyanserade mentala perspektiv, vilket hjälpt mig i jakten på mentalt hållbara strategier. Maria har även hjälpt mig att tänka mer komplext och långsiktigt kring målsättningar. Otroligt tacksam för Marias coachning!",
    },
    {
      img: "/hjarnvilja/idrott/VGF.jpg",
      title: "VGF",
      description: "Vi har tränat hårt men alltid hamnat precis utanför pallen. Marias mentala träning har hjälpt tjejerna att prestera det där lilla extra som krävdes för att vi skulle ta brons på Svenska Cupen 2010.",
    },
    {
      img: "/hjarnvilja/foretag/Winnet.jpg",
      title: "Winnet",
      description: "Tack Maria för att du på ett mycket inspirerande, proffsigt, lustfyllt och handgripligt (!) sätt fick oss att ta fram den mentala styrkan inom oss. Du fick mig att inse vikten av att vara sams med mig själv, att ledarskap handlar om så mycket mer än att peka med hela handen.",
    }
  ]

  const [readmore, setReadmore] = useState(false);


  return (
    <main className={styles.container}>
      <div className={styles.right}>

        <div id="title" className={styles.sector}
          style={{
            paddingTop: "0px"
          }}
        >
          <div className={styles.row}>
            <div className={styles.inline_title}
              style={{
                textAlign: "center",
                fontSize: "1.5rem",
              }}
            >
              Hjärnvilja är synonymt med mig, Maria Nilsson, och jag önskar er hjärtligt välkomna till min hemsida!
              <br /><br />
            </div>
          </div>

          <img
            src="/hjarnvilja/foretag/office-1.jpg"
            alt="office"
            className={styles.inline_img}
            style={{ float: "right", marginLeft: "20px", marginRight: "0px" }}
          />
          Min förälskelse till den mentala träningen gjorde att jag vågade starta Hjärnvilja 2009 och sen dess har det varit ett ständigt sökande efter nya rön och metoder. Att kunna guida människor till prestationer de inte själva trodde var möjliga är en oslagbar känsla. Hjärnviljas ledstjärna är att hela tiden göra detta fascinerande område så lättillgängligt som möjligt för andra, jag lägger därför stor vikt vid att skapa enkla bilder och övningar som gör mental träning lätt att förstå och ta till sig.
          <br /><br />
          Att vara sitt absolut bästa jag när det väl gäller är en konst. Många parametrar ska stämma för att vi ska hamna överst på prispallen. Att orka hela vägen fram till målet går enklare om vägen dit känns lärorik, utvecklande och guldkantad. Visst kan vi slita oss fram till ett guld, slå på oss själva och må dåligt under tiden. Men genom den mentala träningen kan vi jobba för kroppen snarare än emot den. Tillsammans arbetar vi bort låsningar, ofördelaktiga mönster, ältande tankar. Du lär dig att lägga fokus på rätt moment, hur du bibehåller din energi och vad som skapar välmående för just dig. Allt för att du ska klara av hög inre press, förväntningar utifrån och kritiska moment när det verkligen gäller.
          <br /><br />
          <div
            style={{
              backgroundColor: "var(--bg-light)",
              borderRadius: "5px",
              padding: "10px"
            }}
          >
            <div className={styles.list} style={{ fontWeight: "500" }}>Hjärnvilja är uppbyggt på:</div>
            <ul>
              <li>- En kandidatexamen i beteendevetenskap inriktning socialpsykologi</li>
              <li>- En magisterexamen i ledarskap</li>
              <li>- Mental träning från Skandinaviska Ledarhögskolan (Lars-Eric Uneståhl)</li>
              <li>- Många års arbete med barn och ungdomar</li>
              <li>- En satsning inom kampsport som fick ett abrupt slut</li>
              <li>- 24 års erfarenhet av att föreläsa (är bland annat föreläsare hos SISU idrottsutbildarna)</li>
              <li>- En personlighet som bidrar med glädje, energi och mod</li>
            </ul>
          </div>
        </div>

        
        <div id="ed" className={`${styles.sector} ${styles.sector_light}`}>
          <h1>Utbildningar</h1>
          <div>
            Hjärnvilja arbetar med att få företag och föreningar att sträva mot ett gemensamt mål och må bra på vägen dit. Genom samtal, inspirerande workshops och insiktsfulla övningar skapas lust, engagemang och välmående. Bättre resultat och mer energi får ni på köpet. Hjärnvilja tar sig även an enskilda individer som vill utvecklas inom sin sport eller i sitt yrkesliv.
            <br /><br />
            <div className={styles.text_title_centered}>
              Lagidrott – Individuell Idrott
            </div>
            <br />
            Att vara sitt absolut bästa jag när det väl gäller är en konst. Det är många parametrar som ska stämma för att vi ska stå överst på prispallen. För att orka behöver vägen fram till prispallen kännas guldkantad och härlig. Visst kan vi slita oss fram till ett guld, men det är bättre att jobba för kroppen än emot den. Genom att synka ihop kropp och hjärna kan du som idrottare lägga fokus på rätt moment vid träning och tävling. Den mentala träningen hjälper dig/er att frigöra energi, kraft och bli ert bästa jag.
          </div>
        </div>

        {/* TODO: Sponsor loggor */}
        {/* <div className={styles.break}></div> */}
        {/* <div
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
        </div> */}
        {/* <div id="offers" className={styles.break}></div> */}
        <div id="offers" className={styles.sector}>
          <Workshops styles={styles} t={"idrott"} />
        </div>
        {/* <div id="course" className={styles.break}></div> */}

        <div
          id="course"
          className={`${styles.sector} ${styles.sector_light}`}
        >
          <h1 style={{ textAlign: "center" }}>Webbkurs</h1>
          <div className={styles.row}
            style={{
              flexWrap: "wrap",
            }}
          >
            <img
              src="/hjarnvilja/drawn/tarta.PNG"
              alt="tarta"
              className={styles.inline_img_course}
            />
            <div className={styles.course_text}>
              Hjärnvilja erbjuder en webbkurs i grundläggande mental träning som på ett enkelt och pedagogiskt vis skapar förståelse för hur mental träning kan användas. Kursens syfte är att genom välmående, energi och fokus lyckas få dig att prestera bättre samtidigt som vägen dit känns utvecklande och rolig.
              <motion.button
                whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.9 }}
                style={{
                  marginBottom: "20px",
                  width: "90%",
                  alignSelf: "center",
                  marginTop: "20px",
                }}
              >Shoppa kurs</motion.button>
            </div>
          </div>
        </div>

        {/* TODO: Utbildningar */}
        {/* <div id="ed" className={styles.break}></div> */}

        {/* <div className={styles.break}></div> */}

        <div id="refs" className={`${styles.sector}`}>
          <div className={styles.hideRefs}>
            <h1>Referenser</h1>
            <div style={{
              width: "100%",
              minHeight: "300px",
              position: "relative",
            }}>
              <SwiperReferences references={references} />
            </div>
          </div>
        </div>

        {/* <div id="about" className={styles.break}></div> */}

        <div id="about" className={`${styles.sector} ${styles.sector_light}`}>
          <h1>Min idrottsresa</h1>
          <div>
            <img
              src="/hjarnvilja/maria-hoppar.jpg"
              alt="office"
              className={styles.inline_img}
              style={{ float: "left", marginRight: "20px" }}
            />
            Det känns som att jag har lagt grunden till mitt företag redan från att jag var liten. Idrott har alltid legat mig varmt om hjärtat och även intresset av att stå på scen. Tillsammans med sista pusselbiten, fascinationen över människors beteenden, har jag under mitt liv byggt upp en grund som Hjärnvilja idag vilar på. Här får ni läsa om min resa.
            <br /><br />
            Idrott är något som har följt med mig sedan jag var barn. Så fort jag kunde springa lirade jag och pappa boll på gräsmattan. Sedan blev det volleyboll, fotboll, ridning – men det var inte förrän jag halkade in på kampsport som jag blev riktigt fast. Kampsporten var fascinerande på så många vis och jag gick från klarhet till klarhet. Efter Karate och Tae Kwon Do så blev det Kung Fu som jag valde att satsa på. Jag hade vunnit guld med mitt lag på karate-SM så tränaren och jag siktade högre – jag skulle ut i Europa. Men 16 h kampsport i veckan, med enbart manliga sparringpartners, slet på kroppen. Min höft började krångla.
          </div>
          {
            !readmore &&
            <div
              className={styles.readmore}
              onClick={() => {
                setReadmore(true);
              }}
            >Visa mer...</div>
          }
          {
            readmore &&
            <div>
              Jag fick ondare och ondare och uppsökte en sjukgymnast för att få hjälp – istället gick jag därifrån med en krossad dröm. Jag var tvungen att sluta träna så hårt som jag gjorde, domen löd ”annars är risken att du inte kan gå när du är 30”. Jag var 20 år och jag hade förmodligen inte brytt mig om vad som kan hända 10 år fram om det inte vore för smärtan. Jag kunde helt enkelt inte fortsätta köra. Lång historia kort: Jag kraschade och tappade en stor del av min identitet. Men mitt i allt elände så bestämde jag mig för att ta samma beslut som jag hade tagit flera år tidigare…
              <br /><br />
              <div style={{ fontStyle: "italic" }}>
                … Året var 1997, jag var 14 år gammal och var på väg till en skoldans. Som så många ungdomar i den åldern såg jag fram emot den här kvällen, klädde upp mig, fixade till mig och tänkte att jag kanske skulle hitta en trevlig pojke att dansa tryckare med ikväll. Det blev dock ingen dans, istället åkte jag hem med ett hemskt tjut i öronen som inte hade gått över nästa dag när jag vaknade. Jag blev livrädd, hade ingen aning om vad detta kunde vara för något. Dagarna gick, ljudet klingade tack och lov av och 4 veckor senare var det dags för nästa skoldans. Denna gång hade jag tur, jag fick dansa! Under låten så märkte jag hur det skar obehagligt i mitt högra öra av ljudvolymen, men självklart hade det varit alldeles för pinsamt att gå därifrån. Denna skoldans resulterade i att jag idag har tre bestående ljud i mina öron.
                <br />
                Jag försökte hålla modet uppe, tänkte att det går säkert över som det gjorde förra gången. Men tiden gick och flera månader senare läste jag en tidning. På mittuppslaget stod det ”Tinnitus – kroniskt öronsus” och jag kunde inte sluta läsa. Halvvägs igenom förstod jag – det kommer alltid att vara såhär! Jag blev totalt knäckt, otröstlig. Tills jag en dag nådde ett vägskäl inom mig själv: Ska jag gråta över detta resten av livet, eller ska jag göra det bästa jag kan av eländet? Jag valde det sistnämnda.
                <br />
                Jag startade en hemsida och fick kontakt med mängder av ungdomar med samma problem. Jag började föreläsa i ämnet och slutorden i mitt framträdande var: ”Om jag kan få en enda av er att börja använda öronproppar vid höga ljudvolymer så känns det mer värt att jag har råkat ut för detta.” Detta rullade sen på, jag medverkade i Bullen, UR, tidningar som Aftonbladet, Chilli, föreläste på Karolinska Institutet, spelade in en utbildningsfilm som användes i skolor etc.
              </div>
              <br /><br />
              Så när jag låg där på soffan och tyckte synd om mig själv efter sjukgymnastens dom så tänkte jag på detta. Jag tänkte på hur jag hade vänt min tinnitus till något som blev betydelsefullt för så många och jag tog samma beslut igen.
              <div style={{ fontWeight: "500" }}>Jag kan inte, men andra kan – och jag ska hjälpa dem dit! </div>
              <br />
              Jag studerade beteendevetenskap på Mälardalens högskola och kryddade denna utbildning med kurser i socialisation, genus, scenisk framställning – ja, helt enkelt allt som kunde hjälpa mig förstå människors drivkrafter och förmågor bättre. Jag fortsatte med studier i mental träning på Skandinaviska Ledarhögskolan och är nu diplomerad mental tränare. Den mentala träningen har hjälpt mig förstå och eliminera de hinder som vi sätter upp för oss själva, den har lärt mig otaliga övningar och jag ser på människor och deras kapacitet på ett helt nytt sätt efter dessa kurser. Jag fortsatte studera och tog en magister i ledarskap vilket gör att jag nu ser företagsvärlden ur nya perspektiv och kan hjälpa företag och ledare med deras utmaningar.
            </div>
          }
          {
            readmore &&
            <div
              className={styles.readmore}
              onClick={() => {
                setReadmore(false);
              }}
            >Visa mindre...</div>
          }
        </div>

        {/* <div id="form" className={styles.break}></div> */}
        
        <div id="form" className={styles.sector}>
          <FormsSection styles={styles} />
        </div>

        {/* <div className={styles.break}></div> */}

      </div>
      <div className={styles.left}></div>
    </main>
  );
}
