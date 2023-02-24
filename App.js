import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput } from 'react-native';
import data from './src/data';
import updateData from './src/controller';
import styles from './src/styles';
import HomeScreen from './src/HomeScreen';

export default function App() {

  return (
    <HomeScreen/>
  );
}
