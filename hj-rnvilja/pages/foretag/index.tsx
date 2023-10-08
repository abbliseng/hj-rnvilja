import styles from "./Foretag.module.scss";

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

export default function BusinessPage({ }) {
  const references: Reference[] = [
    {
      img: "/hjarnvilja/stjarna-cyan-p30bg.png",
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
      img: "/hjarnvilja/foretag/Winnet.jpg",
      title: "Winnet",
      description: "Tack Maria för att du på ett mycket inspirerande, proffsigt, lustfyllt och handgripligt (!) sätt fick oss att ta fram den mentala styrkan inom oss. Du fick mig att inse vikten av att vara sams med mig själv, att ledarskap handlar om så mycket mer än att peka med hela handen.",
    }
  ]

  const [readmore, setReadmore] = useState(false);


  return (
    <main className={styles.container}>
      <div className={styles.right}>
      <div id="title" className={styles.sector_wow}>
        <img
            src="/hjarnvilja/foretag/office-1.jpg"
            alt="office"
            style={{ float: "right", marginLeft: "20px", marginRight: "0px" }}
          />
          {/* <div className={styles.title_wow}>
            Hjärnvilja är synonymt med mig, Maria Nilsson.
            < br/>
            Hjärtligt välkomna till min hemsida!
          </div> */}
      </div>

        <div id="title" className={styles.sector}
          style={{
            paddingTop: "0px",
            textAlign: "justify",
          }}
        >
          <div className={styles.row}>
            <h1 className={styles.text_title_centered}>
              <br />
              Ledarskap och Organisationsutveckling
            </h1>
          </div>
          Ledarskap är en av Hjärnviljas stora passioner och jag kommer gärna till ert företag för att inspirera, utveckla och utmana er att förändra och fördjupa ert ledarskap. Hjärnvilja erbjuder e-kurser, utbildningar, workshops samt individuell coaching av ledare. Välj från det befintliga utbudet eller skräddarsy efter era specifika behov.
            <br /><br />
            Hjärnvilja kan vara behjälplig vid en organisationsutveckling eller i en förändringsprocess. Ofta behöver sådana gå hand i hand med att ledarskapet utvecklas. Hjärnvilja kan hjälpa er med att få de anställda att känna sig trygga och skapa god kommunikation och samtidigt stötta ledarna. Hjärnvilja bidrar med kunskap och utbildning under hela processen, skapar handlingsplaner och följer upp arbetet.
            <br /><br />
            Som ledare behöver du ofrånkomligen ta svåra beslut, skapa samsyn bland människor med olika viljor och samtidigt hålla ihop dig själv, även när det stormar som mest. I de utmaningar du ställs inför som ledare kan Hjärnvilja vara en guide och en trygg punkt att bolla sina tankegångar med.
            <br />
            Hjärnviljas filosofi är att skapa ledare som är trygga, insiktsfulla, nyfikna och som vet när de behövs och när de kan backa. Lika viktigt att ta tag i saker när det verkligen gäller är det att kunna ge gruppen utrymme att försöka på egen hand. Det skapar självförtroende hos medarbetarna och tillit till ledaren.
            <br /><br />
          {/* <div
            style={{
              backgroundColor: "var(--bg-light)",
              borderRadius: "5px",
              padding: "10px"
            }}
          >
            <div className={styles.list} style={{ fontWeight: "500", fontFamily: "Oswald", fontSize:"1.2rem" }}>Hjärnvilja är uppbyggt på:</div>
            
          </div> */}
        </div>

        
        
        <div id="ed" className={`${styles.sector} ${styles.sector_light}`}
          style={{
            backgroundColor: "var(--foretag)",
            color: "var(--bg-light)",
          }}
        >
          <div>
            <h1 className={styles.text_title_centered}>
            Hjärnvilja är uppbyggt på
            </h1>
            <br />
            <ul>
              <li>- En kandidatexamen i beteendevetenskap inriktning socialpsykologi</li>
              <li>- En magisterexamen i ledarskap</li>
              <li>- Mental träning från Skandinaviska Ledarhögskolan (Lars-Eric Uneståhl)</li>
              <li>- Många års arbete med barn och ungdomar</li>
              <li>- En satsning inom kampsport som fick ett abrupt slut</li>
              <li>- 24 års erfarenhet av att föreläsa</li>
              <li>- Extern utbildare hos RF-SISU Västmanland</li>
              <li>- En personlighet som bidrar med glädje, energi och mod</li>
            </ul>
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
          <Workshops styles={styles} t={"foretag"} />
        </div>

        <div
          id="course"
          className={`${styles.sector} ${styles.sector_light}`}
        >
          <h1>Webbkurs</h1>
          <div className={styles.row}
            style={{
              flexWrap: "wrap",
            }}
          >
            <img
              src="/tarta1.png"
              alt="tarta"
              className={styles.inline_img_course}
            />
            <div className={styles.course_text}>
              Hjärnvilja erbjuder en webbkurs i grundläggande mental träning som på ett enkelt och pedagogiskt vis skapar förståelse för hur mental träning kan användas. Kursens syfte är att genom välmående, energi och fokus lyckas få dig att prestera bättre samtidigt som vägen dit känns utvecklande och rolig.
              <motion.button
                whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.9 }}
                style={{
                  width: "90%",
                  alignSelf: "center",
                  marginTop: "20px",
                }}
                onClick={() => window.open("https://hjarnvilja.thrivecart.com/ledarskap-grundkurs/")}
              >Shoppa kurs</motion.button>
            </div>
          </div>
        </div>

        
        {/* <div id="course" className={styles.break}></div> */}

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
          <h1>Min resa</h1>
          <div
            style={{
              textAlign: "justify",
            }}
          >
            <img
              src="/hjarnvilja/maria-vid-vattnet.jpg"
              alt="office"
              className={styles.inline_img}
              style={{ float: "left", marginRight: "20px" }}
            />
            Genom livet har jag haft flera ledarroller. De flesta har jag bara råkat hamna i, som när jag fick möjlighet att leda en barnkör i mina tonår eller som när en spinningledare kom fram till mig efter ett pass och frågade ”Ska inte du bli ledare, du ser ut att tycka att detta är jättekul!”, sagt och gjort, 2010 blev jag spinningledare på Friskis&Svettis. Jag är beteendevetare och har en magister i ledarskap, jag håller i idrottsledarutbildningar i RF-SISUs regi, jag har utbildat många företagsledare och deras medarbetare i ledarskap. Gör detta mig till en bättre ledare tror ni? Till min förvåning svarar många människor nej på den frågan. Många tror med andra ord att ledarskap är något medfött. Detta ställer till det på två sätt,
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
              det ena är att många människor som skulle bli fantastiska ledare inte vågar ta steget och det andra är att flera personer som redan ser sig som ledare inte väljer att utvecklas i sin roll. Jag vill att alla ska se sin potential och utvecklas. Jag tror att vi alla i viss mån leder andra, vi alla är någons förebild, och kan vi ställa oss ödmjuka inför det faktum att det alltid finns mer att lära så kommer vi så fantastiskt mycket längre.
              <br /><br />
              Dock är det inte något slutgiltigt mål för mig att alla ska bli ledare. Det är inte finare att vara ledare än att vara medarbetare och jag förstår de människor som inte har någon önskan att leda andra. Men något jag tror att alla människor mår bra av är att få förståelse för begreppet självledarskap och hur jag genom detta kan utvecklas. Att kunna leda sig själv ger både välmående, större förståelse för andra, tydligare gränssättning i mitt liv och en riktning när allt tycks stå stilla. Det gör också att vi blir ännu bättre förebilder för våra medmänniskor.
              <br /><br />
              Att vara ledare är, enligt min ledarskapsfilosofi, att våga se sig själv – se det jag inte tycker om hos mig själv, det som inte faller rätt hos andra och göra något åt det. Likväl som att jag behöver se det som jag gör bra, vara stolt över det och ödmjukt hjälpa andra när de önskar. Min fasta övertygelse är att utbildning är A och O för att bli en bra ledare. En bra ledare blir aldrig färdig. En ledare kan ständigt utvecklas och bör ständigt utvecklas vilket ska ses som ett privilegium – det blir aldrig tråkigt att vara ledare.
          
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

        {/* Display the image logo */}
        <div className={styles.row}
          style={{
            justifyContent: "center",
          }}
        >
          <img
            src="/hjarnvilja/stjarna-cyan.png"
            alt="logo"
            className={styles.logo}
            style={{
              scale: "0.5",
            }}
          />
        </div>


      </div>
      {/* <div className={styles.left}></div> */}
    </main>
  );
}
