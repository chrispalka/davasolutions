import React from 'react';
import styles from '../assets/Hero.module.css';

const Hero = ({ isPageLoading }) => {
  const list = [
    'the Healthiest Snacks',
    'the Best Customer Service',
    'the most Affordable Prices',
  ];
  return (
    <section
      className={
        isPageLoading
          ? [styles.sectionWrapper, styles.sectionWrapperFadeIn].join(' ')
          : styles.sectionWrapper
      }
    >
      <div className={styles.heroContainer}>
        <div className={styles.flipContainer}>
          <h1>We strive to provide you</h1>
          <div id={styles.flip} className={styles.heroSubContainer}>
            {list.map((item, index) => (
              <h1 key={index}>{item}</h1>
            ))}
          </div>
        </div>
        <div className={styles.aboutContainer}>
          <p>
            DAVA Solutions™ is a premier vending company serving the Greater
            Atlanta area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
