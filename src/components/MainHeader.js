import React from 'react';
import {HStack,Box,VStack, Stack,Heading,Menu,Pressable,IconButton,Icon} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const menuItemsList = ["Product Listing","Order History","Settings"];


function renderMenuList()
{
  
    const renderedMenuItems = [];

  for(let i = 0; i<menuItemsList.length;i++)
  {
    const men = <Menu.Item key = {i+1}>{menuItemsList[i]}</Menu.Item>
    renderedMenuItems.push(men);
  }
  
 return renderedMenuItems;
}
// Components
export default function HeaderComponent() {
  const menuOptions = renderMenuList();
  return (
    
      <Box w = "100%" h = "100%">
        
        <VStack space = {3}> 
          <Stack  direction = "row" justifyContent={"center"}>
            <Heading size = "2xl" color = "#58C34D">CHEMI-</Heading>
            <Heading size = "2xl" color = "#68D2F9">CLEAN</Heading>
            
          </Stack>
          
          <HStack alignItems={"center"} justifyContent = "space-between">
            <Menu shadow={1}   trigger = {triggerProps => {
              return <Pressable ml = "5px" accessibilityLabel="More options menu" {...triggerProps} >
                <FontAwesome5 name="grip-horizontal" size={24} color="black" />
              </Pressable>
            }}>
              {menuOptions}
            </Menu>
          
          <HStack alignItems={"center"} >
            
          <IconButton  icon={<Icon as={MaterialCommunityIcons} name="cart-variant" />} borderRadius="full" 
            _icon={{
              color: "black",
              size: "lg"
            }} 
              _pressed={{
              bg: "black:alpha.20"
            }}/>
          
          <IconButton  icon={<Icon as={Ionicons} name="ios-heart-sharp" />} borderRadius="full" 
            _icon={{
              color: "red.600",
              size: "lg"
            }} 
            _pressed={{
              bg: "red.600:alpha.20"
            }}/>

          <IconButton  icon={<Icon as={Ionicons} name="md-person-circle-outline" />} borderRadius="full" 
            _icon={{
              color: "black",
              size: "lg"
            }} 
            _pressed={{
              bg: "black:alpha.20"
            }}/>
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

