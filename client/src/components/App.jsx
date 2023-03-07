import React, { useState, useEffect } from 'react';
import styles from '../assets/App.module.css';
import DavaGIF from '../assets/images/Dava.GIF';
import { Navbar, Form, Carousel, useScroll } from '../layout';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = () => {
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const { y, x, scrollDirection } = useScroll();

  useEffect(() => {
    setTimeout(() => {
      setIsSpinnerLoading(false);
    }, 1000);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isSpinnerLoading, isLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  };

  return (
    <>
      <Navbar visible={visible} />
      <main id='home' className={styles.mainWrapper}>
        <div
          className={
            isSpinnerLoading
              ? [styles.logoContainer, styles.logoContainerFadeIn].join(' ')
              : styles.logoContainer
          }
        >
          <img src={DavaGIF} className={styles.logo} alt='' />
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
            <Carousel />
          </section>
          <section id='contact' className={styles.contactSection}>
            <Form />
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
