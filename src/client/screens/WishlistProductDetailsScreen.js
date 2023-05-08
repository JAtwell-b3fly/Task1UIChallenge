import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getProductDetails } from '../api/products'; // import function to get product details from the API

import { HeaderLayout } from '../../components/Layouts/Header';//import the custom created header component
import ProductGallery from './client/components/Layouts/ProductGallery'; //import the productsimagegallery component
import ProductName from './client/components/Layouts/ProductName'; //import the name of the product pulled from the database based on the product selected
import ProductDescription from './client/components/Layouts/ProductDescription'; //import the description of the product description pulled from the database based on the product selected
import ProductPrice from './client/components/Layouts/ProductPrice'; //import the price of the product from the database based on the product selected
import CartButton from './client/components/common/iconButton';//import the add to cart button that adds the product to the shopping cart
import BackButton from './client/components/common/iconButton';
import AvgReviewRating from './client/components/Layouts/AvgReviewRating'; //import the component to pull the average rating of the product and the mode of the reviews within range of the average rating
import { CLabel } from '../../components/common/Label';
import { ProductList } from '../../components/Forms/ProductList';
import SafetyInformation from './client/component/SafetyInformation';
import Rating&ReviewFormSection from './client/components/Rating&ReviewFormSection';
import { Group3Layout } from '../../Screens/Layouts/Group3Layout';

const WishlistDetailsScreen = () => {

    const navigation = useNavigation(); // initialize navigation

    const [searchQuery, setSearchQuery] = useState("");
    const [cartItems, setCartItems] = useState("");
    const [productDetails, setProductDetails] = useState("");
    const [relatedProducts, setRelatedProducts] = useState("");
    const [reviews, setReviews] = useState("");

    const [productTitle, setProductTitle] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productLongDescription, setProductLongDescription] = useState("");
    const [productRating, setProductRating] = useState("");
    const [productReviews, setProductReviews] = useState([]);

    const { productId } = route.params;

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
    setProductTitle(product.title);
    setProductPrice(product.price);
    setProductLongDescription(product.longdescription);
    setProductRating(product.rating);
    setProductReviews(product.reviews);
    }

  //Navigation

  // handle proceed button press
  const handleProceedButtonPress = () => {
    // navigate to the Shopping Cart Screen passing the product ID as a parameter
    navigation.navigate('CartScreen.js', { productId: productId });
  };

  //handle back button press
  const handleBackButtonPress = () => {
    //navigate to the Wishlist Screen
    navigation.navigate('WishlistScreen.js');
  };

    return(
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
    )
}

export default WishlistDetailsScreen;