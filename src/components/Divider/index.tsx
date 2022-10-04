import styled from 'styled-components/native';

export const name = 'Divider';
export default styled.View<{
  isVertical?: boolean;
  lineWidth?: number;
  maxWidth?: number;
  color?: string;
}>`
  height: ${({ isVertical, lineWidth, maxWidth }) =>
    isVertical
      ? maxWidth
        ? `${maxWidth}px`
        : '100%'
      : lineWidth
      ? `${lineWidth}px`
      : '1px'};
  background-color: ${({ color, theme }) => color || theme.color.black};
  width: ${({ isVertical, lineWidth, maxWidth }) =>
    isVertical
      ? lineWidth
        ? `${lineWidth}px`
        : '2px'
      : maxWidth
      ? `${maxWidth}px`
      : '100%'};
`;
