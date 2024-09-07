import React from 'react';
import styles from './TravelPackages.module.css';
import PackageCard from './PackageCard';

const packageData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a8349a94d70240623f92549862a9156ae5bb3c595ef92e686941a2d484509de0?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a",
    labelText: "Jadwal Terdekat : 02 Agust 24",
    labelColor: "#ff3b30",
    name: "Umroh 12 Hari",
    price: "Rp. 27.400.000"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0dbd13cf6d3ae92e07bffc62c52758026fe4ecc3a84869749d784f893c268803?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a",
    labelText: "Jadwal Terdekat : 11 Sept 24",
    labelColor: "#b8923d",
    name: "Umroh 13 Hari",
    price: "Rp. 33.000.000"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0dbd13cf6d3ae92e07bffc62c52758026fe4ecc3a84869749d784f893c268803?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a",
    labelText: "Jadwal Terdekat : 11 Sept 24",
    labelColor: "#b8923d",
    name: "Umroh 13 Hari",
    price: "Rp. 35.000.000"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/31c0d7b64ccecbfe2e0b1b0fe7a985be7201b33f72def3369eea8e9b5164bd8a?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a",
    labelText: "Jadwal Terdekat : 16 Sept 24",
    labelColor: "#b8923d",
    name: "Umroh 16 Hari",
    price: "Rp. 35.500.000"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/958811073855d46787a1bc6ed7a19b710d0278a532f9b9c0665901aaa0c5fac2?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a",
    labelText: "Jadwal Terdekat : 16 Sept 24",
    labelColor: "#b8923d",
    name: "Umroh 16 Hari",
    price: "Rp. 37.500.000"
  }
];

const TravelPackages = () => {
  return (
    <section className={styles.packageSection}>
      <div className={styles.packageGrid}>
        {packageData.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </section>
  );
};

export default TravelPackages;