import styled from 'styled-components/native';

export const TabBarItemContainerWrapper = styled.View<{bottom: number, focused: boolean}>`
  height: ${({ bottom }) => `${60 + bottom}px`};
  background: ${({ focused }) => focused ? "#5a7151" : "transparent"};
  width: 70px;
  border-radius: 5px;
`;

export const TabBarItemContentWrapper = styled.View`
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const TabBarItemImageContainerWrapper = styled.View`
  height: 24px;
  justify-content: center;
`;

export const TabBarItemTextWrapper = styled.Text`
  margin-top: 2px;
  color: ${({ theme }) => theme.color.white};
  font-size: 12px;
`;

