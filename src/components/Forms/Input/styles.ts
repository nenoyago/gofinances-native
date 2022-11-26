import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    padding: 16px 18px;
    margin-bottom: 8px;
    border-radius: 5px;

    color: ${theme.colors.dark};
    background-color: ${theme.colors.shape};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `}
`;
