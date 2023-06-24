import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';

import ShopButton from '../components/ShopButton';
import Center from '../components/Center';
import {SportsSection, BusinessSection} from '../components/Section';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Hjärnvilja</title>
        <link rel="icon" href="/asteriskorange-transparent.png" />
      </Head>

      <main>
        <div className='overlay'>
          <ShopButton />
        </div>
        <div className={styles.container}>
          <BusinessSection />
          {/* <div className={styles.businessSection}>
            <img src="/briefcase.svg" alt="" className={styles.sideLogo} />
          </div> */}
          <div className={styles.centerSection}>
            <Center />
          </div>
          <SportsSection />
        </div>
      </main>
    </div>
  )
}
