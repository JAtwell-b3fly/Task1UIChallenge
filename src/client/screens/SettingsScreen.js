import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, Linking, TouchableOpacity } from "react-native";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";

import { SecondHeaderLayout } from "../components/Layouts/HeaderOther";
import Group8Layout from "./Layouts/Group8Layout";
import RadioBtn from "../components/common/RadioButton";
import { Button } from "native-base";
import { Avatar } from "native-base";

const SettingsScreen = () => {

  //State Declaration
  const navigation = useNavigation();
  const [notificationOption, setNotificationOption] = useState("email");
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("medium");
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [preferredLanguage, setPreferredLanguage] = useState("English");
  const provinces = [
    { id: 1, name: 'Northern Cape' },
    { id: 2, name: 'North West' },
    { id: 3, name: 'Western Cape' },
    { id: 4, name: 'Eastern Cape' },
    { id: 5, name: 'Free State' },
    { id: 6, name: 'Mpumalanga' },
    { id: 7, name: 'Limpopo' },
    { id: 8, name: 'Gauteng' },
    { id: 9, name: 'Kwa-Zulu Natal' },
  ];
  const [preferredCountry, setPreferredCountry] = useState('South Africa');

  // Navigate back to Home Screen
  const handleBackPress = () => {
    navigation.navigate('HomeScreen.js');
  };

  //USER PROFILE SETTINGS: Account Settings

    //Account Settings
  const handleAccountSettingsPress = () => {
    navigation.navigate('AccountSettingsScreen');
  };

  //PRIVACY & SECURITY:
  
    // link to open 2FactorAuthenication in web browser
    const handle2FactorAuthNavigation = () => {
      const url = "https://www.2factorauthentication.co.za/userId/";
      Linking.openURL(url);
    };

    // link to open SecurityQuestions in web browser
    const handleSecurityQuestionsNavigation = () => {
      const url = "https://www.securityquestions.co.za/userId/";
      Linking.openURL(url);
    };

  //NOTIFICATIONS

    //Notification:  Email, SMS, Push
    // set the notification option
    const handleNotificationOptionChange = (option) => {
      setNotificationOption(option);
    };

  //LANGUAGE AND LOCALISATION

    //Preffered Language
    const handlePreferredLanguageToggle = () => {
      setPreferredLanguage(preferredLanguage === "English" ? "Afrikaans" : "English");
    };

    //Preferred Province
    const GeneralSettingsScreen = () => {
      const [preferredProvince, setPreferredProvince] = useState('');
    
      const handleProvinceChange = (province) => {
        setPreferredProvince(province);
      };
    };

    //Preferred Country
    const handlePreferredCountryChange = (event) => {
      setPreferredCountry(event.target.value);
    };

  //APPEARANCE

    //Theme: Dark/Light Mode Toggle Button
    // set the dark mode option
    const handleDarkModeChange = (value) => {
      setDarkMode(value);
    };

    //Font Size: Small, Medium, Large DropDown Button
    // set the font size option
    const handleFontSizeChange = (size) => {
      setFontSize(size);
    };

  //PAYMENT

    //Payment Method Settings
    // navigate user to PaymentMethodSettingsScreen
    const handlePaymentMethodSettingsNavigation = () => {
      navigation.navigate("PaymentSettingsScreen.js");
    };

  //HELP AND SUPPORT

    //FAQs
    // navigate user to the FAQs section of the CustomerSupportScreen
    const handleFAQNavigation = () => {
      navigation.navigate("CustomerSupportScreen.js", { screen: "FAQs" });
    };

    //Contact Us
    // navigate user to the ContactInformation section of the CustomerSupportScreen
    const handleContactNavigation = () => {
      navigation.navigate("CustomerSupportScreen.js", { screen: "Contact" });
    };

  //ABOUT

    //About
    // navigate user to the AboutScreen
    const handleAboutNavigation = () => {
      navigation.navigate("AboutScreen.js");
    };

  //LOGOUT

    //Logout of Application
    const handleLogoutConfirmation = () => {
      setLogoutDialogOpen(true);
    };

    const handleLogout = () => {
      // Clear user data from local storage
      localStorage.removeItem('user');

      // Redirect to login screen
      navigation.navigate('LoginScreen.js');
    };
  
    const handleCancelLogout = () => {
      setLogoutDialogOpen(false);
    };

    return(
        <View>
            <Group8Layout applogoheader={<SecondHeaderLayout />}
                            avatarcomponent={<Avatar />}
                            setting1button={<Button />}
                            setting2button={<Button />}
                            setting3button={<Button />}
                            setting4button={<RadioBtn />}
                            setting5button={<RadioBtn />}
                            setting6button={<RadioBtn />}
                            setting7button={<RadioBtn />}
                            setting8button={<RadioBtn />}
                            setting9button={<RadioBtn />}
                            setting10button={<Button />}
                            setting11button={<Button />}
                            setting12button={<Button />}
                            setting13button={<Button />}
                            setting14button={<Button />}
            />
        </View>
    );
;}

export default SettingsScreen;
