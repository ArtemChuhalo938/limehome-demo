import React, { FC, useMemo, useState } from 'react';
import { Dimensions, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {
  ActivityIndicatorWrapper,
  CloseButtonWrapper,
  ContentWrapper,
  Description,
  FooterWrapper,
  FromTitle,
  FromValue,
  HeaderWrapper,
  PropertyLocationContainer,
  PropertyLocationText,
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
import Button from '../../../components/Button';
import { Property } from '../../../@types/Property';

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
  const [property, setProperty] = useState<Property>();
  const isPropertyLoaded: boolean = useMemo(() => {
    if (params?.id) {
      fetchPropertyById(params.id).then((data: Property) => setProperty(data));
      return true;
    }
    return false;
  }, [params.id]);

  return isPropertyLoaded && property ? (
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
            {/* TODO Didn't find field in response object to get rating value. Mocked data */}
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
                  {/* TODO Need clarification The logic of displaying the the value (3x2, 3x1, etc.) is not entirely clear. We have only one bedroom_count value */}
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
          {/* todo: looks like some kind of error with the backend. Get always null for lowest_price_per_night */}
          <FromValue> {property.lowest_price_per_night || 0}€/Night</FromValue>
        </FromTitle>
        <Button
          title="EXPLORE"
          onPress={() => {}}
          iconRight={
            <MaterialIcons name="arrow-right-alt" size={24} color="white" />
          }
        />
      </FooterWrapper>
    </ScreenWrapper>
  ) : (
    <ActivityIndicatorWrapper>
      <ActivityIndicator size={100} />
    </ActivityIndicatorWrapper>
  );
};
export default PropertyContainer;
