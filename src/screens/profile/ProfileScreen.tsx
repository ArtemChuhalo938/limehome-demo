import * as React from 'react';
import ProfileContainer from '../../containers/profile/ProfileContainer';
import { screen } from '../../@types';

function ProfileScreen(props: screen) {
  return <ProfileContainer {...props} />;
}

export default ProfileScreen;
