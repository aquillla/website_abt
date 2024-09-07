import React from 'react';
import styles from './HomePage.module.css';
import Header from '../Header/Header';
import Services from '../Services/Services';
import PackageSelector from '../PackageSelector/PackageSelector';
import TravelPackages from '../TravelPackages/TravelPackages';
import Gallery from '../Gallery/Gallery';
import ContactOffice from '../ContactOffice/ContactOffice';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <main>
        <Services />
        <PackageSelector />
        <TravelPackages />
        <Gallery />
        <ContactOffice />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;