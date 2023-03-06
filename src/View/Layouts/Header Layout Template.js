import React from 'react';
import MenuButton from '../Components/Common/MenuButton';
import {HStack,Box,VStack, Center} from 'native-base';
import Logo from '../Components/Common/Logo';
import CartButton from '../Components/Common/CartButton';
import WishListButton from '../Components/WishListButton';
import AccountButton from '../Components/Common/AccountButton';


// Components
export default function HeaderTemplate() {
  return (
    
      <Box py = "3"  >
        
        <VStack px = "2">
          <Center justifyContent={"center"}>
            <Logo/>
          </Center>
          
        <HStack pl = "3" alignItems={"center"} justifyContent = "space-between">
          
          <MenuButton/> 
          <HStack alignItems={"center"} >
            
          <CartButton/>
          <WishListButton/>
          <AccountButton/>
          </HStack>
         
       
        
      </HStack>

        </VStack>
        


        
        
      </Box>
      
      


    
    
    
  )
}


// Component Functions

 function openMenu()
{

}

