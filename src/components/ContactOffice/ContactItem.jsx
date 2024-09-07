import React from "react";
import styles from './ContactOffice.module.css';

const ContactItem = ({ icon, text }) => {
  return (
    <div className={styles.contactItem}>
      <img 
        loading="lazy" 
        src={icon} 
        className={styles.contactIcon} 
        alt="Contact icon"
      />
      <span className={styles.contactText}>{text}</span>
    </div>
  );
};

export default ContactItem;