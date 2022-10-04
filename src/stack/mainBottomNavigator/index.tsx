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

const renderTabBarIcon = ({ route, focused, insets }: any) => {
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
      return (
        <TabBarItem
          insets={insets}
          title="Search"
          icon={icon}
          focused={focused}
        />
      );
    case 'MapStack':
      return (
        <TabBarItem insets={insets} title="Map" icon={icon} focused={focused} />
      );
    case 'SavedStack':
      return (
        <TabBarItem
          insets={insets}
          title="Saved"
          icon={icon}
          focused={focused}
        />
      );
    case 'ProfileStack':
      return (
        <TabBarItem
          insets={insets}
          title="Profile"
          icon={icon}
          focused={focused}
        />
      );
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
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) =>
          renderTabBarIcon({ route, focused, insets }),
        tabBarStyle: {
          width: Dimensions.get('window').width,
          height: 80 + insets.bottom,
          backgroundColor: '#4b6446',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
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
        listeners={{
          tabPress: () => console.log('Search tab press'),
        }}
        options={() => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="MapStack"
        component={MapStack}
        listeners={{
          tabPress: () => console.log('Map tab press'),
        }}
        options={() => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="SavedStack"
        component={SavedStack}
        listeners={{
          tabPress: () => console.log('Saved tab press'),
        }}
        options={() => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        listeners={{
          tabPress: () => console.log('Profile tab press'),
        }}
        options={() => ({
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
}
