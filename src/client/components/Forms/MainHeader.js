import React from 'react';
import {Heading,Menu,Pressable,IconButton,Button,Icon} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CInput from '../common/Input';
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
      <CInput bgColor = "white" inputRight = {<Button  justifyContent={"center"} w = "11.5%" variant={"ghost"} ><FontAwesome5  name="search"  color="#74CDCC" /></Button>}
             flex = {1} width = "80%" variant = "outline" my = "0.5" placeHolder = {"Search"}/>
    }
  />
      
  );};
