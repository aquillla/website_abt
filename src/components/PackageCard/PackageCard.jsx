import React from 'react';
import styles from './PackageCard.module.css';

const PackageCard = ({ image, date, title, price }) => {
  return (
    <div className={styles.packageCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.packageImage} />
        <div className={styles.dateLabel}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/55a4d8b440360652fd684c4326d997b1e18136b7bd53f7b671fa565e73d3b057?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a" alt="" className={styles.calendarIcon} />
          <span>Jadwal Terdekat : {date}</span>
        </div>
      </div>
      <div className={styles.packageInfo}>
        <h3 className={styles.packageTitle}>{title}</h3>
        <p className={styles.packagePrice}>{price}</p>
      </div>
    </div>
  );
};

export default PackageCard;