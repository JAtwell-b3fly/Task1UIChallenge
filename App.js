import React from 'react';
import { View,Text } from 'react-native';
import HomeScreen from './src/View/Screens/HomeScreen';
import { NativeBaseProvider } from 'native-base';


export default function App() {

  return (
    <NativeBaseProvider>
        <View>  
          
         <HomeScreen/>
        
        
        </View>
       
    </NativeBaseProvider>
    
  );
}
