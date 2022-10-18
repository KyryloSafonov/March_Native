/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './screens/Home';
import {Posts} from './screens/Posts';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/*TODO: describe status bar changes*/}
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          statusBarColor: '#fff',
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'March Native'}}
        />
        <Stack.Screen
          name="Posts"
          component={Posts}
          options={{title: 'Posts'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
