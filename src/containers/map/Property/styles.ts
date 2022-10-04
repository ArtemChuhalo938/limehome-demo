import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const ScreenWrapper = styled.View`
  flex: 1;
`;

export const HeaderWrapper = styled.View``;

export const CloseButtonWrapper = styled.TouchableOpacity`
  position: absolute;
  margin: ${() => (Platform.OS === 'ios' ? '40px 20px 20px 20px' : '20px')};
  padding: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.background};
`;

export const ContentWrapper = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.color.background};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.text};
  flex: 1;
`;

export const StarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 3px 10px;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid ${({ theme }) => theme.color.text};
`;

export const StarText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.text}
  padding-right: 5px;
`;

export const PropertyLocationContainer = styled.View`
  flex-direction: row;
  padding-bottom: 10px;
`;
export const PropertyLocationText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.color.text};
`;

export const Description = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.color.text}
  padding-bottom: 10px;
`;

export const RoomTypes = styled.View``;

export const RoomTypesTitle = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.text}
  padding: 10px 0 10px;
`;

export const RoomItemsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const RoomItemWrapper = styled.View`
  background: ${({ theme }) => theme.color.yellow}
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px 5px 0;
`;

export const RoomItemTitle = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.color.text};
`;

export const FooterWrapper = styled.View`
  background: ${({ theme }) => theme.color.yellow}
  padding: 20px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const FromTitle = styled.Text``;

export const FromValue = styled.Text`
  color: ${({ theme }) => theme.color.brown};
`;

export const ActivityIndicatorWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
