import React, { useState } from 'react';
import styles from '../assets/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useScrollLock } from '../layout/index.js';
import Logo from '../assets/images/Dava.png';

const Navbar = ({ scrollDirection, top, isLoading }) => {
  const [showNav, setShowNav] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const links = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Products',
      href: '#products',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ];

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
      <div className={styles.fixedMobileNavContainer}>
        <div className={styles.mobileNavLogoContainer}>
          <a href='https://davasolutions.net'>
            <img alt='white D dava solutions logo' src={Logo} />
          </a>
        </div>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faBars}
          size='lg'
          onClick={toggleShowNav}
        />
      </div>
      <div
        className={
          showNav
            ? [styles.navContainer, styles.navActive].join(' ')
            : top
            ? [styles.navContainer, styles.navContainerTop].join(' ')
            : !scrollDirection
            ? [styles.navContainer, styles.scrollDirection].join(' ')
            : styles.navContainer
        }
      >
        <div className={styles.navWrapper}>
          <FontAwesomeIcon
            className={
              showNav
                ? [styles.icon, styles.closeIcon, styles.swirlFwd].join(' ')
                : [styles.icon, styles.closeIcon].join(' ')
            }
            icon={faXmark}
            size='lg'
            onClick={toggleShowNav}
          />
          <div className={styles.linkMobile}>
            {links.map((link, index) => (
              <div
                className={
                  showNav
                    ? [styles[`links${index}`], styles.linksFadeIn].join(' ')
                    : styles[`links${index}`]
                }
                key={index}
              >
                <a href={link.href} onClick={toggleShowNav}>
                  {link.name}
                </a>
              </div>
            ))}
          </div>
          <div className={styles.linkDesktop}>
            {links.map((link, index) => (
              <div className={styles.links} key={index}>
                <a href={link.href}>{link.name}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
