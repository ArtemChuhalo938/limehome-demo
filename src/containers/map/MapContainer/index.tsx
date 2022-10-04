import React, { FC, useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Dimensions, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  FromTitle,
  FromValue,
  MarkerTitle,
  MarkerWrapper,
  PropertyDescriptionContainer,
  PropertyDescriptionText,
  PropertyDescriptionWrapper,
  PropertyImageWrapper,
  PropertyTitle,
  PropertyWrapper,
  ScreenWrapper,
  StarText,
  StarWrapper,
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
});

const MapContainer: FC<MapContainerProps> = () => {
  const { fetchProperties } = useMap();
  const { navigate } = useNavigation<any>();
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  useEffect(() => {
    fetchProperties().then((data) => setProperties(data));
  }, []);

  const renderMarkers = () =>
    properties.map((property: any) => (
      <Marker
        zIndex={999}
        coordinate={{
          latitude: property.location.lat,
          longitude: property.location.lng,
        }}
        onPress={() => setSelectedProperty(property)}
      >
        <MarkerWrapper selected={property.id === selectedProperty?.id}>
          <MarkerTitle>
            {selectedProperty?.lowest_price_per_night || 0}€
          </MarkerTitle>
        </MarkerWrapper>
      </Marker>
    ));

  const goToProperty = () => {
    navigate('PropertyScreen', { id: selectedProperty.id });
  };

  return (
    <ScreenWrapper>
      <MapView
        region={{
          latitude: 51.1657,
          longitude: 10.4515,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={false}
        zoomEnabled={true}
      >
        {renderMarkers()}
      </MapView>
      {selectedProperty && (
        <PropertyWrapper onPress={goToProperty}>
          <PropertyImageWrapper>
            <Image
              source={{
                uri: selectedProperty.images.length
                  ? selectedProperty.images[0].url
                  : '',
              }}
              style={{
                width: 120,
                height: 120,
                backgroundColor: '#fff',
              }}
            />
            <StarWrapper>
              <StarText>4.5</StarText>
              <MaterialIcons name="star" size={24} color="#b3641c" />
            </StarWrapper>
          </PropertyImageWrapper>
          <PropertyDescriptionWrapper>
            <PropertyTitle numberOfLines={1}>
              {selectedProperty.name}
            </PropertyTitle>
            <PropertyDescriptionContainer>
              <MaterialIcons name="location-on" size={24} color="#b3641c" />
              <PropertyDescriptionText numberOfLines={1}>
                {Number(selectedProperty.distance).toFixed(2)} km from city
                center
              </PropertyDescriptionText>
            </PropertyDescriptionContainer>
            <Divider />
            <FromTitle numberOfLines={1}>
              From
              <FromValue>
                {' '}
                {selectedProperty.lowest_price_per_night || 0}€/Night
              </FromValue>
            </FromTitle>
          </PropertyDescriptionWrapper>
        </PropertyWrapper>
      )}
    </ScreenWrapper>
  );
};

export default MapContainer;
