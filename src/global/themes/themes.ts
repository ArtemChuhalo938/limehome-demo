import { DefaultTheme } from 'styled-components';
import { Color } from '../../@types/Color';

const color: Color = {
  black: '#000000',
  white: '#ffffff',
  text: '#4a4a4c',
  green: '#4b6446',
  yellow: '#c9cbad',
  brown: '#b3641c',
  background: '#f7f1ea',
  transparent: 'transparent',
};

const LightTheme: DefaultTheme = {
  color: {
    black: '#000000',
    white: '#ffffff',
    text: '#4a4a4c',
    green: '#4b6446',
    yellow: '#c9cbad',
    brown: '#b3641c',
    background: '#f7f1ea',
    transparent: 'transparent',
  },
};

const DarkTheme: DefaultTheme = {
  color: {
    black: '#000000',
    white: '#ffffff',
    text: '#4a4a4c',
    green: '#4b6446',
    yellow: '#c9cbad',
    brown: '#b3641c',
    background: '#f7f1ea',
    transparent: 'transparent',
  },
};

export default { LightTheme, DarkTheme, color };
