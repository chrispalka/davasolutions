import React, { useState, useEffect } from 'react';
import styles from '../assets/App.module.css';
import DavaGIF from '../assets/images/Dava.GIF';
import {
  Navbar,
  Form,
  Solutions,
  useScroll,
  ImageCarousel,
  Hero,
} from '../layout/index.js';
import '@fontsource/alegreya-sans';
import '@fontsource/alegreya';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = () => {
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollDirection, topOfPage } = useScroll();

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
        <Hero isLoading={isLoading} />
        <div
          className={
            isLoading
              ? [styles.sectionWrapper, styles.sectionWrapperFadeIn].join(' ')
              : styles.sectionWrapper
          }
        >
          <Solutions />
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
