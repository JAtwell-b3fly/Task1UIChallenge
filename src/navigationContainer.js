import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TestScreen from './Screens/testScreen';


const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {TestScreen}  options={{ headerShown: false }}/>
        </Stack.Navigator>
        
      
    </NavigationContainer>
  );
}

export default Navigation;
