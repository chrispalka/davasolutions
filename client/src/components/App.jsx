import React, { useState, useEffect } from 'react';
import styles from '../assets/App.module.css';
import DavaGIF from '../assets/images/Dava.GIF';
import {
  Navbar,
  Form,
  Products,
  useScroll,
  ImageCarousel,
} from '../layout/index.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = () => {
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollDirection, topOfPage } = useScroll();

  const list = [
    'the Healthiest Snacks',
    'the Best Customer Service',
    'the most Affordable Prices',
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsSpinnerLoading(false);
    }, 1000);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isSpinnerLoading, isLoading]);

  return (
    <>
      <Navbar
        scrollDirection={scrollDirection}
        top={topOfPage}
        isLoading={isLoading}
      />
      <main id='home' className={styles.mainWrapper}>
        <div
          className={
            isSpinnerLoading
              ? [styles.logoContainer, styles.logoContainerFadeIn].join(' ')
              : styles.logoContainer
          }
        >
          <img
            src={DavaGIF}
            className={[styles.logo, styles.logoScaleOut].join(' ')}
            alt='white D dava solutions logo'
          />
        </div>
        <div className={styles.topSection}>
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
        </div>
        <div
          className={
            isLoading
              ? [styles.sectionWrapper, styles.sectionWrapperFadeIn].join(' ')
              : styles.sectionWrapper
          }
        >
          <section className={styles.logoSection}>
            <div className={styles.logoSubContainer}>
              We strive to provide you the best customer service, the healthiest
              snacks, at an affordable price!
            </div>
          </section>
          <section id='products' className={styles.carouselSection}>
            <Products />
          </section>
          <section className={styles.listSection}>
            <ImageCarousel />
          </section>
          <section id='contact' className={styles.contactSection}>
            <Form />
          </section>
          {/* <footer className={styles.footerSection}>footer text</footer> */}
        </div>
      </main>
    </>
  );
};

export default App;
