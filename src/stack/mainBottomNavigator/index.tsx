import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import SavedStack from '../Saved';
import ProfileStack from '../Profile';
import MapStack from '../Map';
import SearchStack from '../Search';
import TabBarItem from '../../components/TabBarItem';
import { getTabBarVisibility } from '../../utils/renderCommonTools';

const renderTabBarIcon = ({ route, focused }: any) => {
  let icon;
  if (route.name === 'SearchStack') {
    icon = <MaterialIcons name="search" size={24} color="white" />;
  } else if (route.name === 'MapStack') {
    icon = <MaterialIcons name="map" size={24} color="white" />;
  } else if (route.name === 'SavedStack') {
    icon = <MaterialIcons name="favorite-border" size={24} color="white" />;
  } else if (route.name === 'ProfileStack') {
    icon = <MaterialIcons name="account-circle" size={24} color="white" />;
  }
  switch (route.name) {
    case 'SearchStack':
      return <TabBarItem title="Search" icon={icon} focused={focused} />;
    case 'MapStack':
      return <TabBarItem title="Map" icon={icon} focused={focused} />;
    case 'SavedStack':
      return <TabBarItem title="Saved" icon={icon} focused={focused} />;
    case 'ProfileStack':
      return <TabBarItem title="Profile" icon={icon} focused={focused} />;
    default:
      return <View />;
  }
};
const renderTabBackground = () => (
  <View style={[StyleSheet.absoluteFill, {}]} />
);

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="MapStack"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused }) =>
          renderTabBarIcon({ route, focused, insets }),
        tabBarStyle: {
          width: Dimensions.get('window').width,
          height: 80 + insets.bottom,
          backgroundColor: '#4b6446',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          display: getTabBarVisibility(route.name, navigation),
        },
        tabBarBackground: () => renderTabBackground(),
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        unmountOnBlur: true,
      })}
    >
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={() => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="MapStack"
        component={MapStack}
        options={() => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="SavedStack"
        component={SavedStack}
        options={() => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={() => ({
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
}
