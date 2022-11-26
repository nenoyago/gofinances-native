import React, { useCallback, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { VictoryPie } from 'victory-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { useTheme } from 'styled-components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { HistoryCard } from '../../components/HistoryCard';
import { categories } from '../../utils/categories';

import {
  Container,
  Header,
  Content,
  Title,
  ChartContainer,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  Month,
  LoadContainer,
} from './styles';

type TransactionData = {
  id: string;
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
};

type CategoryData = {
  key: string;
  name: string;
  color: string;
  total: number;
  totalFormatted: string;
  percent: string;
};

export function Resume() {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    []
  );

  function handleDateChange(action: 'next' | 'prev'): void {
    if (action === 'next') {
      setSelectedDate(state => addMonths(state, 1));
    } else {
      setSelectedDate(state => subMonths(state, 1));
    }
  }

  async function loadData(): Promise<void> {
    setIsLoading(true);
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted: TransactionData[] = response
      ? JSON.parse(response)
      : [];

    const expensivesTransactions = responseFormatted.filter(expensive => {
      const expensiveDate = new Date(expensive.date);
      return (
        expensive.type === 'negative' &&
        expensiveDate.getMonth() === selectedDate.getMonth() &&
        expensiveDate.getFullYear() === selectedDate.getFullYear()
      );
    });
    const expensivesTransactionsTotal = expensivesTransactions.reduce(
      (acc, expensive) => acc + Number(expensive.amount),
      0
    );

    const totalByCategory: CategoryData[] = [];
    for (const category of categories) {
      let categorySum = 0;
      for (const expensiveTransaction of expensivesTransactions) {
        if (expensiveTransaction.category === category.key) {
          categorySum += Number(expensiveTransaction.amount);
        }
      }
      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const percent = `${(
          (categorySum / expensivesTransactionsTotal) *
          100
        ).toFixed(1)}%`;

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted,
          percent,
        });
      }
    }
    setTotalByCategories(totalByCategory);
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [selectedDate])
  );

  return (
    <Container>
      <Header>
        <Title>Resumo</Title>
      </Header>

      <Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: isLoading ? 1 : 0,
          paddingHorizontal: 24,
          paddingBottom: useBottomTabBarHeight() - 60,
        }}
      >
        <MonthSelect>
          <MonthSelectButton onPress={() => handleDateChange('prev')}>
            <MonthSelectIcon name="chevron-left" size={32} />
          </MonthSelectButton>

          <Month>{format(selectedDate, 'MMMM, yyyy', { locale: ptBR })}</Month>

          <MonthSelectButton onPress={() => handleDateChange('next')}>
            <MonthSelectIcon name="chevron-right" size={32} />
          </MonthSelectButton>
        </MonthSelect>

        {isLoading ? (
          <LoadContainer>
            <ActivityIndicator color={theme.colors.primary} size="large" />
          </LoadContainer>
        ) : (
          <>
            <ChartContainer>
              <VictoryPie
                data={totalByCategories}
                x="percent"
                y="total"
                colorScale={totalByCategories.map(category => category.color)}
                labelRadius={50}
                style={{
                  labels: {
                    fontSize: RFValue(18),
                    fontWeight: 'bold',
                    fill: theme.colors.shape,
                  },
                }}
              />
            </ChartContainer>
            {totalByCategories.length > 0 &&
              totalByCategories.map(category => (
                <HistoryCard
                  key={category.key}
                  title={category.name}
                  amount={category.totalFormatted}
                  color={category.color}
                />
              ))}
          </>
        )}
      </Content>
    </Container>
  );
}
