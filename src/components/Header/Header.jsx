import React from 'react';
import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/09b406b8119e39117189d0f6384d452d9e93f5e5e967e5b67dda04a78440c5a0?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a" alt="Company Logo" className={styles.logo} />
      <Navigation />
      <h1 className={styles.title}>
        Menuju Baitullah dengan Aman dan Nyaman Bersama PT. Anggun Bestari Tour
      </h1>
      <div className={styles.ctaContainer}>
        <button className={styles.viewPackagesBtn}>Lihat Paket</button>
        <button className={styles.contactAdminBtn}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d40e2c51a619b2b82cc9b2faa53d5298cd76675b9955741ce96701e0f3a10f95?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a" alt="" className={styles.contactIcon} />
          Hubungi Admin
        </button>
      </div>
    </header>
  );
};

export default Header;