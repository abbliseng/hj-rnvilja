import React, { useState } from 'react';
import '../styles/globals.scss'
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faDoorOpen, faDoorClosed } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import Link from 'next/link'
import variables from '/styles/variables.module.scss'

function MyApp({ Component, pageProps }) {
    const [isHovered, setIsHovered] = useState(false);
    
    const router = useRouter()
    const btnColor = router.pathname == "/" ? variables.$bg : "var(--" + router.pathname.substring(1) + ")"
    // const btnColor = "var(--bg)"

    return (
        <>
            <Head>
                <title>Hjärnvilja</title>
                <link rel="icon" href="/asteriskorange-transparent.png" />
            </Head>
            <div className='toolbar'>
                {router.pathname != "/" &&
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
                }
                {/* <motion.button
                    className='toolbar-btn'
                    style={{
                        color: btnColor
                    }}
                    whileHover={{
                        scale: 1.1,
                    }}
                >
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </motion.button> */}
            </div>
            <Component {...pageProps} />
        </>
    )

}

export default MyApp