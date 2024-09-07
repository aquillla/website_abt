import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactLinks}>
        <a href="https://instagram.com/anggunbestaritour" className={styles.link}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f153b56937ce4e9a2839d3a7b5f19d6af831edf42e6d4a5eef102895b477e6cc?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a" alt="Instagram" className={styles.icon} />
          <span>anggunbestaritour</span>
        </a>
        <a href="tel:085259742624" className={styles.link}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0234ad2b4d8df7000a0d9971e92f20265197e6830444f2882d73464eebd5964?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a" alt="Phone" className={styles.icon} />
          <span>085259742624</span>
        </a>
        <a href="tel:085259742625" className={styles.link}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6f67e0fa0c2c3ed402e47614e575b2510217b970c717e95c8678fb853d91e4b?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a" alt="Phone" className={styles.icon} />
          <span>085259742625</span>
        </a>
        <a href="mailto:pt.anggunbestaritour@gmail.com" className={styles.link}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/73a7d147dc18f65679ee3fb71633ea9e36673a0086af32d23a38ea48d5efe94a?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a" alt="Email" className={styles.icon} />
          <span>pt.anggunbestaritour@gmail.com</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;