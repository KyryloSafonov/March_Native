import React from 'react';
import { View, Text, Button, StatusBar } from "react-native";
import {useNavigation, useRoute} from '@react-navigation/native';

export const Posts = () => {
  const navigation = useNavigation<any>();
  const {params} = useRoute<any>();
  console.log(params);
  return (
    <View>
      <Text>Post screen</Text>
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
    </View>
  );
};
