import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {View,VStack,HStack,Container,Text,Center,Heading} from 'native-base';

import { SecondHeaderLayout } from '../../components/Layouts/HeaderOther'; //import custom created header component
import ScreenNav from './client/components/Layouts/ScreenNav'; //import custom created screennav buttons component
import ReturnPolicy from './client/components/Layouts/ReturnPolicy'; //import custom created return policy component
import ReturnForm from './client/components/Forms/ReturnForm'; //import custom created return form component
import { CLabel } from '../../components/common/Label';
import { Group10Layout } from '../../Screens/Layouts/Group10Layout';

const ReturnAndRefundScreen = () => {

  const navigation = useNavigation();

  const [policy, setPolicy] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    requestDate: '',
    requestReason: '',
    orderNumber: '',
    products: [{ productName: '', trackingNumber: '', orderPlacedDate: '', orderPlacementProof: '' }]
  });

  const fetchPolicy = () => {
    // Action to fetch Return & Refund policy from database and set the policy state
    // Example using fetch:
    fetch('https://example.com/api/policy')
      .then(response => response.json())
      .then(data => setPolicy(data.policy))
      .catch(error => console.error(error));
  }

  const handleFormChange = (key, value, index = 0) => {
    // Action to update the formData state based on form inputs
    setFormData(prevFormData => {
      if (key === 'productName' || key === 'trackingNumber' || key === 'orderPlacedDate' || key === 'orderPlacementProof') {
        // If we're updating a nested field, copy the existing array and update the relevant field
        const productsCopy = [...prevFormData.products];
        productsCopy[index][key] = value;
        return { ...prevFormData, products: productsCopy };
      } else {
        // Otherwise just update the top-level field
        return { ...prevFormData, [key]: value };
      }
    });
  };

  const handleAddProduct = () => {
    // Action to add an additional product object to the products array in formData
    setFormData(prevFormData => ({
      ...prevFormData,
      products: [...prevFormData.products, { productName: '', trackingNumber: '', orderPlacedDate: '', orderPlacementProof: '' }]
    }));
  };

  const handleSubmitForm = () => {
    // Action to submit the formData to the database and display a success message
    // Example using fetch:
    fetch('https://example.com/api/refund-requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Refund request submitted:', data);
        // Display success message to user
        alert('Refund request submitted!');
      })
      .catch(error => console.error(error));
  };

  const submitButtonClick = () => {
    // get the form data and validate it
    const formData = getFormData();
    const isFormValid = validateFormData(formData);
  
    if (isFormValid) {
      // push the form data to the database
      pushFormDataToDatabase(formData);
      // display a message saying request submitted
      showMessage('Request submitted');
    }
  }

  //SCREENNAV COMPONENT FOR NAVIGATION
  function navigateToAccountSettings() {
    navigation.navigate('AccountInformationScreen.js');
  }

  function navigateToPaymentSettings() {
    navigation.navigate('PaymentSettingsScreen.js');
  }

  function navigateToOrder() {
    navigation.navigate('OrderScreen.js');
  }

  function navigateToCustomerSupport() {
    navigation.navigate('CustomerSupportScreen.js');
  }

  function navigateToSafetyInformation() {
    navigation.navigate('SafetyInformationScreen.js');
  }

  function navigateToSystemControlPanel() {
    navigation.navigate('SystemControlPanel.js');
  }

  function navigateToGeneralSettings() {
    navigation.navigate('GeneralSettingsScreen.js');
  }


  return (
    <Group10Layout headercomponent2={<SecondHeaderLayout />}
                  screennavcomponent={<ScreenNav />}
                  headerlabel={<CLabel />}
                  refundpolicycomponent={<ReturnPolicy />}
                  sectionlabel={<CLabel />}
                  refundformsection={<ReturnForm />}
    />
  );
}

export default ReturnAndRefundScreen;