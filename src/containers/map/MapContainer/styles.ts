import styled from 'styled-components/native';

export const ScreenWrapper = styled.View`
  flex: 1;
`;

export const MarkerWrapper = styled.View<{ selected: boolean }>`
  padding: 10px;
  border-radius: ${({ selected }) => (selected ? 10 : 5)}px;
  background: ${({ selected }) => (selected ? '#b3641c' : '#4a4a4c')};
`;

export const MarkerTitle = styled.Text`
  font-size: 21px;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
`;

export const PropertyWrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  z-index: 99999;
  flex-direction: row;
  margin: 20px;
  border: 0.5px solid ${({ theme }) => theme.color.text};
`;

export const PropertyImageWrapper = styled.View``;

export const StarWrapper = styled.View`
  position: absolute;
  right: 0;
  z-index: 9999999;
  background: ${({ theme }) => theme.color.background}
  flex-direction: row;
  align-items: center;
  padding: 2px;
  border-radius: 5px;
  margin: 10px;
`;

export const StarText = styled.Text``;

export const PropertyDescriptionWrapper = styled.View`
  background: ${({ theme }) => theme.color.background}
  flex: 1;
  padding: 10px;
  height: 120px;
`;

export const PropertyTitle = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.text}
  padding-bottom: 10px;
`;

export const PropertyDescriptionContainer = styled.View`
  flex-direction: row;
  padding-bottom: 10px;
`;
export const PropertyDescriptionText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.color.text};
  flex: 1
`;

export const FromTitle = styled.Text`
  padding-top: 10px;
`;

export const FromValue = styled.Text`
  color: ${({ theme }) => theme.color.brown}
  font-weight: bold;
`;
