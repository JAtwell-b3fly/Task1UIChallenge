import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Container, VStack, HStack, Input, Button, Text, Link, FormControl, Select, Avatar } from "native-base";

//import the external files
import Avatar from './components/Avatar';
import Logo from './assets/logo';
<<<<<<< Updated upstream
import RegistrationForm from './Forms';
=======
import RegistrationForm from '../../components/Forms/RegistrationForm';
>>>>>>> Stashed changes

import styles from './RegistrationStyles'; //import the custom stylesheet
import { Group1Layout } from './Layouts/Group1Layout';

const RegistrationScreen = () => {

  //state variables to store the user input data
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [avatar,setAvatar] = useState("");

  //Action to submit form data to the database
  const handleCreateAccount = () => {
    //*** Code to submit user data to the database goes here ********

    //navigate back to Login Screen
    NavigationPreloadManager.navigate("LoginScreen.js");
  };

  //Navigation to Login Screen
  const AlreadyHaveAnAccountNavigation = () => {
    //disregard any data entered into form
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setAvatar("null");

    //navigate to Login Screen
    NavigationPreloadManager.navigate("LoginScreen.js");
  };

  //Action to set Avatar icon
  const handleSetAvatar = () => {
    //****Set user's avatar icon code comes here *******

  };

  return (
    <Group1Layout applogoheader={<Logo />}
                  avatar={<Avatar />}
                  registrationSection={<RegistrationForm />}
    />
  );
};

export default RegistrationScreen;