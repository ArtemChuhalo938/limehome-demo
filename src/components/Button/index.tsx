import * as React from 'react';
import { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { ButtonWrapper, ButtonTextWrapper, RightIconWrapper } from './styles';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onPress: () => void;
  loading?: boolean;
  iconRight?: JSX.Element;
}

const Button: FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading,
  iconRight,
}) => (
  <ButtonWrapper onPress={onPress} disabled={disabled}>
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ButtonTextWrapper disabled={disabled}>{title}</ButtonTextWrapper>
      )}
      {iconRight && <RightIconWrapper>{iconRight}</RightIconWrapper>}
    </>
  </ButtonWrapper>
);

export default Button;
