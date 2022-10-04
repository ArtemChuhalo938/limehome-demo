import * as React from 'react';
import SavedContainer from '../../containers/saved/SavedContainer';
import { screen } from '../../@types';

function SavedScreen(props: screen) {
  return <SavedContainer {...props} />;
}

export default SavedScreen;
