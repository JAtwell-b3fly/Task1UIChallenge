import React, { useState, useEffect} from 'react';
import {View,VStack,HStack,Heading,Text,Container,Center} from 'native-base';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

//Import action creators for state management
import { setShippingInfo, setBillingInfo, setPaymentMethod} from "./actions/checkoutActions";

// Import necessary components and sub-components
import { HeaderLayout } from '../../components/Layouts/Header'; //import the custom created header component
import ShippingForm from './client/components/Forms/ShippingForm'; //import the custom created shipping form component
import BillingForm from './client/components/Forms/BillingForm'; //import the custom created billing form component
import PaymentForm from './client/components/Forms/PaymentForm'; //import the custom created payment form component
import backButton from './client/components/common/IconButton'
import { CLabel } from '../../components/common/Label';
import { Group13Layout } from '../../Screens/Layouts/Group13Layout';

import style from './styles.css'; //import the custom created stylesheet

const CheckoutScreen = () => {
  const navigation = useNavigation();
 
  // Define state variables for shipping, billing, and payment data
  const shippingInfo = useSelector(state => state.checkout.shippingInfo);
  const billingInfo = useSelector(state => state.checkout.billingInfo);
  const paymentMethod = useSelector(state => state.checkout.paymentMethod);

  //Define dispatch function for updating state variables
  const dispatch = useDispatch();

    //Initialise state for form input values and subnission status
    const [shipfirstName, setShipFirstName] = useState("");
    const [billfirstName, setBillFirstName] = useState("");
    const [shiplastName, setShipLastName] = useState("");
    const [billlastName, setBillLastName] = useState("");
    const [shipemail, setShipEmail] = useState("");
    const [billemail, setBillEmail] = useState("");
    const [shipaddress, setShipAddress] = useState("");
    const [billaddress, setBillAddress] = useState("");
    const [shipcity, setShipCity] = useState("");
    const [billcity, setBillCity] = useState("");
    const [shipnumber, setShipNumber] = useState("");
    const [billnumber, setBillNumber] = useState("");
    const [shipprovince, setShipProvince] = useState("");
    const [billprovince, setBillProvince] = useState("");
    const [shipareaCode, setShipAreaCode] = useState("");
    const [billareaCode, setBillAreaCode] = useState("");
    const [shipcountry, setShipCountry] = useState("");
    const [billcountry, setBillCountry] = useState("");
    const [accountHolderName, setAccountHolderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCVV] = useState("");
    const [bankName, setBankName] = useState("");
    const [branchCode, setBranchCode] = useState("");
    const [promoCode, setPromoCode] = useState("");
    const [shippingInfoSubmitted, setShippingInfoSubmitted] = useState(false);
    const [billingInfoSubmitted, setBillingInfoSubmitted] = useState(false);
    const [paymentMethodSubmitted, setPaymentMethodSubmitted] = useState(false);

    useEffect(() => {
      //Add event listener to submit button Shipping Info Form
      const submitButton1 = document.querySelector("#shipping-info-submit-button");
      submitButton1.addEventListener("click", handleShippingInfoSubmit);

      //Remove event listener on unmount
      return () => {
        submitButton1.removeEventListener("click", handleShippingInfoSubmit);
      };
    });

    useEffect(() => {
      //Add event listener to submit button Billing Info Form
      const submitButton2 = document.querySelector("#billing-info-submit-button");
      submitButton2.addEventListener("click", handleBillingInfoSubmit);

      //Remove event listener on unmount
      return () => {
        submitButton2.removeEventListener("click", handleBillingInfoSubmit);
      };
    })

    useEffect(() => {
      //Add event listener to submit button Payment Method Form
      const submitButton3 = document.querySelector("#payment-method-submit-button");
      submitButton3.addEventListener("click", handlePaymentMethodSubmit);

      //Remove event listener on unmount
      return () => {
        submitButton3.removeEventListener("click", handlePaymentMethodSubmit);
      }
    })

  //Define event listener functions for form submissions
  const handleShippingInfoSubmit = (e) => {
    e.preventDefault();

    //Store the input data in the database
    db.collection("shippingInfo").add({
      shipfirstName: shipfirstName,
      shiplastName: shiplastName,
      shipaddress: shipaddress,
      shipemail: shipemail,
      shipnumber: shipnumber,
      shipcity: shipcity,
      shipprovince: shipprovince,
      shipcountry: shipcountry,
      shipareaCode: shipareaCode
    })

    .then(() => {
      //Update the state to indicate that the shipping information has been submitted
      setShippingInfoSubmitted(true);
    })

    .catch((error) => {
      console.error("Error storing shipping info in database: ", error);
    });
  };

  const handleBillingInfoSubmit = (e) => {
    e.preventDefault();

    //Store the input data in the database
    db.collection("billingInfo").add({
      billfirstName: billfirstName,
      billlastName: billlastName,
      billaddress: billaddress,
      billemail: billemail,
      billnumber: billnumber,
      billcity: billcity,
      billprovince: billprovince,
      billcountry: billcountry,
      billareaCode: billareaCode
    })

    .then(() => {
      //Update the state to indicate that the billing information has been submitted
      setBillingInfoSubmitted(true);
    })

    .catch((error) => {
      console.error("Error storing billing info in database: ", error);
    });
  }; 

  const handlePaymentMethodSubmit = (e) => {
    e.preventDefault();

    //Store the input data in the database
    db.collection("paymentMethod").add({
      accountHolderName: accountHolderName,
      cardNumber: cardNumber,
      cvv: cvv,
      bankName: bankName,
      branchCode: branchCode,
      promoCode: promoCode
    })

    .then(() => {
      //Update the state to indicate that the Payment Method information has been submitted
      setPaymentMethodSubmitted(true);
    })

    .catch((error) => {
      console.error("Error storing payment method info in database: ", error);
    });
  };

  //Define function for navigating to Product Listing Screen
  const handleContinueShopping = () => {
    navigation.navigate("ProductListingScreen.js", { category: "All Products"});
  }

  //Handle navigation to the Order Confirmation Screen
  const handleProceed = () => {
    navigation.navigate("OrderConfirmationScreen.js");
  }

  //Handle navigation to the previous page Cart Screen
  const handleBack = () => {
    navigation.navigate("CartScreen.js");
  }

  return (
    <Group13Layout headercomponent={<HeaderLayout />}
                  backbutton={<backButton />}
                  headinglabel={<CLabel />}
                  sectionlabel1={<CLabel />}
                  shippingformsection={<ShippingForm />}
                  sectionlabel2={<CLabel />}
                  billingaddressformsection={<BillingForm />}
                  sectionlabel3={<PaymentForm />}

    />
  );
}

export default CheckoutScreen;