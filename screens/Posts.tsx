import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {HomeRouters, PostsRouteProps} from '../routers/HomeRouters';

export const Posts = () => {
  const navigation = useNavigation<any>();
  const {params} = useRoute<PostsRouteProps<HomeRouters.Posts>>();
  console.log(params);
  return (
    <View>
      <Text>Post screen</Text>
      <Text>params --- {params.postId}</Text>
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
      <Button
        title={'Go to Tabs'}
        onPress={() => navigation.navigate(HomeRouters.MainTab)}
      />
    </View>
  );
};
