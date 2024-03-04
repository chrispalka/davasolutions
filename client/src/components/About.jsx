import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from '../assets/About.module.css';
import vendingUpClose from '../assets/images/vending_up_close.jpeg';
import comboVending from '../assets/images/combo-vending.png';
import vendingWomanMultiple from '../assets/images/vending-woman-multiple.jpg';
import vendingPeople from '../assets/images/vending-people.jpeg';
import robAaron from '../assets/images/RobAaron.jpg';

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
      <h1>Meet Your Experts</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.imageContainer}>
          {/* <img alt='' src={robAaron} /> */}
        </div>
        <div className={styles.contentContainer}>
          <p>
            Founded three years ago, our vending machine business is the
            culmination of our passion for providing convenient and delicious
            snacks to our community. With a focus on quality, variety, and
            exceptional customer service, we're dedicated to keeping people
            fueled and satisfied throughout their day. As business partners, we
            strive to continuously innovate and improve, ensuring that our
            vending machines offer a diverse selection of snacks and beverages
            to meet the needs of our customers. From healthy options to
            indulgent treats, we're committed to delivering a positive vending
            experience that keeps our clients coming back for more.
          </p>
        </div>
      </div>
      {/* <Carousel
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
      </Carousel> */}
    </div>
  </section>
);

export default About;
