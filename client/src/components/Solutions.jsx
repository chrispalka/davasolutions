import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Card } from '../layout/index.js';
import styles from '../assets/Solutions.module.css';

import vendingUpClose from '../assets/images/vending_up_close.jpeg';
import microMarket1 from '../assets/images/micro-market-1.jpg';

const solutions = [
  {
    title: 'Vending',
    description:
      'Your go-to source for on-the-spot delights, our vending machines are here to turn those cravings into instant smiles',
    thumbnail: vendingUpClose,
    images: [
      'https://cdn.dummyjson.com/product-images/1/1.jpg',
      'https://cdn.dummyjson.com/product-images/1/2.jpg',
      'https://cdn.dummyjson.com/product-images/1/3.jpg',
      'https://cdn.dummyjson.com/product-images/1/4.jpg',
      'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
    ],
  },
  {
    title: 'Micro Markets',
    description:
      'Introducing our Micro Market Solution – your new, convenient oasis for snacks and essentials!',
    thumbnail: microMarket1,
    images: [
      'https://cdn.dummyjson.com/product-images/1/1.jpg',
      'https://cdn.dummyjson.com/product-images/1/2.jpg',
      'https://cdn.dummyjson.com/product-images/1/3.jpg',
      'https://cdn.dummyjson.com/product-images/1/4.jpg',
      'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
    ],
  },
];

const Solutions = ({ isLoading }) => (
  <section
    className={
      isLoading
        ? [styles.sectionWrapper, styles.sectionWrapperFadeIn].join(' ')
        : styles.sectionWrapper
    }
  >
    <div className={styles.whatWeOfferContainer}>
      <div className={styles.whatWeOfferSubContainer}>
        <h1>What we offer</h1>
        <p>
          Elevate your snacking experience with our cutting-edge Vending Machine
          and Micro Market Solutions
        </p>
        <div className={styles.grid}>
          {solutions.map((solution, i) => (
            <Card
              key={i}
              index={i}
              title={solution.title}
              image={solution.thumbnail}
              description={solution.description}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
  // <div className={styles.wrapper}>
  //   <div className={styles.carouselWrapper}>
  //     <Carousel
  //       autoPlay
  //       showThumbs={false}
  //       showStatus={false}
  //       showArrows={false}
  //       infiniteLoop={true}
  //     ></Carousel>
  //   </div>
  //   <div className={styles.nonCarouselWrapper}>
  //     <Product items={ProductList} />
  //   </div>
  // </div>
);

export default Solutions;
