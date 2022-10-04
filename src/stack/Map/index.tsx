import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MapScreen from '../../screens/map/MapScreen';
import PropertyScreen from '../../screens/map/PropertyScreen';

const Stack = createStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator initialRouteName="Map">
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="PropertyScreen"
        component={PropertyScreen}
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
