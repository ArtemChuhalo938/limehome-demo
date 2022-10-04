import * as React from 'react';
import PropertyContainer from '../../containers/map/Property';
import { screen } from '../../@types';

function PropertyScreen(props: screen) {
  return <PropertyContainer {...props} />;
}

export default PropertyScreen;
