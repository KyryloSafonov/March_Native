import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum HomeRouters {
  Home = 'Home',
  Posts = 'Posts',
  MainTab = 'MainTab',
}

export type HomeParams = {[HomeRouters.Home]: undefined};

export type PostsParams = {[HomeRouters.Posts]: {postId: string}};

export type HomeNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeParams, HomeRouters.Home>,
  CompositeNavigationProp<
    NativeStackNavigationProp<HomeParams, HomeRouters.Home>,
    NativeStackNavigationProp<PostsParams, HomeRouters.Posts>
  >
>;

export type PostsRouteProps<RouteName extends keyof PostsParams> = RouteProp<
  PostsParams,
  RouteName
>;
