import React from 'react';
import { View,Text } from 'react-native';
import HomeScreen from './src/View/Screens/HomeScreen';
import { NativeBaseProvider,Box } from 'native-base';
import theme from './src/View/theme';
export default function App() {

  return (
    <NativeBaseProvider  theme = {theme}>
          
      <Box safeArea  width={'full'} height ={'full'} backgroundColor = {"lightBlue.100"}> 
      <HomeScreen/>

        </Box>    
         
    </NativeBaseProvider>
    
  );
}
