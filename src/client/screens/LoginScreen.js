import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import external component files
<<<<<<< Updated upstream
import Logo from './Logo'; //import the image of the company logo
import Avatar from './Avatar'; //import the custom created avatar component
=======
import Logo from './assets/logo'; //import the image of the company logo
import Avatar from './Avatar'; //import the custom created avatar component
import LoginFormLayout from './layouts/LoginFormLayout'; //import the custom created login form layout component
import CreateANewAccountLink from './components/CreateANewAccountLink'; //import the custom created CreateANewAccountLink component
import ForgotPasswordLink from './components/ForgotPasswordLink'; //import the custom created ForgotPasswordLink component
import LoginButton from './components/LoginButton'; //import the custom created Login Button component
import LoginForm from './components/LoginForm'; //import the custom created LoginForm component
>>>>>>> Stashed changes

// import external stylesheet
import styles from './LoginStyles'; //import the custom created stylesheet

<<<<<<< Updated upstream
const Login = () => {
=======
const LoginScreen = () => {
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
  return (
    <View style={styles.container}>
      <Logo />
      <Avatar />
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email address"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newAccountButton} onPress={handleNewAccount}>
          <Text style={styles.buttonText}>Create a New Account</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgotPasswordLink} onPress={handleForgotPassword}>
        <Text style={styles.linkText}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Login;
=======
return (
  <View style={styles.container}>
    <Logo style={{ flex: 0.25 }}/>
    <Avatar />
    <View style={styles.formContainer}>
      <LoginLayout />
        <LoginForm />
      <HStack style={{ justifyContent: 'center', marginTop: 16 }}>
        <LoginButton />
      </HStack>
      <HStack style={{ justifyContent: 'center', marginTop: 16 }}>
        <CreateANewAccountLink />
      </HStack>
      <HStack style={{ justifyContent: 'left', marginTop: 16}}>
        <ForgotPasswordLink />
      </HStack>
    </View>
  </View>
)
};

export default LoginScreen;
>>>>>>> Stashed changes
