import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import external component files
import Logo from './assets/Logo'; //import the image of the company logo
import Avatar from './Avatar'; //import the custom created avatar component
import loginSection from './LoginSection'; //import the login section that contains the login form, 2 buttons and a link


// import external stylesheet
import styles from '../src/LoginStyles.css'; //import the custom created stylesheet
import { Group1Layout } from '../../Screens/Layouts/Group1Layout';

//Actions
const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // submit form data to database and navigate to Home screen
    navigation.navigate('Home');
  };

  const handleNewAccount = () => {
    // navigate to Registration screen
    navigation.navigate('Registration');
  };

  const handleForgotPassword = () => {
    // navigate to Forgot Password screen
    navigation.navigate('ForgotPassword');
  };

export default function LoginScreen () {
  return (
    <Group1Layout applogoheader={<Logo />}
                  avatar={<Avatar />}
                  loginSection={<loginSection />}
    />
  )
};

