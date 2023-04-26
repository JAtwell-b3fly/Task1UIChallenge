import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {View, VStack,HStack,Container,Center,Heading,Text} from 'native-base';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase/firebase";

import { HeaderLayout } from '../../components/Layouts/Header'; //import the custom created header component
import { CLabel } from '../../components/common/Label';
import ShippingFormView from './client/components/Forms/ShippingFormView';
import BillingFormView from './client/components/Forms/BillingFormView';
import PaymentFormView from './client/components/Forms/PaymentFormView';
import OrderSummary from './client/components/Layouts/OrderSummary';
import { Group13Layout } from '../../Screens/Layouts/Group13Layout';

const OrderConfirmationScreen = () => {

  //State variables for form views
  const [shippingInfo, setShippingInfo] = useState({});
  const [billingInfo, setBillingInfo] = useState({});
  const [paymentMethod, setPaymentMethod] = useState({});
  const [promoCode, setPromoCode] = useState("");

  //State variable for order summary
  const [orderTotal, setOrderTotal] = useState(0);

  //State variables for promo code verification
  const [promoCodeValid, setPromoCodeValid] = useState(false);
  const [promoCodeError, setPromoCodeError] = useState("");
  const [error, setError] = useState("");
  const [promoCodeDiscount, setPromoCodeDiscount] = useState(0);
  const [isPromoCodeValid, setIsPromoCodeValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  //Navigation
  const navigation = useNavigation();

  //Retrieve data from database and update state
  useEffect(() => {
    // get the shipping info, billing address, payment method, cart data and promo code from the database
    db.collection("shippingInfo").orderBy('createdAt','desc').limit(1).get()
      .then((querySnapshot) => {
        setShippingInfo(querySnapshot.docs[0].data());
      })
      .catch((error) => {
        console.error("Error fetching shipping info from database: ", error);
      });

    
    db.collection("billingInfo").orderBy('createdAt', 'desc').limit(1).get()
      .then((querySnapshot) => {
        setBillingInfo(querySnapshot.docs[0].data());
      })
      .catch((error) => {
        console.error("Error fetching billing info from database", error);
      });


    db.collection("paymentMethod").orderBy('createdAt', 'desc').limit(1).get()
      .then((querySnapshot) => {
        setPaymentMethod(querySnapshot.docs[0].data());
      })
      .catch((error) => {
        console.error("Error fetching payment method from database", error);
      });


    db.collection("cart").get()
      .then((querySnapshot) => {
        const cartData = [];

        querySnapshot.forEach((doc) => {
          cartData.push(doc.data());
        });

        db.collection("promoCode").get()
          .then((querySnapshot) => {
            let promoCode = "";

            querySnapshot.forEach((doc) => {
              promoCode = doc.data().promoCode;
            });

            if (isValidPromoCode(promoCode)) {
              setPromoCode(promoCode);
              calculateOrderTotal(cartData, promoCode);
            } else {
              setPromoCode("");
              setOrderTotal(calculateOrderTotal(cartData));
              setPromoCodeError("Invalid promo code. Please try again.");
            }
          })
          .catch((error) => {
            console.error("Error fetching promo code from database", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching cart data from database", error);
      });
  }, []);

  function myPromiseFunction() {
    return new Promise ((resolve, reject) => {
      //Do some async operation here

      //If operation is successful, call the resolve function with results as argument
      resolve("Operation completed successfully");

      //If operation fails, call the reject function with error as argument
      reject("Operation failed");
    });
  }

  //function to check the validity of the promo code
  function isValidPromoCode(promoCode) {
    return new Promise((resolve, reject) => {
      //Check if promo code exists in database
      db.collection("promoCodes").where("code", "==", promoCode).get()
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            //Promo code exists, resolve with discount value
            resolve(querySnapshot.docs[0].data().discount);
          } else {
            //Promo code doesn't exist, reject with error message
            reject("Invalid promo code");
          }
        })
        .catch((error) => {
          //An error occurred while fetching promo code, reject with error message
          reject("Error fetching promo code: ${error}");
        });
    });
  }

  //Verify Promo Code
  const verifyPromoCode = (promoCode) => {
    setIsPromoCodeValid(false);
    setPromoCodeDiscount(0);
    setErrorMsg("");

    db.collection("promoCodes").where('code', '==', promoCode).get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          //promo code is valid
          const promoCodeData = querySnapshot.docs[0].data();
          setPromoCode(promoCodeData.code);
          setPromoCodeDiscount(promoCodeData.discount);
          setIsPromoCodeValid(true);
        } else {
          //promo code is invalid
          setIsPromoCodeValid(false);
          setPromoCode("");
          setPromoCodeDiscount(0);
          setErrorMsg("Invalid promo code");
        }
      })
      .catch((error) => {
        console.error("Error fetching promo code from database: ", error);
      });
  }

  //Order Summary section

  //function to calculate the order total based on the cart data and promo code
  const calculateOrderTotal = (cartData, promoCode) => {
    let subtotal = 0;
    let discount = 0;

    //get the cart data from the database
    const cartDataRef = db.collection("cartData");
    cartDataRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const item = doc.data();
        const productId = doc.id;
        subtotal += item.price * item.quantity;
      });

    //check if promo code is valid and apply discount if it is
    if (isValidPromoCode(promoCode)) {
      discount = subtotal * 0.1; //apply 10% discount
    }

    //calculate total
    const total = subtotal - discount;

    //update the state variable
    setOrderTotal(total);

    //update the promo code validity status
    setPromoCodeValid(isValidPromoCode(promoCode));
  })
  };

  //call the calculateOrderTotal function with the cart data and promo code when they are available
  useEffect(() => {
    if (cartData && promoCode) {
      calculateOrderTotal(cartData, promoCode);
    }
  }, [cartData, promoCode]);

  //Search Bar Action and Navigation
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (searchQuery) => {
    searchForProduct(searchQuery)
    .then((searchedProduct) => {
      navigation.navigate("ProductListingScreen.js", { products: [searchedProduct] });
    })
    .catch((error) => {
      console.error("Error searching for product", error);
    });
  }

  const searchForProduct = (searchQuery) => {
    return new Product((resolve, reject) => {
      db.collection("products")
        .where("name", "==", searchQuery)
        .get()
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            const searchedProduct = querySnapshot.docs[0].data();
            resolve(searchedProduct);
          } else {
            reject("Product not found");
          }
        })
        .catch((error) => {
          reject("Error searching for product: ", error);
        });
    });
  };

  //Navigate to Checkout Screen when the back button is clicked
  const handleBackButtonPress = () => {
    navigation.navigate("CheckoutScreen.js");

    //reset the state
    setShippingInfo(null);
    setBillingInfo(null);
    setPaymentMethod(null);
    setOrderTotal(0);
  };

  return (
      <Group13Layout headercomponent={<HeaderLayout />}
                    headinglabel={<CLabel />}
                    sectionlabel1={<CLabel />}
                    shippingformviewsection={<ShippingFormView />}
                    sectionlabel2={<CLabel />}
                    billingaddressformviewsection={<BillingFormView />}
                    sectionlabel3={<CLabel />}
                    paymentmethodformviewsection={<PaymentFormView />}
                    sectionlabel4={<CLabel />}
                    orderconfirmationcalculationsection={<OrderSummary />}
      />
  );
};

export default OrderConfirmationScreen;