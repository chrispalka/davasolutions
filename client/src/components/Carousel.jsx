import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMugHot,
  faCookieBite,
  faLeaf,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/Carousel.module.css';
import vendingMultiple from '../assets/images/vending-multiple.jpeg';
import vendingGlobe from '../assets/images/vending-globe.jpeg';

export default () => (
  <div className={styles.wrapper}>
    <Carousel
      // autoPlay
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      infiniteLoop={true}
    >
      <div className={styles.container}>
        <FontAwesomeIcon
          className={[styles.icon, styles.coffee].join(' ')}
          icon={faMugHot}
        />
        <h1 className={styles.heading}>Hot Beverages</h1>
        <ul className={styles.info}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Hot Chocolate</li>
        </ul>
      </div>
      <div className={styles.container}>
        <FontAwesomeIcon
          className={[styles.icon, styles.leaf].join(' ')}
          icon={faLeaf}
        />
        <h1 className={styles.heading}>Healthy Options</h1>
        <ul className={styles.info}>
          <li>Nuts</li>
          <li>Granola Bars</li>
          <li>Trail Mix</li>
        </ul>
      </div>
      <div className={styles.container}>
        <FontAwesomeIcon
          className={[styles.icon, styles.cookie].join(' ')}
          icon={faCookieBite}
        />
        <h1 className={styles.heading}>Snacks & Treats</h1>
        <ul className={styles.info}>
          <li>Cookies</li>
          <li>Candy</li>
          <li>Chips</li>
        </ul>
      </div>
    </Carousel>
  </div>
);
