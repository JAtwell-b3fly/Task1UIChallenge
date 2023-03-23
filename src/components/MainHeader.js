import React from 'react';
import {Heading,Menu,Pressable,IconButton,Button,Icon} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import MInput from './subcomponents/common/Input';
import MButton from './subcomponents/common/Button';
import { HeaderLayout } from '../Layouts/Header';
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
  <HeaderLayout logo = {
      <><Heading size="2xl" color="#58C34D">CHEMI-</Heading><Heading size="2xl" color="#68D2F9">CLEAN</Heading></>

    } 
    iconButtons = {
      <><IconButton icon={<Icon as={MaterialCommunityIcons} name="cart-variant" />} borderRadius="full"
        _icon={{
          color: "black",
          size: "lg"
        }}
        _pressed={{
          bg: "black:alpha.20"
        }} /><IconButton icon={<Icon as={Ionicons} name="ios-heart-sharp" />} borderRadius="full"
          _icon={{
            color: "red.600",
            size: "lg"
          }}
          _pressed={{
            bg: "red.600:alpha.20"
          }} /><IconButton icon={<Icon as={Ionicons} name="md-person-circle-outline" />} borderRadius="full"
            _icon={{
              color: "black",
              size: "lg"
            }}
            _pressed={{
              bg: "black:alpha.20"
            }} /></>
    } 
    menu = {
      <Menu shadow={1}   trigger = {triggerProps => {
        return <Pressable ml = "5px" accessibilityLabel="More options menu" {...triggerProps} >
          <FontAwesome5 name="grip-horizontal" size={24} color="black" />
        </Pressable>
      }}>
        {menuOptions}
      </Menu>
    } 
    searchBar = {
      <MInput bgColor = "white" inputRight = {<Button  justifyContent={"center"} w = "11.5%" variant={"ghost"} ><FontAwesome5  name="search"  color="#74CDCC" /></Button>}
             flex = {1} width = "80%" variant = "outline" my = "0.5" placeHolder = {"Search"}/>
    }
  />
      
        
        /* <VStack flex = {1} space = {3}> 
          <Stack flex = {5}  direction = "row" justifyContent={"center"}>
            <Heading size = "2xl" color = "#58C34D">CHEMI-</Heading>
            <Heading size = "2xl" color = "#68D2F9">CLEAN</Heading>
            
          </Stack>
          
          <HStack flex = {2} alignItems={"center"} justifyContent = "space-between">
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
            
          <Box borderColor={'#68B360'}  borderWidth = {"0.5"} flex = {3} alignItems={"center"}  bgColor= "#E2FDE0" >
            <MInput bgColor = "white" inputRight = {<Button  justifyContent={"center"} w = "11.5%" variant={"ghost"} ><FontAwesome5  name="search"  color="#74CDCC" /></Button>}
             flex = {1} width = "80%" variant = "outline" my = "0.5" placeHolder = {"Search"}/>
            
          </Box>  

        </VStack> */
        


        
        
      
      
      


    
    
    
  );
};


// Component Functions

 function openMenu()
{

}

