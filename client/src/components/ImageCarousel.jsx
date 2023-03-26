import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from '../assets/ImageCarousel.module.css';
import vendingUpClose from '../assets/images/vending_up_close.jpeg';
import cocaCola from '../assets/images/coca-cola.jpeg';
import vendingPeople from '../assets/images/vending-people.jpeg';

const ImageCarousel = () => (
  <div className={styles.wrapper}>
    <Carousel
      autoPlay
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      infiniteLoop={true}
    >
      <div className={styles.container}>
        <img className={styles.imageContainer} alt='' src={vendingUpClose} />
      </div>
      {/* <div className={styles.container}>
        <img className={styles.imageContainer} alt='' src={cocaCola} />
      </div> */}
      <div className={styles.container}>
        <img className={styles.imageContainer} alt='' src={vendingPeople} />
      </div>
    </Carousel>
  </div>
);

export default ImageCarousel;
