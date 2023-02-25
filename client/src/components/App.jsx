import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../assets/App.module.css';
import Logo from '../assets/images/Dava.png';
import Spinner from '../assets/images/Dava.GIF';
import Navbar from './NavBar';
import Form from './Form';

const App = () => {
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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
      <Navbar />
      <main className={styles.mainWrapper}>
        <div
          className={
            isSpinnerLoading
              ? [styles.logoContainer, styles.logoContainerFadeIn].join(' ')
              : styles.logoContainer
          }
        >
          <img src={Spinner} className={styles.logo} alt='' />
        </div>
        <div
          className={
            isLoading
              ? [styles.sectionWrapper, styles.sectionWrapperFadeInd].join(' ')
              : styles.sectionWrapper
          }
        >
          {/* <section id='home' className={styles.logoSection}>
            <div className={styles.logoSubContainer}>
              We strive to provide you the best customer service, the healthiest
              snacks, at an affordable price!
            </div>
          </section> */}
          <section id='contact' className={styles.contactSection}>
            <Form />
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
