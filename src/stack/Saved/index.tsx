import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import SavedScreen from '../../screens/saved/SavedScreen';

const Stack = createStackNavigator();

export default function SavedStack() {
  return (
    <Stack.Navigator initialRouteName="Saved">
      <Stack.Screen
        name="Saved"
        component={SavedScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
    </Stack.Navigator>
  );
}
