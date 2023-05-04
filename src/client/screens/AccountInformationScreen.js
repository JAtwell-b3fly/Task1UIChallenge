import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from '../config/firebase';

import { SecondHeaderLayout } from '../../components/Layouts/HeaderOther'; //import the custom created header component
import ScreenNav from './client/component/Layouts/ScreenNav'; //import the custom created screennav buttons component
import AccountForm from './client/component/Form/AccountForm'; //import the custom created accountform component
import AccountFormView from './client/component/Form/AccountFormView';
import { CLabel } from '../../components/common/Label';
import { Group5Layout } from '../../Screens/Layouts/Group5Layout';

const AccountInformation = () => {

  const navigation = useNavigation();

// Set initial state for form data and account data
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  physicalAddress: '',
  emailAddress: ''
});
const [accountData, setAccountData] = useState({
  firstName: '',
  lastName: '',
  physicalAddress: '',
  emailAddress: ''
});

// Fetch account data from the database using useEffect hook
useEffect(() => {
  axios.get('/api/accountData')
    .then(response => {
      setAccountData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

// Function to handle form input changes
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData(prevState => ({
    ...prevState,
    [name]: value
  }));
}

// Function to handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault();
  // Submit form data to the database using axios
  axios.post('/api/updateAccountData', formData)
    .then(response => {
      console.log(response.data);
      // Reset form data after submission
      setFormData({
        firstName: '',
        lastName: '',
        physicalAddress: '',
        emailAddress: ''
      });
    })
    .catch(error => {
      console.log(error);
    });
}

  const handleEditButtonClick = () => {
    setIsEditMode(true);
  };

  const handleSaveButtonClick = () => {
    // code to submit and save updated account settings info to database
    setIsEditMode(false);
  };

  //SCREENNAV COMPONENT NAVIGATION ACTIONS

  // navigate to PaymentSettingsScreen
  const handlePaymentSettingsPress = () => {
    navigation.navigate('PaymentSettingsScreen.js');
  };

  // navigate to Return&RefundScreen
  const handleReturnRefundPress = () => {
    navigation.navigate('Return&RefundScreen.js');
  };

  // navigate to OrderScreen
  const handleOrderPress = () => {
    navigation.navigate('OrderScreen.js');
  };

  // navigate to CustomerSupportScreen
  const handleCustomerSupportPress = () => {
    navigation.navigate('CustomerSupportScreen.js');
  };

  // navigate to SafetyInformationScreen
  const handleSafetyInformationPress = () => {
    navigation.navigate('SafetyInformationScreen.js');
  };

  // navigate to SystemControlPanel
  const handleSystemControlPress = () => {
    navigation.navigate('SystemControlPanel');
  };

  // navigate to GeneralSettingsScreen
  const handleGeneralSettingsPress = () => {
    navigation.navigate('SettingsScreen.js');
  };

  return (
    <Group5Layout headercomponent2={<SecondHeaderLayout />}
                  screennavcomponent={<ScreenNav />}
                  headerlabel={<CLabel />}
                  accountsettingsform={<AccountForm /> || <AccountFormView />}
    />
  );
};

export default AccountInformation;