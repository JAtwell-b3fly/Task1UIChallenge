import React from 'react';
import { NativeBaseProvider} from 'native-base';
import TestScreen from './src/Screens/testScreen';


export default function App() {

  return (
    <NativeBaseProvider>
      
      <TestScreen/>
      
          
        
         
    </NativeBaseProvider>
    
  );
}
