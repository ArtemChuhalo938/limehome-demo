import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import themes from './src/global/themes/themes';
import { navigationRef } from './src/services/NavigationService';
import BottomNavigator from "./src/stack/mainBottomNavigator";

const MyDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => (
    <ThemeProvider theme={themes.LightTheme}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef} theme={MyDefaultTheme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={themes.color.black}
          />
          <BottomNavigator />
        </NavigationContainer></SafeAreaProvider>
    </ThemeProvider>
  );

export default App;
