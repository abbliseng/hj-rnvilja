import React, { useEffect, useMemo, useState } from 'react';
import '../styles/globals.scss'
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faDoorOpen, faDoorClosed } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import Link from 'next/link'
import variables from '/styles/variables.module.scss'
import ReactDOM from 'react-dom';

function PageNav(sections) {
    const [show, setShow] = useState(false);
    const [height, setHeight] = useState("0px");

    const router = useRouter()
    const btnColor = router.pathname == "/" ? variables.$bg : "var(--" + router.pathname.substring(1) + ")"

    useEffect(() => {
        if (show) {
            setHeight("100%");
        } else {
            setHeight("0px");
        }
    }, [show])

    return (
        <>
            {
                (btnColor == "var(--idrott)" || btnColor == "var(--foretag)") &&
                <>
                
                    <motion.button
                    onClick={() => setShow(!show)}
                            className='toolbar-btn toolbar-btn-menu'
                            style={{
                                color: btnColor
                            }}
                            whileHover={{
                                scale: 1.1,
                            }}
                        >
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </motion.button>
                    <motion.div
                        className="pageNav"
                        animate={{ height: height }}
                        style={{
                            backgroundColor: btnColor
                        }}
                    >
                        {
                            sections.sections.map((section, index) => (
                                <>
                                    <a href={section.id}
                                    
                                    onClick={() => setShow(false)}
                                    >
                                        { section.text }
                                    </a>
                                    <div style={{
                                        height: "5px",
                                        backgroundColor: `var(--${router.pathname.substring(1)}-dark)`,
                                        width: "100%",
                                    }}></div>
                                </>
                            ))
                        }
                    </motion.div>
                    <div
                        className="pageNav2"
                    >
                        {
                            sections.sections.map((section, index) => (
                                <a 
                                    style={{
                                        color: btnColor
                                    }}
                                    href={section.id}
                                >
                                    { section.text }
                                </a>
                            ))
                        }
                    </div>
                </>
            }
        </>
    )
}

function MyApp({ Component, pageProps }) {
    const [isHovered, setIsHovered] = useState(false);
    
    const router = useRouter()
    const btnColor = router.pathname == "/" ? variables.$bg : "var(--" + router.pathname.substring(1) + ")"
    // const btnColor = "var(--bg)"

    const sections = [
        {
            text: "Erbjudanden",
            id: "#offers",
        },
        {
            text: "Webbkurs",
            id: "#course",
        },
        {
            text: "Utbildningar",
            id: "#ed",
        },
        {
            text: "Referrenser",
            id: "#refs",
        },
        {
            text: "Min resa",
            id: "#about",
        },
        {
            text: "Funderingar?",
            id: "#form",
        },
    ]

    return (
        <>
            <Head>
                <title>Hjärnvilja</title>
                <link rel="icon" href="/asteriskorange-transparent.png" />
            </Head>
                {router.pathname != "/" &&
            <div className='toolbar'>
                    <Link href="/">
                        <motion.button
                            className='toolbar-btn'
                            style={{
                                color: btnColor
                            }}
                            whileHover={{
                                scale: 1.1,
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {
                                isHovered ?
                                <FontAwesomeIcon icon={faDoorOpen}></FontAwesomeIcon> :
                                <FontAwesomeIcon icon={faDoorClosed}></FontAwesomeIcon> 
                            }
                        </motion.button>
                    </Link>
                <PageNav sections={sections}/>
            </div>
                }
            <Component {...pageProps} />
        </>
    )

}

export default MyApp