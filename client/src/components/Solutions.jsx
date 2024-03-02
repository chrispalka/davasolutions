import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Card } from '../layout/index.js';
import styles from '../assets/Solutions.module.css';

import vendingUpClose from '../assets/images/vending_up_close.jpeg';
import microMarket1 from '../assets/images/micro-market-1.jpg';
import coffeeMachine from '../assets/images/coffeesolutions.jpeg';
import waterBottle from '../assets/images/waterbottle.jpeg';

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
      'Your new, convenient oasis for snacks and essentials! Tailored just for your space, our Micro Market is like having a mini-store at your fingertips, offering a wide array of fresh and delicious options.',
    thumbnail: microMarket1,
    images: [
      'https://cdn.dummyjson.com/product-images/1/1.jpg',
      'https://cdn.dummyjson.com/product-images/1/2.jpg',
      'https://cdn.dummyjson.com/product-images/1/3.jpg',
      'https://cdn.dummyjson.com/product-images/1/4.jpg',
      'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
    ],
  },
  {
    title: 'Coffee',
    description:
      'Why settle for ordinary when you can savor extraordinary? Our cutting-edge technology ensures each cup is a masterpiece, delivering the perfect blend of flavor and satisfaction.',
    thumbnail: coffeeMachine,
    images: [
      'https://cdn.dummyjson.com/product-images/1/1.jpg',
      'https://cdn.dummyjson.com/product-images/1/2.jpg',
      'https://cdn.dummyjson.com/product-images/1/3.jpg',
      'https://cdn.dummyjson.com/product-images/1/4.jpg',
      'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
    ],
  },
  {
    title: 'Water',
    description:
      'Experience the ease of staying refreshed with a simple touch. Equip your space with the latest technology, delivering a seamless and eco-friendly way to access premium water anytime, anywhere.',
    thumbnail: waterBottle,
    images: [
      'https://cdn.dummyjson.com/product-images/1/1.jpg',
      'https://cdn.dummyjson.com/product-images/1/2.jpg',
      'https://cdn.dummyjson.com/product-images/1/3.jpg',
      'https://cdn.dummyjson.com/product-images/1/4.jpg',
      'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
    ],
  },
];

const Solutions = ({ isPageLoading }) => (
  <section
    id='solutions'
    className={
      isPageLoading
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
