import * as React from 'react';
import SearchContainer from '../../containers/search/SearchContainer';
import { screen } from '../../@types';

function SearchScreen(props: screen) {
  return <SearchContainer {...props} />;
}

export default SearchScreen;
