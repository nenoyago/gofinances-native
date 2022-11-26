import React from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from './styles';
import { categories } from '../../utils/categories';
import { Button } from '../../components/Forms/Button';

type Category = {
  key: string;
  name: string;
};

type CategorySelectProps = {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectedCategory: () => void;
};

export function CategorySelect({
  category,
  setCategory,
  closeSelectedCategory,
}: CategorySelectProps) {
  function handleCategorySelect(item: Category) {
    setCategory(item);
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        style={{ flex: 1, width: '100%' }}
        data={categories}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} isActive={category.key === item.key} />
            <Name isActive={category.key === item.key}>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelectedCategory} />
      </Footer>
    </Container>
  );
}
