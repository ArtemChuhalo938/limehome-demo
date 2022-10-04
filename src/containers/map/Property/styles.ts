import styled from 'styled-components/native';

export const ScreenWrapper = styled.View`
  flex: 1;
`;

export const HeaderWrapper = styled.View``;

export const CloseButtonWrapper = styled.TouchableOpacity`
  position: absolute;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  background: #f7f1ea;
`;

export const ContentWrapper = styled.ScrollView`
  flex: 1;
  background: #f7f1ea;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #4a4a4c;
`;

export const StarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 3px 10px;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid #4a4a4c;
`;

export const StarText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #4a4a4c;
  padding-right: 5px;
`;

export const PropertyLocationContainer = styled.View`
  flex-direction: row;
  padding-bottom: 10px;
`;
export const PropertyLocationText = styled.Text`
  font-size: 18px;
  color: #4a4a4c;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #4a4a4c;
  padding-bottom: 10px;
`;

export const RoomTypes = styled.View``;

export const RoomTypesTitle = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: #4a4a4c;
  padding: 10px 0 10px;
`;

export const RoomItemsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const RoomItemWrapper = styled.View`
  background: #c9cbad;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px 5px 0;
`;

export const RoomItemTitle = styled.Text`
  font-size: 18px;
  color: #4a4a4c;
`;

export const FooterWrapper = styled.View`
  background: #c9cbad;
  padding: 10px 20px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const FromTitle = styled.Text``;

export const FromValue = styled.Text`
  color: #b3641c;
`;

export const ExploreButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  background: #4b6446;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const ExploreTitle = styled.Text`
  font-size: 24px;
  padding-right: 10px;
  color: #fff;
`;
