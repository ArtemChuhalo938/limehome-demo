import React, {FC} from 'react';
import {
  ScreenWrapper, Title
} from './styles';
import ScreenProps from "../../../@types/screen";


interface SavedContainerProps extends ScreenProps {

}


const SavedContainer: FC<SavedContainerProps> = () => (
    <ScreenWrapper>
      <Title>Saved</Title>
    </ScreenWrapper>
  )

export default SavedContainer;
