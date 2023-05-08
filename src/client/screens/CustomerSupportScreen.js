import React, { useState, useEffect } from "react";
import {View,VStack,HStack,Heading,Center,Text} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { getCustomerSupportDetails, submitFeedback, getFAQs } from '../api/customerSupport';

// Import necessary components and styles
import { SecondHeaderLayout } from '../../components/Layouts/HeaderOther'; //import the custom created new header component
import ScreenNav from './client/components/Layouts/ScreenNav'; //import the custom created screennav component
import CustomerSupportForm from './client/components/Forms/CustomerSupportForm'; //import the custom created customersupport form view component
import FeedbackForm from './client/components/Forms/FeedbackForm'; //import the custom created feedback form component
import FAQ from './client/components/Layouts/FAQ'; //import the cusotm created FAQ component
import { Group11Layout } from '../../Screens/Layouts/Group11Layout';

import styles from './CustomerSupport.css'; //import the external stylesheet
import { CLabel } from '../../components/common/Label';

const CustomerSupport = () => {

  const navigation = useNavigation();

  // State variables
  const [companyName, setCompanyName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [physicalAddress, setPhysicalAddress] = useState("");
  const [contactNumbers, setContactNumbers] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [faqs, setFAQs] = useState([]);

  // Get customer support details from the database
  useEffect(() => {
    const customerSupportDetails = getCustomerSupportDetails();
    setCompanyName(customerSupportDetails.companyName);
    setEmailAddress(customerSupportDetails.emailAddress);
    setPhysicalAddress(customerSupportDetails.physicalAddress);
    setContactNumbers(customerSupportDetails.contactNumbers);
  }, []);

  // Submit feedback to the database
  const handleFeedbackSubmit = () => {
    const feedbackData = { feedbackMessage, userId };
    submitFeedback(feedbackData);
    setFeedbackMessage("");
  }

  // Get frequently asked questions from the database
  useEffect(() => {
    const FAQs = getFAQs();
    setFAQs(FAQs);
  }, []);

   // Navigate to the FAQ details screen when an FAQ button is pressed
   const handleFAQButtonPress = (buttonId, FAQId) => {
    navigation.navigate('FAQDetailsScreen.js', { buttonId, FAQId });
  }

  //SCREENNAV NAVIGATION

  const handleAccountSettingsPress = () => {
    navigation.navigate('AccountInformationScreen.js');
  };

  const handlePaymentSettingsPress = () => {
    navigation.navigate('PaymentSettingsScreen.js');
  };

  const handleReturnRefundPress = () => {
    navigation.navigate('Return&RefundScreen.js');
  };

  const handleOrderPress = () => {
    navigation.navigate('OrderScreen.js');
  };

  const handleSafetyInformationPress = () => {
    navigation.navigate('SafetyInformationScreen.js');
  };
  
  const handleCustomerSupportPress = () => {
    navigation.navigate('CustomerSupportScreen.js');
  };

  return (
    <Group11Layout headercomponent2={<SecondHeaderLayout />}
                    screennavcomponent={<ScreenNav />}
                    headinglabel1={<CLabel />}
                    customersupportformviewcomponent={<CustomerSupportForm />}
                    headinglabel2={<CLabel />}
                    feedbackformsection={<FeedbackForm />}
                    headinglabel3={<CLabel />}
                    FAQssection={<FAQ />}
    />
  );
}

export default CustomerSupport;