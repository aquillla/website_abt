import React from 'react';
import styles from './Packages.module.css';
import PackageCard from '../PackageCard/PackageCard';

const packagesData = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/31c0d7b64ccecbfe2e0b1b0fe7a985be7201b33f72def3369eea8e9b5164bd8a?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a",
    date: "02 Agust 24",
    title: "Umroh 12 Hari",
    price: "Rp. 27.400.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/31c0d7b64ccecbfe2e0b1b0fe7a985be7201b33f72def3369eea8e9b5164bd8a?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a",
    date: "11 Sept 24",
    title: "Umroh 13 Hari",
    price: "Rp. 33.000.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/31c0d7b64ccecbfe2e0b1b0fe7a985be7201b33f72def3369eea8e9b5164bd8a?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a",
    date: "11 Sept 24",
    title: "Umroh 13 Hari",
    price: "Rp. 35.000.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/31c0d7b64ccecbfe2e0b1b0fe7a985be7201b33f72def3369eea8e9b5164bd8a?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a",
    date: "16 Sept 24",
    title: "Umroh 16 Hari",
    price: "Rp. 35.500.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/31c0d7b64ccecbfe2e0b1b0fe7a985be7201b33f72def3369eea8e9b5164bd8a?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a",
    date: "16 Sept 24",
    title: "Umroh 16 Hari",
    price: "Rp. 37.500.000"
  }
];

const Packages = () => {
  return (
    <section className={styles.packages}>
      {packagesData.map((pkg, index) => (
        <PackageCard key={index} {...pkg} />
      ))}
    </section>
  );
};

export default Packages;