import React, { useState, useEffect } from 'react';
import styles from '../assets/App.module.css';
import Logo from '../assets/images/Dava.png';
import Navbar from './NavBar';

const App = () => {
  return (
    <>
      <Navbar />
      <main className={styles.mainWrapper}>
        <section className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <img src={Logo} className={styles.logo} alt='' />
          </div>
          <div className={styles.logoSubContainer}>We strive to provide you the best customer service, the healthiest snacks, at an affordable price!</div>
        </section>
        <section className={styles.logoSection}>
          <div>hi</div>
        </section>
      </main>
    </>
  );
};

export default App;
