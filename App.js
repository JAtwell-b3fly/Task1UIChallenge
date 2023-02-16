import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput } from 'react-native';
import data from './src/data';
import updateData from './src/controller';
import styles from './src/styles';

export default function App() {

  const handleNameChange = (value) => {
    updateData('name', value);
  };

  const handleEmailChange = (value) => {
    updateData('email', value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={data.name}
        placeholder="Enter your name"
        onChangeText={handleNameChange}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={data.email}
        onChangeText={handleEmailChange}
        placeholder="Enter your email"
        keyboardType='email-address'
        autoCapitalize='none'
      />
      
      <StatusBar style="auto" />
    </View>
  );
}
