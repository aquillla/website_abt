import React from "react";
import styles from './ContactOffice.module.css';
import ContactItem from './ContactItem';

const ContactOffice = () => {
  const contactItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fd3d0c777e3bad036a6014f6b58f16da0c080a2717c79f3b6889bdfdacd77d3?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a", text: "085259742624" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fd3d0c777e3bad036a6014f6b58f16da0c080a2717c79f3b6889bdfdacd77d3?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a", text: "085259742625" }
  ];

  return (
    <section className={styles.contactOffice}>
      <div className={styles.officeCard}>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/22d4a8c6ac631c39fdd00edf8652fea214d43114d919941e9c5074b11736d852?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a" 
          className={styles.officeImage} 
          alt="Office building exterior"
        />
        <div className={styles.officeInfo}>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3993f4c8571e741df4bb22dc47526310148aae8cbc77d22e2a4fb58fbb71162e?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a" 
            className={styles.backgroundImage} 
            alt=""
          />
          <div className={styles.officeContent}>
            <h2 className={styles.officeTitle}>Kantor Kami</h2>
            <p className={styles.officeDescription}>
              Datangi kantor kami untuk mendapatkan informasi secara langsung.
            </p>
          </div>
          <div className={styles.contactDetails}>
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1bb65038a703d184df7b5453e503f630ba67b225c8cc280ff03d60ab98446a2?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a" 
              className={styles.locationIcon} 
              alt="Location icon"
            />
            <div className={styles.locationInfo}>
              <h3 className={styles.cityName}>Probolinggo</h3>
              <p className={styles.address}>
                JL. Ir. H. Juanda 15 Kota Probolinggo
              </p>
              {contactItems.map((item, index) => (
                <ContactItem key={index} icon={item.icon} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOffice;