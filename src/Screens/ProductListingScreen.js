import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Import external components and sub-components
import Header from './Header';
import Footer from './Footer';
import Filter from './Filter';
import CatalogBox from './CatalogBox';
import Pagination from './Pagination';

const ProductListingScreen = () => {
  // State for filter options
  const [filterOptions, setFilterOptions] = useState([]);

  return (
    <View style={styles.container}>
      <Header />
      <Filter options={filterOptions} setOptions={setFilterOptions} />
      <Text style={styles.headerText}>Products List</Text>
      <CatalogBox filterOptions={filterOptions} />
      <Pagination />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default ProductListingScreen;
