import React from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <article className={styles.serviceCard}>
      <img src={icon} alt="" className={styles.serviceIcon} />
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
    </article>
  );
};

export default ServiceCard;