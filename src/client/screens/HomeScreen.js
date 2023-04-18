import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { getProductList} from "../services/productService";

import { HeaderLayout } from '../../components/Layouts/Header'; //import the custom created header component
import { Categories } from '../../components/Forms/categoryFilter'; //import the custom created filter component
import WelcomeSection from '../client/component/Layouts/WelcomeSection'; //import the custom created welcome section component
import { ProductList } from '../../components/Forms/ProductList'; //import the custom created catalogbox component
import { CLabel } from '../../components/common/Label'; //import the custom created Heading Label section component
import Tiles from '../client/component/Layouts/Tiles'; //import the custom created tiles component
import { Group2Layout } from '../../Screens/Layouts/Group2LayoutTest';

import styles from '../src/shared/HomeScreenStyles.css'; //import the custom created stylesheet

const HomeScreen = () => {

  //Get navigation object from react-navigation
  const navigation = useNavigation();

  //Actions
  //Function to navigate to the Product Listing Screen when SEARCH Icon is clicked
  function handleSearchProduct (searchQuery) {
    //Make a database call to retrieve the product based on the search item
    const searchResults = getProductsBySearchQuery(searchQuery);

    //Navigate to the Product Listing Screen
    navigation.navigate("ProductListingScreen.js", {searchResults} );
  };

  //Function to navigate to the Product Listing Screen when a category is selected
  const handleCategoryClick = (category) => {
    // 1. Pull products from the database that match the selected category
    const filteredProducts = database.filter((product) => product.category === category);

    // 2. Navigate to the Product Listing Screen and pass in the filtered products as props
    history.push("/ProductListingScreen.js", { products: filteredProducts });
  };

  //Function to pull products for the Recommended Products displayed on the Home Screen
  function handleRecommendedProducts() {
    //Get the new products and sale products from the database
    const newProducts = fetchProductsByCategory("New Products");
    const saleProducts = fetchProductsByCategory("Sale Products");

    //Combine the products into a single array
    const recommendedProducts = [...newProducts, ...saleProducts];

    //Display the recommended products on the Home Screen
    displayProducts(recommendedProducts);

  };

  //Navigation
  //Function to navigate to the Customer Ratings and Reviews Screen
  function handleReviewsNavigation() {
    navigation.navigate("CustomerReviewsScreen.js");
  };

  //Function to navigate to the Company Missions and Visions Screen
  function handleMissionNavigation () {
    navigation.navigate("CompanyMissionScreen.js");
  };

  //Function to navigate to the Certifications Screen
  function handleCertificationsNavigation () {
    navigation.navigate("CertificationsScreen.js");
  };

  return (
    <Group2Layout headercomponent = {<HeaderLayout />}
                      catagoryfilter = {<Categories />}
                      welcomesection = {<WelcomeSection />}
                      headinglabel={<CLabel />}
                      catalogboxsection = {<ProductList/>}
                      tilessection = {<Tiles />}               
    />
  );
}

export default HomeScreen;