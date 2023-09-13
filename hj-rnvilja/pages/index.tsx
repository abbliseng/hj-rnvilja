import styles from '../styles/Home.module.scss';
import React from 'react';
import ShopButton from '../components/ShopButton';
import Center from '../components/Center';
import {SportsSection, BusinessSection} from '../components/Section';
import variables from '/styles/variables.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faVolleyball, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  return (
    <main>
      <div className={styles.container}>
        <BusinessSection />
        <div className={styles.centerSection}>
          <Center />
        </div>
        <SportsSection/>
      {/* <div className='overlay'>
        <ShopButton />
      </div> */}
      </div>
      <div className={styles.container_2}>
        <Center />
        <div 
          className={styles.hamburger_item} 
          style ={{
            backgroundColor: variables.foretag,
          }}
          onClick={() => {
            window.open('/foretag.html', "_self")
          }}
        >
          Ledarskap
          <br/>
          Organisationsutveckling
          <FontAwesomeIcon icon={faHandshake} className={styles.img} />
        </div>
        <div 
          className={styles.hamburger_item} 
          style ={{
            backgroundColor: variables.idrott,
          }}
          onClick={() => {
            window.open('/idrott.html', "_self")
          }}
        >
          Mental Träning
          <br/>
          Lagidrott – Individuell Idrott
          <FontAwesomeIcon icon={faVolleyball} className={styles.img} />
        </div>
        <div 
          className={styles.hamburger_item} 
          style ={{
            backgroundColor: variables.shop,
          }}
          onClick={() => {
            window.open('/shop.html', "_self")
          }}
        >
          Shop
          <FontAwesomeIcon icon={faShoppingCart } className={styles.img} />
        </div>
      </div>
    </main>
  )
}
