import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomePage from './resources/pages/HomePage'
import ResultPage from './resources/pages/ResultPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomePage' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="ResultPage" component={ResultPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

