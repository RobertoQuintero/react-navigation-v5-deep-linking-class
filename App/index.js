import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PostsList } from './screens/PostsList';
import { PostDetails } from './screens/PostDetails';
import { Profile } from './screens/Profile';

const PostsStack = createStackNavigator();
const Posts = () => (
  <PostsStack.Navigator>
    <PostsStack.Screen name="Posts" component={PostsList} />
    <PostsStack.Screen
      name="PostDetails"
      component={PostDetails}
      options={() => ({
        title: '',
      })}
    />
  </PostsStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const Tab = createBottomTabNavigator();
export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="PostsTab"
          component={Posts}
          options={{ title: 'Posts' }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
