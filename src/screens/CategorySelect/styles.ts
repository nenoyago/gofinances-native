import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import {
  GestureHandlerRootView,
  RectButton,
} from 'react-native-gesture-handler';

import { RFValue } from 'react-native-responsive-fontsize';

type CategoryProps = {
  isActive: boolean;
};

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 19px;

  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
  `}
`;

export const Category = styled(RectButton)<CategoryProps>`
  width: 100%;
  padding: ${RFValue(15)}px;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary_light : theme.colors.background};

  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)<CategoryProps>`
  ${({ theme, isActive }) => css`
    color: ${isActive ? theme.colors.title : theme.colors.text};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    margin-right: 16px;
  `}
`;

export const Name = styled.Text<CategoryProps>`
  ${({ theme, isActive }) => css`
    color: ${isActive ? theme.colors.title : theme.colors.text};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `}
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
