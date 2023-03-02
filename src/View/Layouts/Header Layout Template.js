import React from 'react';
import MenuButton from '../Components/Common/MenuButton';
import {HStack,NativeBaseProvider,Heading} from 'native-base';
import theme from '../theme';



// Components
export default function HeaderTemplate() {
  return (
    <NativeBaseProvider theme={theme}>
      
      <HStack space = "1/3" w = "100%" alignItems = "center" bg = "#10C7E0" justifyContent = "space-between" safeArea >

        <HStack>
          <MenuButton/>
        </HStack>
        <HStack>
          <Heading variant="title1" size = "4xl">CHEMI-</Heading>
          <Heading variant="title2" size = "4xl">CLEAN</Heading>
        </HStack>

      </HStack>
      


    </NativeBaseProvider>
    
    
  )
}


// Component Functions

 function openMenu()
{

}

