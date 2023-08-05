import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import EmergencyContactScreen from './screens/EmergencyContactScreen';
import Help from './screens/Help';
import History from './screens/History';
import About from './screens/About';
import ContactList from './screens/ContactList';
import RegistrationScreen from './screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="MainScreen" component={MainScreen} />
        <Stack.Screen options={{ headerShown: false }} name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ContactList" component={ContactList} />
        <Stack.Screen name="EmergencyContactScreen" options={{ headerShown: false }} component={EmergencyContactScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Help" component={Help} />
        <Stack.Screen options={{ headerShown: false }} name="History" component={History} />
        <Stack.Screen options={{ headerShown: false }} name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});