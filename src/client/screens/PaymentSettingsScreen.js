import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {View,VStack,HStack,Container,Text,Center,Heading} from 'native-base';

import { SecondHeaderLayout } from '../../components/Layouts/HeaderOther'; //import the custom created header component
import ScreenNav from './client/components/Layouts/ScreenNav'; //import the custom created screennav buttons component
import PaymentSettingsFormView from './client/components/Forms/PaymentSettingsFormView'; //import the custom created paymentsettings form-view component
import PaymentSettingsForm from './client/components/Forms/PaymentSettingsForm'; //import the custom created paymentsettings form component
import { CLabel } from '../../components/common/Label';
import { Group5Layout } from '../../Screens/Layouts/Group5Layout';

import axios from 'axios';
import styles from './styles'; //import the custom stylesheet



const PaymentSettingsScreen = () => {

  const navigation = useNavigation();

  // Set up state variables
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [formValues, setFormValues] = useState({
    accountHolderName: '',
    cardNumber: '',
    bankName: '',
    CVVNumber: '',
    branchCode: ''
  });

  // Fetch payment method data from database
  useEffect(() => {
    // Code to fetch data from MySQL database goes here
    // Once data is fetched, update paymentMethods state variable
    setPaymentMethods(paymentMethodData);
  }, []);

  // Handle form input changes
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle edit button click
  const handleEditButtonClick = (paymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
    setEditMode(true);
    setAddMode(false);
    setFormValues(paymentMethod);
  };

  // Handle add button click
  const handleAddButtonClick = () => {
    setSelectedPaymentMethod(null);
    setAddMode(true);
    setEditMode(false);
    setFormValues({
      accountHolderName: '',
      cardNumber: '',
      bankName: '',
      CVVNumber: '',
      branchCode: ''
    });
  };

  // Handle save button click
  const handleSaveButtonClick = () => {
    // Code to save form data to database goes here
    // Once data is saved, update paymentMethods state variable
    setPaymentMethods(updatedPaymentMethodData);
    setEditMode(false);
    setAddMode(false);
    setSelectedPaymentMethod(null);
    setFormValues({
      accountHolderName: '',
      cardNumber: '',
      bankName: '',
      CVVNumber: '',
      branchCode: ''
    });
  };

  // Handle delete button click
  const handleDeleteButtonClick = (paymentMethod) => {
    // Code to delete payment method data from database goes here
    // Once data is deleted, update paymentMethods state variable
    setPaymentMethods(updatedPaymentMethodData);
  };

  //SCREENNAV COMPONENT NAVIGATION BUTTONS
  // Navigate to AccountSettingsScreen
const goToAccountSettings = () => {
  navigation.navigate('AccountInformationScreen.js');
};

// Navigate to ReturnAndRefundScreen
const goToReturnAndRefund = () => {
  navigation.navigate('Return&RefundScreen.js');
};

// Navigate to OrderScreen
const goToOrderScreen = () => {
  navigation.navigate('OrderScreen.js');
};

// Navigate to CustomerSupportScreen
const goToCustomerSupport = () => {
  navigation.navigate('CustomerSupportScreen.js');
};

// Navigate to SafetyInformationScreen
const goToSafetyInformation = () => {
  navigation.navigate('SafetyInformationScreen.js');
};

// Navigate to SystemControlPanel
const goToSystemControlPanel = () => {
  navigation.navigate('SystemControlPanel.js');
};

// Navigate to GeneralSettingsScreen
const goToGeneralSettings = () => {
  navigation.navigate('GeneralSettingsScreen.js');
};


  return (
    <Group5Layout headercomponent2={<SecondHeaderLayout />}
                  screennavcomponent={<ScreenNav />}
                  headerlabel={<CLabel />}
                  paymentsettingsform={<PaymentSettingsFormView /> || <PaymentSettingsForm />}
    />
  );
};

export default PaymentSettingsScreen;