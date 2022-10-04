import styled from "styled-components/native";

export const ButtonWrapper = styled.TouchableHighlight<{
  disabled?: boolean;
}>`
  background-color: ${({ disabled, theme }) => (disabled ? theme.color.black : theme.color.green)};
  align-items: center;
  flex-direction: row;
  background: ${({ theme }) => theme.color.green}
  padding: 10px 20px;
  border-radius: 5px;
`;

export const ButtonTextWrapper = styled.Text<{
  disabled: boolean;
}>`
  font-size: 24px;
  padding-right: 10px;
  color: ${({ theme }) => theme.color.white}
`;

export const RightIconWrapper = styled.View``;
