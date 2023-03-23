import React from 'react';
import Header from './Header'; //import the custom created header component
import Filter from './Filter'; //import the custom created filter component
import CatalogBox from './CatalogBox'; //import the custom created catalogbox component
import Tiles from './Tiles'; //import the custom created tiles component
import Footer from './Footer'; //import the custom created footer component
import styles from './HomeScreenStyles.css'; //import the custom created stylesheet

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
