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
  function handleSearchProduct (searchTerm) {
    //******Perform search operation to pull product from database *******
    //Make a database call to retrieve the product based on the search item
    const searchResults = getProductsBySearchTerm(searchTerm);

    //Navigate to the Product Listing Screen
    navigateToProductListingScreen(searchResults);
  };

  //Function to navigate to the Product Listing Screen when a category is selected
  function handleCategoryClick (category) {
    //**** Perform operation to pull products that form part of the selected category from the database
    //Fetch products from the database that belong to the selected category
    const products = fetchProductsByCategory(category);

    //Navigate to the Product Listing Screen and pass in the products data as props
    navigateToProductListingScreen(products);
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
  function handleCustomerReviews() {
    navigation.navigate("CustomerReviews.js");
  }

  //Function to navigate to the Company Missions and Visions Screen
  const handleCompanyMission = () => {
    navigation.navigate("CompanyMission.js");
  };

  //Function to navigate to the Certifications Screen
  const handleCertifications = () => {
    navigation.navigate("Certifications.js");
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