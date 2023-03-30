import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from '../assets/ImageCarousel.module.css';
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

const ImageCarousel = () => (
  <div className={styles.wrapper}>
    <Carousel
      autoPlay
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      infiniteLoop={true}
    >
      {imgArray.map((img, i) => (
        <div key={i} className={styles.container}>
          <img className={styles.imageContainer} alt='' src={img} />
        </div>
      ))}
    </Carousel>
  </div>
);

export default ImageCarousel;
