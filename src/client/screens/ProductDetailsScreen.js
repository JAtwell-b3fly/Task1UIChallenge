import React, { useState, useEffect } from 'react'; 
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { getProductList} from "../services/productService";
import { useHistory} from "react-router-dom";

import { HeaderLayout } from '../../components/Layouts/Header';//import the custom created header component
import ProductGallery from './client/components/Layouts/ProductGallery'; //import the productsimagegallery component
import ProductName from './client/components/Layouts/ProductName'; //import the name of the product pulled from the database based on the product selected
import ProductDescription from './client/components/Layouts/ProductDescription'; //import the description of the product description pulled from the database based on the product selected
import ProductPrice from './client/components/Layouts/ProductPrice'; //import the price of the product from the database based on the product selected
import CartButton from './client/components/common/iconButton';//import the add to cart button that adds the product to the shopping cart
import WishlistButton from './client/components/common/iconButton'; //import the add to wishlist button that adds the product to the wishlist
import BackButton from './client/components/common/iconButton';
import AvgReviewRating from './client/components/Layouts/AvgReviewRating'; //import the component to pull the average rating of the product and the mode of the reviews within range of the average rating
import { CLabel } from '../../components/common/Label';
import { ProductList } from '../../components/Forms/ProductList';
import SafetyInformation from './client/component/SafetyInformation';
import Rating&ReviewFormSection from './client/components/Rating&ReviewFormSection';
import { Group3Layout } from '../../Screens/Layouts/Group3Layout';

import {getProductById} from "../api/products";

const ProductDescriptionScreen = () => {

  //Use State for the Product Details Screen
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState("");
  const [wishlistItems, setWishlistItems] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [relatedProducts, setRelatedProducts] = useState("");
  const [reviews, setReviews] = useState("");

  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productLongDescription, setProductLongDescription] = useState("");
  const [productRating, setProductRating] = useState("");
  const [productReviews, setProductReviews] = useState([]);

  const{ productId } = route.params;

  //Action: DISPLAY PRODUCT DETAILS
  function handleProductDetails(productId) {
   //1. Retrieve the product data from the database based on the productId
   const product = getProductsById(productId);

   //2. Extract the necessary data from the product object
   useEffect(() => {
    const product = getProductById(productId);

    const productTitle = product.title;
    const productPrice = product.price;
    const productLongDescription = product.longdescription;
    const productRating = product.rating;
    const productReviews = product.reviews;
   }, []);

   //3. Update the state with the product details
   setTitle(productTitle);
   setProductPrice(productPrice);
   setProductLongDescription(productLongDescription);
   setProductRating(productRating);
   setReviews(productReviews);
  }

  //Action: SEARCH BAR PRODUCT QUERY SEARCH
  const handleSearchQuery = (searchQuery) => {
    //Search for the product with the given query in the database
    const searchedProduct = searchForProduct(searchQuery);

    //Navigate to Product Listing Screen with searched product data
    navigation.navigate("ProductLisingScreen.js", { products: [searchProduct] });
  }

  //Action: ADD REVIEW AND RATING TO THE PRODUCTS
  function handleAddReview(rating, review) {
    //Get the product ID of the currently displayed product
    const productId = getProductDetails().id;

    //Construct the review object to be saved to the database
    const newReview = {
      rating: rating,
      review: review
    };

    //Save the review to the database for the product with the corresponding ID
    db.products.update(
      { id: productId},
      { $push: { reviews: newReview } }
    );
  }


  //Action: ADD PRODUCT TO CART
  function handleAddToCart(productId) {
    const product = getProductById(productId);
    //Add product to cart
    const updatedCart = [...cart, product];
    setCartItems(updatedCart);

    //Display a message to confirm that the product has been added to the cart
    alert("${product.title} has been added to your cart.");
  }

  //Action: HANDLE RELATED PRODUCTS
  function handleRelatedProducts(productId) {
    const relatedProducts = getRelatedProductsById(productId);

    //Display related products on the screen
    const relatedProductsContainer = document.querySelector("#related-products-container");
    relatedProductsContainer.innerHTML = "";

    relatedProducts.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      const productDescription = document.createElement("p");
      productDescription.textContent = product.shortDescription;

      const productPrice = document.createElement("p");
      productRating.textContent = "$${product.price}";

      const productRating = document.createElement("p");
      productRating.textContent = "Rating: ${product.rating}";

      productCard.appendChild(productTitle);
      productCard.appendChild(productDescription);
      productCard.appendChild(productPrice);
      productCard.appendChild(productRating);

      relatedProductsContainer.appendChild(productCard);
    });
  }

  //Navigation: PRODUCT LISTING SCREEN
  function handleProductListingNavigation() {
    //Navigation to Product Listing Screen
    navigation.goBack();
  }

  //Navigation: WISHLIST SCREEN
  function handleWishlistNavigation() {
    //Navigation to Wishlist Screen
    if (isLoggedIn) {
      navigation.navigate("WishlistScreen.js");
    } else {
      navigation.navigate("LoginScreen.js");
    } 
  }

  //Navigation: CART SCREEN
  function handleCartNavigation() {
    //Navigation to Cart Screen
    navigation.navigate("CartScreen.js");
  }

  return (
    <Group3Layout headerComponent={<HeaderLayout />}
                  productGallery={<ProductGallery />}
                  backButton={<BackButton />}
                  addToCart={<CartButton />}
                  addToWishlist={<WishlistButton />}
                  productName={<ProductName />}
                  productPrice={<ProductPrice />}
                  modeReviewAndAvgRating={AvgReviewRating />}
                  productDescription={ProductDescription />}
                  safetyInformationSection={SafetyInformation />}
                  ratingsAndReviewFormSection={<Rating&ReviewFormSection />}
                  headinglabel={<CLabel/>}
                  catalogboxsection={<ProductList />}
    />
  );
};

export default ProductDescriptionScreen;