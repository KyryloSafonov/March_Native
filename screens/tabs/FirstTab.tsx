import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TabRoutes} from './MainTab';

export const FirstTab = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>First tab</Text>
      <Button
        title={'Go to Second tab screen'}
        onPress={() => {
          navigation.navigate(TabRoutes.SecondTabName);
        }}
      />
    </View>
  );
};
