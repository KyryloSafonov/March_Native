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
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './screens/Home';
import {Posts} from './screens/Posts';
import {HomeRouters} from './routers/HomeRouters';
import {MainTab} from './screens/tabs/MainTab';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Stack.Navigator
        initialRouteName={HomeRouters.Home}
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
          name={HomeRouters.Home}
          component={Home}
          options={{title: 'March Native'}}
        />
        <Stack.Screen
          name={HomeRouters.Posts}
          component={Posts}
          options={{title: 'Posts'}}
        />
        <Stack.Screen
          name={HomeRouters.MainTab}
          component={MainTab}
          options={{title: 'Tabs'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
