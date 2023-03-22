import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Import external components and sub-components
import Header from './Header'; //import the custom created header component
import Footer from './Footer'; //import the custom created footer component
import Filter from './Filter'; //import the custom created filter component
import CatalogBox from './CatalogBox'; //import the custom created catalogbox component
import Pagination from './ListingPagination'; //import the custom created pagination component
import styles from './styles'; //import the custom stylesheet

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
