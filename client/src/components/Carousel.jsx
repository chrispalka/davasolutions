import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from '../assets/Carousel.module.css';

export default () => (
  <Carousel autoPlay showThumbs={false} showStatus={false} showArrows={false}>
    <div className={styles.container}>
      <img alt='' src='https://via.placeholder.com/150x150' />
      <p className='legend'>Legend 1</p>
    </div>
    <div className={styles.container}>
      <img alt='' src='https://via.placeholder.com/150x150' />
      <p className='legend'>Legend 1</p>
    </div>
    <div className={styles.container}>
      <img alt='' src='https://via.placeholder.com/150x150' />
      <p className='legend'>Legend 1</p>
    </div>
    <div className={styles.container}>
      <img alt='' src='https://via.placeholder.com/150x150' />
      <p className='legend'>Legend 1</p>
    </div>
  </Carousel>
);
