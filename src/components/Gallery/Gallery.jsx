import React from 'react';
import styles from './Gallery.module.css';

const galleryData = [
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8d773a076644bc1de42f24c9077c997ce1bacf15aeed54c5b0e88ad87b8f72c?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a", title: "Umroh 13D Tahun 2022" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb12e4fbbeaa91fb46e70e3267399187f217ee24a6eeb2367404ec75949f6010?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a", title: "Umroh 13D Tahun 2022" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/38333ac17f0e13591c5e68435ba664fc69a6e706e313295031f6c43aba48fcc2?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a", title: "Umroh 13D Tahun 2022" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bcd7c92d07c768ef533e22a0a3846dd17a60b563234665b4f13dce9b1e093ed2?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a", title: "Umroh 13D Tahun 2022" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/23456c170c7ee8564edf4585a40ffb1fe408e45598a60a64d6f1d0402fd8a8f3?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a", title: "Umroh 13D Tahun 2022" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/86cb7ec8383cde8a480fda4e265ca66cf11dad0b8371a442bdc633137942c2d2?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a", title: "Umroh 13D Tahun 2022" }
];

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <h2 className={styles.title}>Galeri Perjalanan</h2>
      <div className={styles.socialInfo}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/993a21b6eac73a7b7546eb57fc89baf1d7bf64068c150cba2b64f63c2a2b3e1c?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a" alt="Instagram icon" className={styles.icon} />
        <span>anggunbestaritour</span>
      </div>
      <hr className={styles.divider} />
      <div className={styles.filters}>
        <button className={styles.filterBtn}>Umroh Maulid 2022</button>
        <button className={styles.filterBtn}>Umroh Desember 2023</button>
        <button className={styles.filterBtn}>Umroh Ramadhan 2023</button>
      </div>
      <div className={styles.imageGrid}>
        {galleryData.map((item, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img src={item.image} alt={item.title} className={styles.galleryImage} />
            <div className={styles.imageOverlay}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/53939291f8e20db90405a8b37bae3bbe6fc6854fdd60a9e9dc241f309cab6c27?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a" alt="" className={styles.overlayIcon} />
              <p className={styles.imageTitle}>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;