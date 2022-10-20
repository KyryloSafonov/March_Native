import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FirstTab} from './FirstTab';
import {SecondTab} from './SecondTab';
import {ThirdTab} from './ThirdTab';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export enum TabRoutes {
  FirstTabName = 'FirstTab',
  SecondTabName = 'SecondTab',
}

const FirstTabRouters = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={TabRoutes.FirstTabName}>
      <Stack.Screen name={TabRoutes.FirstTabName} component={FirstTab} />
      <Stack.Screen name={TabRoutes.SecondTabName} component={SecondTab} />
    </Stack.Navigator>
  );
};

export const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="FirstTabRouters"
        component={FirstTabRouters}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? 'red' : '#000',
                  }}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
                  }}
                />
              </>
            );
          },
        }}
      />
      <Tab.Screen name="ThirdTabRouters" component={ThirdTab} />
    </Tab.Navigator>
  );
};
