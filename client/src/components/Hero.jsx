import React from 'react';
import styles from '../assets/Hero.module.css';

const Hero = ({ isLoading }) => {
  const list = [
    'the Healthiest Snacks',
    'the Best Customer Service',
    'the most Affordable Prices',
  ];
  return (
    <section
      className={
        isLoading
          ? [styles.sectionWrapper, styles.sectionWrapperFadeIn].join(' ')
          : styles.sectionWrapper
      }
    >
      <div className={styles.heroContainer}>
        <h1>We strive to provide you</h1>
        <div id={styles.flip} className={styles.heroSubContainer}>
          {list.map((item, index) => (
            <h1 key={index}>{item}</h1>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
