import React from 'react';
import { NativeBaseProvider,Box,View } from 'native-base';

export default function App() {

  return (
    <NativeBaseProvider>
      <View >
        <Box safeArea width = "100%" height = "100%" bgColor={"lightBlue.100"}>

        </Box>
      
      </View>
      
      
      
          
        
         
    </NativeBaseProvider>
    
  );
}
