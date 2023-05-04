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

  // state variables for account settings data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  // state variables for form view and edit mode
  const [isEditMode, setIsEditMode] = useState(false);
  const [editButtonText, setEditButtonText] = useState('Edit');
  const [accountSettingsInfo, setAccountSettingsInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  // retrieve account settings data from the database
  useEffect(() => {
    const fetchData = async () => {
      const user = await db.collection('users').doc('userId').get();
      setName(user.data().name);
      setEmail(user.data().email);
      setPassword(user.data().password);
      setPhone(user.data().phone);
    };
    fetchData();
  }, []);

  // submit updated account settings data to the database
  const handleSubmit = async () => {
    await db.collection('users').doc('userId').update({
      name: name,
      email: email,
      password: password,
      phone: phone,
    });
    setIsEditMode(false);
    setEditButtonText('Edit');
  };

  const handleEditButtonClick = () => {
    setIsEditMode(true);
  };

  const handleSaveButtonClick = () => {
    // code to submit and save updated account settings info to database
    setIsEditMode(false);
  };

  const handleTextInputChange = (name, value) => {
    setAccountSettingsInfo({
      ...accountSettingsInfo,
      [name]: value,
    });
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