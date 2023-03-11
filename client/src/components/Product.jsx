import React from 'react';
import styles from '../assets/Product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMugHot,
  faCookieBite,
  faLeaf,
} from '@fortawesome/free-solid-svg-icons';

const Product = ({ items }) => (
  <div className={styles.wrapper}>
    {items.map((item, i) => (
      <div className={styles.product} key={i}>
        <FontAwesomeIcon
          className={styles.icon}
          style={{ color: item.color }}
          icon={
            item.icon === 'faMugHot'
              ? faMugHot
              : item.icon === 'faCookieBite'
              ? faCookieBite
              : faLeaf
          }
        />
        <h1 className={styles.heading}>{item.name}</h1>
        <ul className={styles.info}>
          {item.products.map((product, i) => (
            <li key={i}>{product}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Product;
