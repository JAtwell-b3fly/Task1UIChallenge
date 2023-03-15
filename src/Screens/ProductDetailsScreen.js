import React, { useState, useEffect } from "react";
import ProductHeader from "./ProductHeader";
import ProductGallery from "./ProductGallery";
import ProductTitle from "./ProductTitle";
import ProductRating from "./ProductRating";
import ProductDescription from "./ProductDescription";
import RatingAndReviews from "./RatingAndReviews";
import RelatedProducts from "./RelatedProducts";
import ProductFooter from "./ProductFooter";
import "./productDescription.css";

const ProductDescription = ({ productId }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://api.example.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div>
      <ProductHeader />
      <ProductGallery images={product.images} />
      <ProductTitle title={product.title} />
      <ProductRating rating={product.rating} price={product.price} />
      <ProductDescription description={product.description} />
      <RatingAndReviews />
      <RelatedProducts relatedProducts={product.relatedProducts} />
      <ProductFooter />
    </div>
  );
};

export default ProductDescription;
