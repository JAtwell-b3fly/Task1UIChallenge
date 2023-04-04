import React from 'react';
import {View,VStack,HStack,Heading,Text,Container,Center} from 'native-base';

// Import necessary components and sub-components
import { HeaderLayout } from '../../components/Layouts/Header'; //import the custom created header component
import ShippingForm from './client/components/Forms/ShippingForm'; //import the custom created shipping form component
import BillingForm from './client/components/Forms/BillingForm'; //import the custom created billing form component
import PaymentForm from './client/components/Forms/PaymentForm'; //import the custom created payment form component
import backButton from './client/components/common/IconButton'
import { CLabel } from '../../components/common/Label';
import { Group13Layout } from '../../Screens/Layouts/Group13Layout';

import style from './styles.css'; //import the custom created stylesheet

//Actions
 // Define state variables and functions for handling form data
 const [shippingInfo, setShippingInfo] = useState({});
 const [billingInfo, setBillingInfo] = useState({});
 const [paymentInfo, setPaymentInfo] = useState({});

 const handleShippingSubmit = (data) => {
   setShippingInfo(data);
 };

 const handleBillingSubmit = (data) => {
   setBillingInfo(data);
 };

 const handlePaymentSubmit = (data) => {
   setPaymentInfo(data);
   // Submit all form data to database using API management tool
 };

 const handleCheckboxChange = (e) => {
   if (e.target.checked) {
     setBillingInfo(shippingInfo);
   } else {
     setBillingInfo({});
   }
 };

 /* 
 <div className="checkbox-container">
          <input type="checkbox" id="same-as-billing" onChange={handleCheckboxChange} />
          <label htmlFor="same-as-billing">Same as shipping</label>
        </div>

  <BillingForm onSubmit={handleBillingSubmit} initialValues={billingInfo} />

  <PaymentForm onSubmit={handlePaymentSubmit} />

  <PaymentForm onSubmit={handlePaymentSubmit} />
 */

export default function CheckoutScreen() {
 
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
