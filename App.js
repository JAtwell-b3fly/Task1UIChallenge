import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput } from 'react-native';
import data from './src/data';
import updateData from './src/controller';
import styles from './src/styles';
import homeScreen from './src/HomeScreen';

export default function App() {

  return (
    homeScreen()
  );
}
