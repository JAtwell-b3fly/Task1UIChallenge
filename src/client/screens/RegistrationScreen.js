import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

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

//Actions
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [gender, setGender] = useState('male');

const handleCreateAccount = () => {
  // TODO: submit form data to the database
  navigation.navigate('Login');
};

export default function RegistrationScreen () {

  return (
    <Group1Layout applogoheader={<Logo />}
                  avatar={<Avatar />}
<<<<<<< Updated upstream
                  registrationSection={<RegistrationForm/>}
=======
                  registrationSection={<RegistrationForm />}
>>>>>>> Stashed changes
    />
  );
};