import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from '../assets/Carousel.module.css';
import vendingMultiple from '../assets/images/vending-multiple.jpeg';
import vendingDuel from '../assets/images/vending-duel.jpeg';
import vendingGlobe from '../assets/images/vending-globe.jpeg';

export default () => (
  <Carousel
    // autoPlay
    showThumbs={false}
    showStatus={false}
    showArrows={false}
    infiniteLoop={true}
  >
    <div className={styles.container}>
      <img alt='' src={vendingMultiple} />
      <p className={styles.info}>
        Legend 1 Legend 1 Legend 1 Legend 1 Legend 1 Legend 1 Legend 1 Legend 1
        Legend 1 Legend 1 Legend 1 Legend 1 Legend 1 Legend 1{' '}
      </p>
    </div>
    <div className={styles.container}>
      <img alt='' src={vendingGlobe} />
      <p className={styles.info}>
        Legend 1 Legend 1 Legend 1 Legend 1 Legend 1 Legend 1 Legend 1 Legend 1
        Legend 1 Legend 1 Legend 1 Legend 1 Legend 1 Legend 1{' '}
      </p>
    </div>
  </Carousel>
);
