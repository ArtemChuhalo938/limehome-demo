import React, {FC} from 'react';
import {
  ScreenWrapper, Title
} from './styles';
import ScreenProps from "../../../@types/screen";

interface SearchContainerProps extends ScreenProps {

}

const SearchContainer: FC<SearchContainerProps> = () => (
    <ScreenWrapper>
      <Title>Search</Title>
    </ScreenWrapper>
  )

export default SearchContainer;
