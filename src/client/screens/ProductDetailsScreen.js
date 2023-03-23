import React, { useState, useEffect } from 'react';
import Header from './components/Header'; //import the custom created header component
import Footer from './components/Footer'; //import the custom created footer component
import ProductImageGallery from './components/ProductImageGallery'; //import the productsimagegallery component
import ProductTitle from './components/ProductTitle'; //import the custom created product title sub-component
import ProductRating from './components/ProductRating'; //import the product rating sub-component
import ProductPrice from './components/ProductPrice'; //import the product price sub-component
import ProductDescription from './components/ProductDescription'; //import the product description sub-component
import RatingForm from './components/RatingForm'; //import the custom created rating form component
import RelatedProducts from './components/RelatedProducts'; //import the custom created related products component
import styles from './styles'; //import the custom stylesheet

const ProductDescriptionScreen = (props) => {
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

  return (
    <div className="product-description-screen">
      <Header />
      <main>
        <ProductImageGallery images={product.images} />
        <div className="product-details">
          <ProductTitle title={product.title} />
          <ProductRating rating={product.rating} />
          <ProductPrice price={product.price} />
          <ProductDescription description={product.description} />
          <div className="ratings-reviews">
            <h2>Ratings and Reviews</h2>
            <RatingForm onRatingSubmit={handleRatingSubmit} />
          </div>
          <RelatedProducts products={product.relatedProducts} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDescriptionScreen;
