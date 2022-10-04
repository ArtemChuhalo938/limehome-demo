import React, {FC} from 'react';
import {
  ScreenWrapper, Title
} from './styles';
import ScreenProps from "../../../@types/screen";


interface ProfileContainerProps extends ScreenProps {

}

const ProfileContainer: FC<ProfileContainerProps> = () => (
    <ScreenWrapper>
      <Title>Profile</Title>
    </ScreenWrapper>
  )

export default ProfileContainer;
