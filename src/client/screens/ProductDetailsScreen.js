import React, { useState, useEffect } from 'react';
import Header from './client/components/Layouts/Header'; //import the custom created header component
import ProductGallery from './client/components/Layouts/ProductGallery'; //import the productsimagegallery component
import ProductName from './client/components/Layouts/ProductName'; //import the name of the product pulled from the database based on the product selected
import ProductDescription from './client/components/Layouts/ProductDescription'; //import the description of the product description pulled from the database based on the product selected
import ProductPrice from './client/components/Layouts/ProductPrice'; //import the price of the product from the database based on the product selected
import AddToCartButton from './client/components/Layouts/AddToCartButton'; //import the add to cart button that adds the product to the shopping cart
import AddToWishlistButton from './client/components/Layouts/AddToWishlistButton'; //import the add to wishlist button that adds the product to the wishlist
import AvgReviewRating from './client/components/Layouts/AvgReviewRating'; //import the component to pull the average rating of the product and the mode of the reviews within range of the average rating
import HeaderLabel from './client/components/HeaderLabel';
import CatalogBoxsection from './client/components/CatalogBoxsection';
import SafetyInformation from './client/component/SafetyInformation';
import Rating&ReviewFormSection from './client/components/Rating&ReviewFormSection';
import { Group3Layout } from '../../Screens/Layouts/Group3Layout';

//Actions
const [product, setProduct] = useState({});
const productId = props.match.params.id; // Get product ID from URL

useEffect(() => {
  // Fetch product data from backend API based on ID
  // Update product state
}, [productId]);

const handleRatingSubmit = (ratingData) => {
  // Send rating data to backend API
  // Update product rating state
};

// Get the product ID from the URL
//const urlParams = new URLSearchParams(window.location.search);
//const productId = urlParams.get('productId');

// Fetch the product data from the database using the product ID
//fetch(`/api/products/${productId}`)
//  .then(response => response.json())
//  .then(product => {
  // Use the product data to populate the screen components
  //const productTitle = document.getElementById('product-title');
  //productTitle.textContent = product.title;

  //const productImage = document.getElementById('product-image');
  //productImage.src = product.image;

  //const productPrice = document.getElementById('product-price');
  //productPrice.textContent = `$${product.price}`;

  // ...
//  })
//  .catch(error => {
//    console.error(error);
//  });

export default function ProductDescriptionScreen (props) {
  return (
    <Group3Layout headerComponent={<HeaderComponent />}
                  productGallery={<ProductGallery />}
                  backButton={<BackButton />}
                  addToCart={<AddToCartButton />}
                  addToWishlist={<AddToWishlistButton />}
                  productName={<ProductName />}
                  productPrice={<ProductPrice />}
                  modeReviewAndAvgRating={AvgReviewRating />}
                  productDescription={ProductDescription />}
                  safetyInformationSection={SafetyInformation />}
                  ratingsAndReviewFormSection={<Rating&ReviewFormSection />}
                  headinglabel={<HeadingLabel />}
                  catalogboxsection={<CatalogBoxsection />}
    />
  );
};
