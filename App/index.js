import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PeopleList } from './screens/PeopleList';
import { PeopleDetails } from './screens/PeopleDetails';
import { Profile } from './screens/Profile';

const PeopleStack = createStackNavigator();
const People = () => (
  <PeopleStack.Navigator>
    <PeopleStack.Screen name="People" component={PeopleList} />
    <PeopleStack.Screen
      name="PeopleDetails"
      component={PeopleDetails}
      options={() => ({
        title: '',
      })}
    />
  </PeopleStack.Navigator>
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
    <NavigationContainer
      linking={{
        prefixes: ['swapidemo://'],
        config: {
          PeopleTab: {
            initialRouteName: 'People',
            screens: {
              People: {
                path: 'people',
              },
              PeopleDetails: {
                path: 'person/:id',
              },
            },
          },
        },
      }}
    >
      <Tab.Navigator initialRouteName="ProfileTab">
        <Tab.Screen
          name="PeopleTab"
          component={People}
          options={{ title: 'People' }}
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
