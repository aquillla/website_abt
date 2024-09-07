import React from 'react';
import styles from './TravelPackages.module.css';

const PackageCard = ({ imageSrc, labelText, labelColor, name, price, nearestDate }) => {
  return (
    <article className={styles.packageCard}>
      <div className={styles.packageImageWrapper}>
        <img src={imageSrc} alt={`${name} package`} className={styles.packageImage} />
        <div className={styles.packageLabel} style={{ backgroundColor: labelColor }}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/55a4d8b440360652fd684c4326d997b1e18136b7bd53f7b671fa565e73d3b057?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a" alt="" className={styles.packageLabelIcon} />
          <span>{labelText}</span>
        </div>
      </div>
      <div className={styles.packageInfo}>
        <div className={styles.packageDetails}>
          <h3 className={styles.packageName}>{name}</h3>
          <p className={styles.packagePrice}>{price}</p>
        </div>
      </div>
    </article>
  );
};

export default PackageCard;