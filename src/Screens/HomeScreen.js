import React from 'react';
import Header from './Header';
import Filter from './Filter';
import CatalogBox from './CatalogBox';
import Tiles from './Tiles';
import Footer from './Footer';
import styles from './HomeScreenStyles.css';

function HomeScreen() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}>
        <Filter />
        <h1 className={styles.recommendedProducts}>Recommended Products</h1>
        <CatalogBox />
        <Tiles />
      </div>
      <Footer />
    </div>
  );
}

export default HomeScreen;
