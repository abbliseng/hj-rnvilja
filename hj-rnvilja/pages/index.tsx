import styles from '../styles/Home.module.css';
import React from 'react';
import ShopButton from '../components/ShopButton';
import Center from '../components/Center';
import {SportsSection, BusinessSection} from '../components/Section';

export default function Home() {

  return (
    <div className={styles.container}>
      <main>
        <div className={styles.container}>
          <BusinessSection />
          <div className={styles.centerSection}>
            <Center />
          </div>
          <SportsSection/>
        </div>
        <div className='overlay'>
          <ShopButton />
        </div>
      </main>
    </div>
  )
}
