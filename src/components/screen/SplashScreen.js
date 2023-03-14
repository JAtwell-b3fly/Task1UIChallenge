import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Importing the stylesheet
import styles from './splashScreenStyles';

// Importing the logo image
import logo from '../assets/logo.png';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate to the login screen after 5 seconds
    setTimeout(() => {
      navigation.replace('Login');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;
