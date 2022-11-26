import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: flex-end;
  align-items: center;
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(30)}px;
    color: ${theme.colors.shape};

    text-align: center;
    margin-top: 45px;
  `}
`;

export const SignInTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.shape};

    text-align: center;
    margin: 80px 0 67px;
  `}
`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 32px;

  justify-content: space-between;
`;
