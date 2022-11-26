import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

type TransactionProps = {
  type: 'positive' | 'negative';
};

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.shape};
    border-radius: 5px;

    padding: 17px 24px;
    margin-bottom: 16px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};
  `}
`;

export const Amount = styled.Text<TransactionProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(20)}px;
    color: ${
      type === 'positive' ? theme.colors.success : theme.colors.attention
    }
    font-family: ${theme.fonts.regular};

    margin-top: 2px;
  `}
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(20)}px;
  `}
`;

export const CategoryName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(14)}px;

    margin-left: 17px;
  `}
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(14)}px;
  `}
`;
