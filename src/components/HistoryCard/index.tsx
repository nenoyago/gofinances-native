import React from 'react';
import { Container, Title, Amount } from './styles';

type HistoryCard = {
  title: string;
  amount: string;
  color: string;
};

export function HistoryCard({ color, title, amount }: HistoryCard) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}
