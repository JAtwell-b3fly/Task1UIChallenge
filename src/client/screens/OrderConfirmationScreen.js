import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header'; //import the custom created header component
import Footer from "./Footer"; //import the custom created footer component

const OrderConfirmationScreen = ({ navigation }) => {
  const [shippingData, setShippingData] = useState(null);
  const [billingData, setBillingData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);
  const [promoCode, setPromoCode] = useState(null);
  const [isPromoValid, setIsPromoValid] = useState(false);
  const [subTotal, setSubTotal] = useState(null);
  const [tax, setTax] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    // Fetch shipping data from the database using API
    // setShippingData(responseData);

    // Fetch billing data from the database using API
    // setBillingData(responseData);

    // Fetch payment data from the database using API
    // setPaymentData(responseData);

    // Calculate sub-total, tax, discount, and total
    // setSubTotal(subTotalValue);
    // setTax(taxValue);
    // setDiscount(discountValue);
    // setTotal(totalValue);
  }, []);

  const handleVerifyPromoCode = () => {
    // Send promo code to the backend for validation using API
    // setIsPromoValid(isValid);
  };

return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.heading}>Order Confirmation</Text>
        <View />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Shipping Information</Text>
        {shippingData && (
          <View style={styles.formView}>
            {/* Display shipping information */}
          </View>
        )}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Billing Information</Text>
        {billingData && (
          <View style={styles.formView}>
            {/* Display billing information */}
          </View>
        )}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Payment Information</Text>
        {paymentData && (
          <View style={styles.formView}>
            {/* Display payment information */}
            <TouchableOpacity onPress={handleVerifyPromoCode}>
              <Text>Verify Promo Code</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Order Summary</Text>
        <View style={styles.totalView}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Sub-Total</Text>
            <Text style={styles.totalValue}>{subTotal}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Tax</Text>
            <Text style={styles.totalValue}>{tax}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Discount</Text>
            <Text style={styles.totalValue}>{discount}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderConfirmationScreen;
