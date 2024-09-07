import React, { useState } from 'react';
import styles from './PackageSelector.module.css';

const PackageSelector = () => {
  const [selectedPackage, setSelectedPackage] = useState('Umroh');

  return (
    <section className={styles.packageSelector}>
      <h2 className={styles.title}>Pilih Paket Perjalanan</h2>
      <p className={styles.description}>
        Dapatkan layanan maksimal, pilih layanan paket dari kami sekarang.
      </p>
      <div className={styles.selectorContainer}>
        <button
          className={`${styles.selectorBtn} ${selectedPackage === 'Umroh' ? styles.active : ''}`}
          onClick={() => setSelectedPackage('Umroh')}
        >
          Umroh
        </button>
        <button
          className={`${styles.selectorBtn} ${selectedPackage === 'Haji' ? styles.active : ''}`}
          onClick={() => setSelectedPackage('Haji')}
        >
          Haji
        </button>
      </div>
    </section>
  );
};

export default PackageSelector;