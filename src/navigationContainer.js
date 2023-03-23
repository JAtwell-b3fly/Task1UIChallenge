import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TestScreen from './Screens/testScreen';


const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Screen name = "Home" component = {TestScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
