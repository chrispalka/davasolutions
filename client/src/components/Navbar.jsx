import React, { useState } from 'react';
import styles from '../assets/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useScrollLock } from '../layout/index.js';
import Logo from '../assets/images/Dava.png';

const Navbar = ({ scrollDirection, top, isLoading }) => {
  const [showNav, setShowNav] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const toggleShowNav = () => {
    setShowNav(!showNav);
    if (showNav) {
      unlockScroll();
    } else {
      lockScroll();
    }
  };

  return (
    <div className={isLoading ? styles.navFadeIn : styles.nav}>
      <div className={styles.mobile_btn} id='nav-click' onClick={toggleShowNav}>
        {showNav ? (
          <FontAwesomeIcon className={styles.icon} icon={faXmark} size='lg' />
        ) : (
          <FontAwesomeIcon className={styles.icon} icon={faBars} size='lg' />
        )}
      </div>
      <div
        className={
          showNav
            ? [styles.navContainer, styles.navActive].join(' ')
            : top
            ? [styles.navContainer, styles.navContainerTop].join(' ')
            : styles.navContainer
        }
        style={!scrollDirection ? { top: '-5rem' } : { top: 0 }}
      >
        <div className={styles.navWrapper}>
          <div className={styles.logoContainer}>
            <img src={Logo} className={styles.logo} alt='white D dava solutions logo' />
          </div>
          <div className={styles.linkMobile}>
            <div className={styles.links}>
              <a href='#home' onClick={toggleShowNav}>
                Home
              </a>
            </div>
            <div className={styles.links}>
              <a href='#about' onClick={toggleShowNav}>
                About
              </a>
            </div>
            <div className={styles.links}>
              <a href='#products' onClick={toggleShowNav}>
                Products
              </a>
            </div>
            <div className={styles.links}>
              <a href='#contact' onClick={toggleShowNav}>
                Contact
              </a>
            </div>
          </div>
          <div className={styles.linkDesktop}>
            <div className={styles.links}>
              <a href='#home'>Home</a>
            </div>
            <div className={styles.links}>
              <a href='#about'>About</a>
            </div>
            <div className={styles.links}>
              <a href='#products'>Products</a>
            </div>
            <div className={styles.links}>
              <a href='#contact'>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
