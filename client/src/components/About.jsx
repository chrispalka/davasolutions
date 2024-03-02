import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from '../assets/About.module.css';
import vendingUpClose from '../assets/images/vending_up_close.jpeg';
import comboVending from '../assets/images/combo-vending.png';
import vendingWomanMultiple from '../assets/images/vending-woman-multiple.jpg';
import vendingPeople from '../assets/images/vending-people.jpeg';

const imgArray = [
  vendingUpClose,
  comboVending,
  vendingPeople,
  vendingWomanMultiple,
];

const About = ({ isPageLoading }) => (
  <section
    id='about'
    className={
      isPageLoading
        ? [styles.sectionWrapper, styles.sectionWrapperFadeIn].join(' ')
        : styles.sectionWrapper
    }
  >
    <div className={styles.wrapper}>
      <div className={styles.customShapeDividerTop}>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z'
            className={styles.shapeFfill}
          ></path>
        </svg>
      </div>
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        infiniteLoop={true}
      >
        {imgArray.map((img, i) => (
          <div key={i} className={styles.container}>
            <img
              className={styles.imageContainer}
              alt='vending machine machines snacks'
              src={img}
            />
          </div>
        ))}
      </Carousel>
    </div>
  </section>
);

export default About;
