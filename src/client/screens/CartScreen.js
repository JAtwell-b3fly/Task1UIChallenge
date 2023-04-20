import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { getProductById } from "../utils/api";

import { HeaderLayout } from "../../components/Layouts/Header";
import { CLabel } from "../../components/common/Label";
import { CartPILayout } from "../../components/Layouts/cartProductItem";
import CalulationSection from '../../components/Layouts/CalulationSection';
import { Group4Layout } from "../../Screens/Layouts/Group4Layout";
import Button from '../../components/common/IconButton';
import { createElement } from "react";

const ShoppingCart = () => {
  
  //Navigation: BACKBUTTON - to navigate back to the previous screen
  function handleBackButton() {
    //Navigate back to the previous screen
    window.history.back();
  }

  //Action: DISPLAY THE CART PRODUCT

  //code to retrive cart items data from database and display in cart-catalogbox
  //each cart item should contain the product image, product title, product price, product short description, delete button and quantity
  //for each unique product in the cart, there should be a radio button for the quantity selection
  //and + and - buttons to increase or decrease the quantity of the cart item
  //if the user adds the same product more than once to the cart, it should increase the quantity accordingly
  //the delete button should remove the unique product or cart item from the cart-catalogbox

  function displayCartProducts() {
    // set initial state for cart items, total and cart empty status
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [isCartEmpty, setIsCartEmpty] = useState(true);

    //function to retrieve cart items from database
    const retrieveCartItemsFromDatabase = () => {
      // use the db function to retrieve cart items data
      const cartItemsData = db.getCartItems();

      //check if cart items data is not empty
      if (cartItemsData.length > 0) {
        setIsCartEmpty(false);
      }

      //create a new array of cart items with quantity property
      const cartItemsWithQuantity = cartItemsData.map((item) => {
        return {
          ...item,
          quantity: 1,
        };
      });

      // set the cart items state with the new array
      setCartItems(cartItemsWithQuantity);
    };

    useEffect(() => {
      retrieveCartItemsFromDatabase();
    }, {});

    //function to handle cart item removal
    const handleCartItemRemoval = (productId) => {
      //filter out the cart item with matching productId
      const updatedCartItems = cartItems.filter(item => item.productId !== productId);
      setCartItems(updatedCartItems);
      calculatedTotal(updatedCartItems);
    };

    const cartCatalogBox = document.getElementById("cart-catalogbox");
    cartCatalogBox.innerHTML = "";

    cartItemsData.forEach((cartItem) => {
      const { productId, title, price, productShortDescription, imageUrl } = cartItem;
      const existingCartItem = cartItems.find((item) => item.productId ===productId);

      //Create cart item elements
      const createCartItemElement = (cartItemData) => {
        //Create cart item container element
        const cartItemContainer = document.createElement("div");
        cartItemContainer.classList.add("cart-item");

        //Create cart item image element
        const cartItemImage = document.createElement("img");
        cartItemImage.src = cartItemData.productImage;
        cartItemImage.alt = cartItemData.productTitle;
        cartItemContainer.appendChild(cartItemImage);

        //Create cart item info container element
        const cartItemInfoContainer = document.createElement("div");
        cartItemInfoContainer.classList.add("cart-item-info");

        //Create cart item title element
        const cartItemTitle = document.createElement("h3");
        cartItemTitle.textContent = cartItemData.productTitle;
        cartItemInfoContainer.appendChild(cartItemTitle);

        //Create cart item price element
        const cartItemPrice = document.createElement("p");
        cartItemPrice.textContent = "Price: $${cartItemData.productPrice.toFixed(2)}";
        cartItemInfoContainer.appendChild(cartItemPrice);

        //Create cart item short description element
        const cartItemShortDescription = document.createElement("p");
        cartItemShortDescription.textContent = cartItem.productShortDescription;
        cartItemShortDescription.classList.add("cart-item-short-description");

        //Create cart item quantity element
        const cartItemQuantity = document.createElement("div");
        cartItemQuantity.classList.add("cart-item-quantity");

        //Create cart item quantity input element
        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.value = 1;
        quantityInput.min = 1;
        quantityInput.max = 10;
        quantityInput.disabled = true; //disable user input
        quantityInput.classList.add("cart-item-quantity");
        quantityInput.addEventListener("change", () => {
          //Update cart item quantity
          const updatedCartItemsData = {
            ...cartItemData,
            quantity: parseInt(cartItemQuantityInput.value)
          };
          const updatedCartItemData = cartItemsData.map((itemData) => {
            if (itemData.productId === updatedCartItemData.productId) {
              return updatedCartItemData;
            }
            return itemData;
          });
          setCartItemsData(updatedCartItemsData);
        });
        quantityInput.appendChild(cartItemQuantityInput);

        //Create delete button and add event listener
        const deleteButton = createDeleteButton(cartItem.productId);
        deleteButton.addEventListener("click", () => handleCartItemRemoval(cartItem.productId));

        cartItemDetails.append(cartItemTitle, cartItemShortDescription, cartItemPrice, quantityInput, deleteButton);
        cartItemContainer.append(cartItemImage, cartItemDetails);
        cartCatalogBox.append(cartItemContainer);
      }

      // Create delete button and add event listener
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");
      deleteButton.innerHTML = "Delete";
      deleteButton.addEventListener("click", () => {
        handleCartItemRemoval(productId);
      });
      cartItemInfoContainer.appendChild(deletebutton);
      cartItemContainer.appendChild(cartItemInfoContainer);

      //Append delete button to cart item element
      cartItemElement.appendChild(deleteButton);

      //Append cart item element to catalog box
      cartCatalogBox.appendChild(cartItemElement);

      //Return cart item container
      return cartItemContainer;
    });

    //update cart items state with filtered array
    setCartItems(filteredCartItems);

    //update total state by recalculating total
    const newTotal = filteredCartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    setTotal(newTotal);

    //update cart empty status
    if (filteredCartItems.length === 0) {
      setIsCartEmpty(true);
    }

    //function to handle quantity change
    const handleQuantityChange = (productId, operation) => {
      //find the cart item with matching productId
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === productId) {
          if (operation === "+") {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else if (operation === "-") {
            if (item.quantity > 1) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
          }
        }
        return item;
      });

      //update cart items state with the updated array
      setCartItems(updatedCartItems);

      //update total state by recalculating total
      const newTotal = updatedCartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotal(newTotal);
    };
  }



  //Action: CALCULATION SECTION - calculate the total cost of all cart items
  const calculateTotal = () => {
    //loop through all the cart items and calculate the total cost
    //total += (quantity times price of cart items)
    
    let total = 0;
    cartItems.forEach(item => {
      total += item.quantity * item.price;
    });
    setCartTotal(total);
  };

  //Action/Navigation: CONTINUE SHOPPING BUTTON - navigate to the Product Listing Screen with the cart items still in the cart
  function handleContinueShopping() {
    //code to navigate to Product Listing Screen
    //cart items should still remain in the cart

    navigate("ProductListingScreen.js", { category: "All Products" });
  };

  //Action/Navigation: CHECKOUT BUTTON - navigate to the Checkout Screen with the cart items still in the cart
  function handleCheckout() {
    //code to navigate to the Checkout Screen
    //cart items should still remain in the cart

    navigate("CheckoutScreen.js"); 
  };

  return (
    <Group4Layout headercomponent={<HeaderLayout />}
                  backbutton={<Button />}
                  headinglabel={<CLabel />}
                  cartsection={<CartPILayout />}
                  calculationsection={<CalulationSection />}
                  continueshoppingbutton={<Button />}
                  proceedbutton={<Button />}
    />
  );
}

export default ShoppingCart;