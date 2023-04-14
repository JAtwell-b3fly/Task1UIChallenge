import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { getProductList} from "../services/productService";
import { useHistory} from "react-router-dom";

// Import external components and sub-components
import { HeaderLayout } from '../../components/Layouts/Header'; //import the custom created header component
import { Categories } from '../../components/Forms/categoryFilter'; //import the custom created filter component
import { ProductList } from '../../components/Forms/ProductList'; //import the custom created catalogbox component
import { CLabel } from '../../components/common/Label'; //import the custom created Heading Label section component
import { Group2Layout } from '../../Screens/Layouts/Group2LayoutTest';

import styles from '../src/shared/ProductListingScreenStyles.css'; //import the custom created stylesheet


const ProductListingScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);

  //ACTION
  //handle search query
  function handleSearchProduct (searchProduct) {
    //Make a database call to retrieve the product based on the search item
    const searchResults = getProductsBySearchQuery(searchProduct);

    //display the search results on the screen
    displaySearchResults(searchResults);
  };



  //handle category click action
  const handleCategoryClick = (category) => {
    //Retrieve product data from database based on category
    const categoryResults = getProductsByCategory(category);

    //Display category results on the screen
    displayProducts(categoryResults);
  };

  function displayProducts(products) {
    //Clear previous search or category results
    clearProductsList();

    //Create product list elements for each product
    products.forEach((product) => {
      const productListItem = document.createElement("li");
      productListItem.textContent = product.name;

      //Add product to the product list
      const productList = document.querySelector("#product-list");
      productList.appendChild(productListItem);
    });
  };

  function clearProductList () {
    const productList = document.querySelector("#product-lsit");
    productList.innerHTML = "";
  };



  // handle product details navigation
  const handleProductDetailsNavigation = (productId) => {
    //Get the product details from the database based on the productID
    const product = db.products.find({ id: productId });

    //navigate to product details screen
    navigation.navigate("ProductDetailsScreen.js", {product: product});
  };


  
  //define handleAddToCart action
  function handleAddToCart (productId) {
    // Find the product in the database by its ID
    const product = db.products.find(p => p.id === productId );

    //Add the product to the cart
    cart.addItem(product);

    //Display a success message to the user
    alert("Successfully added ${product.name} to your cart!");

    //update cart icon in header
    updateCartIcon();
  };



  //handle view cart navigation
  const handleViewCartNavigation = () => {
    //navigate to the cart screen
    navigateTo("ShoppingCartScreen.js");
  };



  //handle checkout navigation
  function handleCheckoutNavigation() {
    //Navigate to the Checkout Screen
    navigateTo("CheckoutScreen.js");
  };

  

  return (
      <Group2Layout headingcomponent={<HeaderLayout />}
                    categoryfilter={<Categories />}
                    headinglabel={<CLabel />}
                    catalogboxsection={<ProductList />}
      />
  );
}

export default ProductListingScreen;

