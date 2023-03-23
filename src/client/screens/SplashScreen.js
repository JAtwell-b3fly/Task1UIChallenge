import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Importing the stylesheet
import styles from './splashScreenStyles'; //import custom created stylesheet

// Importing the logo image
import logo from '../assets/logo.png';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate to the login screen after 5 seconds
    setTimeout(() => {
      navigation.replace('Login'); TODO: `Don't lead the user straigh to login but rather into the app to immedlately purchase`
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;
