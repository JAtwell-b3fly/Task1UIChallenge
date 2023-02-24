import React from 'react';
import {Menu,Box,Pressable,ThreeDotsIcon} from 'native-base'


// Components
export default function HeaderTemplate() {
  return (
    
    <Box width = "100%" backgroundColor = "#18D0EA ">
      <Menu trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <ThreeDotsIcon />
            </Pressable>;
    }}>
      <Menu.Item>Product Listing</Menu.Item>
      <Menu.Item>Order History</Menu.Item>
      <Menu.Item>Wishlist</Menu.Item>
      <Menu.Item>Safety Information</Menu.Item>
      <Menu.Item>Customer Support</Menu.Item>
      <Menu.Item>System Control Panel</Menu.Item>
      <Menu.Item>Settings</Menu.Item>
    
      </Menu>


    </Box>
    
  )
}


// Component Functions

 function openMenu()
{

}

