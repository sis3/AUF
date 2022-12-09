import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First Screen" component={FirstScreen} />
        <Stack.Screen name="Second Screen" component={SecondScreen} />
        <Stack.Screen name="Third Screen" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}