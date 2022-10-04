import * as React from 'react';
import MapContainer from '../../containers/map/MapContainer';
import { screen } from '../../@types';

function MapScreen(props: screen) {
  return <MapContainer {...props} />;
}

export default MapScreen;
