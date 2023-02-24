import React, { useState } from 'react';
import styles from '../assets/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/images/Dava.png';
import { faBars, faXmark, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleShowNav = () => {
    setShowNav(!showNav);
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
            : styles.navContainer
        }
      >
        <div className={styles.logoContainer}>
          <img src={Logo} className={styles.logo} alt='' />
        </div>
        <div className={styles.linkWrapper}>
          <div>Home</div>
          <div>About</div>
          <div>Products</div>
          <div>Contact</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
