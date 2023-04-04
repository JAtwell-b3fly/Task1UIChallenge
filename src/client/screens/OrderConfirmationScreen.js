import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {View, VStack,HStack,Container,Center,Heading,Text} from 'native-base';

import { HeaderLayout } from '../../components/Layouts/Header'; //import the custom created header component
import { CLabel } from '../../components/common/Label';
import ShippingFormView from './client/components/Forms/ShippingFormView';
import BillingFormView from './client/components/Forms/BillingFormView';
import PaymentFormView from './client/components/Forms/PaymentFormView';
import OrderSummary from './client/components/Layouts/OrderSummary';
import { Group13Layout } from '../../Screens/Layouts/Group13Layout';

//Actions
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

  /*
 <TouchableOpacity onPress={handleVerifyPromoCode}>
              <Text>Verify Promo Code</Text>
            </TouchableOpacity>

  
  */

export default function OrderConfirmationScreen () {
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
