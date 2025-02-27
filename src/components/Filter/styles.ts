import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) => css`
    height: 38px;
    width: 70px;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    border: 1px solid
      ${isActive ? theme.COLORS.GREEN_700 : theme.COLORS.GRAY_600};
    border-radius: 4px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
    text-transform: uppercase;
  `}
`;
