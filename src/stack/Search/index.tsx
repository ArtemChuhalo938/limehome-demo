import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import SearchScreen from '../../screens/search/SearchScreen';

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
    </Stack.Navigator>
  );
}
