import React from 'react';
import styles from '../assets/Card.module.css';

const Card = ({ image, title, description, index }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <img src={image} />
        </div>
        <div className={styles.cardDetails}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
