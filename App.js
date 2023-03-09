import React from 'react';
import { View,Text } from 'react-native';
import HomeScreen from './src/View/Screens/HomeScreen';
import { NativeBaseProvider,ScrollView,Container,Box } from 'native-base';
import theme from './src/View/theme';
export default function App() {

  return (
    <NativeBaseProvider  theme = {theme}>
      <Box safeArea width = 'full' height = 'full' bgcolor = {"lightBlue.200"}>
      <ScrollView>
      <HomeScreen/>
      </ScrollView>

      </Box>
      
      
          
        
         
    </NativeBaseProvider>
    
  );
}
