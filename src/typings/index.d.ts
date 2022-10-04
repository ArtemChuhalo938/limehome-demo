import { Color } from '../@types/Color';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
  }
}
