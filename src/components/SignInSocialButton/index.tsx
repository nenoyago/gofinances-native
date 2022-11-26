import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { Container, ImageContainer, Title } from './styles';

type SignInSocialButtonProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
};

export function SignInSocialButton({
  title,
  icon: Icon,
  ...rest
}: SignInSocialButtonProps) {
  return (
    <Container {...rest}>
      <ImageContainer>
        <Icon />
      </ImageContainer>

      <Title>{title}</Title>
    </Container>
  );
}
