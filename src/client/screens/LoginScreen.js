import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Container, VStack, Input, Button, Text, Link } from "native-base"; 
import { useNavigation } from '@react-navigation/native';

// import external component files
import Logo from './assets/Logo'; //import the image of the company logo
import Avatar from './Avatar'; //import the custom created avatar component
import LoginSection from '../../components/Forms/LoginForm';

// import external stylesheet
import styles from '../src/LoginStyles.css'; //import the custom created stylesheet
import { Group1Layout } from './Layouts/Group1Layout';

const LoginScreen = () => {
  //State variables for the email and password inputs
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Handle Login Action
  const handleLogin = () => {

    //****Code to submit email and password data to database goes here *************

    //perform login action with email and password
    //if successful, navigate to the Home Screen
    navigation.navigate("HomeScreen.js");
  };

  //Handle Registration Navigation
  const handleRegistrationNavigation = () => {
    //navigate to Registration Screen
    navigation.navigate("RegistrationScreen.js");
  };

  //Handle Forgot Password Navigation
  const handleForgotPasswordNavigation = () => {
    //navigate to Forgot Password Screen
    navigation.navigate("ForgotPasswordScreen.js");
  }

  return (
    <Group1Layout applogoheader={<Logo />}
                  avatar={<Avatar />}
                  loginSection={<LoginSection />}
    />
  );
};

export default LoginScreen;