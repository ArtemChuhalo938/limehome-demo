import React, { FC, useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Dimensions, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {
  CloseButtonWrapper,
  ContentWrapper,
  Description,
  ExploreButton,
  ExploreTitle,
  FooterWrapper,
  FromTitle,
  FromValue,
  HeaderWrapper,
  MarkerTitle,
  PropertyDescriptionContainer,
  PropertyDescriptionText,
  PropertyDescriptionWrapper,
  PropertyImageWrapper,
  PropertyLocationContainer,
  PropertyLocationText,
  PropertyTitle,
  PropertyWrapper,
  RoomItemsWrapper,
  RoomItemTitle,
  RoomItemWrapper,
  RoomTypes,
  RoomTypesTitle,
  ScreenWrapper,
  StarText,
  StarWrapper,
  Title,
  TitleContainer,
} from './styles';
import ScreenProps from '../../../@types/screen';
import { useMap } from '../../hooks/Map';
import Divider from '../../../components/Divider';

interface MapContainerProps extends ScreenProps {}

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  map: {
    width,
    height,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
type PropertyRouteInterface = {
  params: { id: string };
};

const PropertyContainer: FC<MapContainerProps> = () => {
  const { params } = useRoute<RouteProp<PropertyRouteInterface, 'params'>>();
  const { fetchPropertyById } = useMap();
  const { goBack } = useNavigation();
  const [property, setProperty] = useState();

  useEffect(() => {
    if (params?.id) {
      fetchPropertyById(params.id).then((data) => setProperty(data));
    }
  }, [params.id]);

  console.log('property:', property);

  if (!property) {
    return null;
  }

  console.log('property.unit_groups:', property.unit_groups[0]);

  return (
    <ScreenWrapper>
      <HeaderWrapper>
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: 200,
          }}
          source={{
            uri: property.images.length ? property.images[0].url : '',
          }}
        />
        <CloseButtonWrapper onPress={goBack}>
          <MaterialIcons name="close" size={24} color="black" />
        </CloseButtonWrapper>
      </HeaderWrapper>
      <ContentWrapper contentContainerStyle={styles.scrollContainer}>
        <TitleContainer>
          <Title>{property.name}</Title>
          <StarWrapper>
            <StarText>4.5</StarText>
            <MaterialIcons name="star" size={24} color="#b3641c" />
          </StarWrapper>
        </TitleContainer>
        <PropertyLocationContainer>
          <MaterialIcons name="location-on" size={24} color="#b3641c" />
          <PropertyLocationText numberOfLines={1}>
            {Number(property.distance).toFixed(2)} km from city center
          </PropertyLocationText>
        </PropertyLocationContainer>
        <Description>{property.description}</Description>
        <Divider lineWidth={0.5} />
        <RoomTypes>
          <RoomTypesTitle>Room types available in this location</RoomTypesTitle>
          <RoomItemsWrapper>
            {property.unit_groups.map((unit_group) => (
              <RoomItemWrapper>
                <RoomItemTitle>
                  {unit_group.bedroom_count}x1 Bedroom suites
                </RoomItemTitle>
              </RoomItemWrapper>
            ))}
          </RoomItemsWrapper>
        </RoomTypes>
      </ContentWrapper>
      <FooterWrapper>
        <FromTitle>
          From
          <FromValue> {property.lowest_price_per_night || 0}€/Night</FromValue>
        </FromTitle>
        <ExploreButton>
          <ExploreTitle>EXPLORE</ExploreTitle>
          <MaterialIcons name="arrow-right-alt" size={24} color="white" />
        </ExploreButton>
      </FooterWrapper>
    </ScreenWrapper>
  );
};
export default PropertyContainer;
