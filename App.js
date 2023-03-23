
import { NativeBaseProvider} from 'native-base';
import TestScreen from './src/screens/testScreen';
import React, { useState, useEffect } from 'react';

export default function App() {

  return (
    <NativeBaseProvider>
      
      <TestScreen/>
      
          
        
         
    </NativeBaseProvider>
    
  );
}
