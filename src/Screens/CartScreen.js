import React from "react";
import Header from "./Header"; //import the custom created header component
import Footer from "./Footer"; //import the custom created footer component
import ProductCart from "./ProductCart"; //import the custom created product cart component

function ShoppingCart() {
  // Get cart data from database using API management tool
  const cartData = [];

  // Calculate total values based on cart data
  const subTotal = 0;
  const tax = 0;
  const total = 0;

  // Function to handle removing a product from the cart
  function handleRemoveProduct(productId) {
    // Update cart data in the database using API management tool
  }

  // Function to handle navigating back to the previous screen
  function handleBackNavigation() {
    // Navigate to previous screen using React Router or similar library
  }

  // Function to handle navigating to the checkout screen
  function handleCheckoutNavigation() {
    // Navigate to checkout screen using React Router or similar library
  }

  return (
    <div>
      <Header />
      <div>
        <button onClick={handleBackNavigation}>Back</button>
        <h1>Shopping Cart</h1>
        <div>
          {cartData.map((product) => (
            <ProductCart
              key={product.id}
              product={product}
              onRemove={handleRemoveProduct}
            />
          ))}
        </div>
        <div>
          <p>Sub-Total:</p>
          <p>{subTotal}</p>
        </div>
        <div>
          <p>Tax:</p>
          <p>{tax}</p>
        </div>
        <div>
          <p>Total:</p>
          <p>{total}</p>
        </div>
        <div>
          <button onClick={handleCheckoutNavigation}>Checkout</button>
          <button>Continue Shopping</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCart;
