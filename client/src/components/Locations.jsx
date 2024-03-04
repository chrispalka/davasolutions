import React from 'react';
import styles from '../assets/Locations.module.css';

const Locations = ({ isPageLoading }) => {
  return (
    <section
      id='locations'
      className={
        isPageLoading
          ? [styles.sectionWrapper, styles.sectionWrapperFadeIn].join(' ')
          : styles.sectionWrapper
      }
    >
      <div className={styles.customShapeDividerTop}>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z'
            className={styles.shapeFfill}
          ></path>
        </svg>
      </div>
      <div className={styles.wrapper}>
        <h1>Locations</h1>
      </div>
    </section>
  );
};

export default Locations;
