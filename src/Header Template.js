import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Function 
const headerTemplate = () => {
  return (
    <View id = 'headerContainer' style = {headerStyle.headerContainer}>
        <view id = 'menuButtonContainer' >

            <button id = 'menuButton' style = {headerStyle.menuButton}>
                

            </button>


        </view>


    </View>
  );
};



// Styling
const headerStyle = StyleSheet.create({

 headerContainer:{
    color: 'light blue'

 },
 menuButtonContainer:{

 },
 menuButton:{
    
 }



})

// export to allow for importing template 
module.exports = {
    headerTemplate
};