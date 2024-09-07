import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <a href="#home" className={styles.navLink}>Beranda</a>
      <a href="#about" className={styles.navLink}>Tentang Kami</a>
      <a href="#packages" className={styles.navLink}>Paket Travel</a>
    </nav>
  );
};

export default Navigation;