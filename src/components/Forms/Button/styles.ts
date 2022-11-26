import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    align-items: center;

    width: 100%;
    padding: 18px;
    border-radius: 5px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(14)}px;
  `}
`;
