import React, { useState, useEffect } from 'react';
import styles from '../assets/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useScrollLock } from '../layout';
import { debounce } from '../helpers/debounce';
import Logo from '../assets/images/Dava.png';

const Navbar = ({ visible }) => {
  const [showNav, setShowNav] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const toggleShowNav = () => {
    setShowNav(!showNav);
    // if (showNav) {
    //   unlockScroll();
    // } else {
    //   lockScroll();
    // }
  };

  return (
    <>
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
            : visible
            ? styles.navContainer
            : [styles.navbarHidden, styles.navContainer].join(' ')
        }
      >
        <div className={styles.linkWrapper}>
          <div className={styles.logoContainer}>
            <img src={Logo} className={styles.logo} alt='' />
          </div>
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
      </div>
    </>
  );
};

export default Navbar;
