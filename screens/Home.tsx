import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigationProp, HomeRouters} from '../routers/HomeRouters';

export const Home = () => {
  const navigation = useNavigation<HomeNavigationProp>();
  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Posts screen"
        onPress={() => navigation.navigate(HomeRouters.Posts, {postId: '1'})}
      />
    </View>
  );
};
