import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
  justify-content: center;
`;

export const ButtonNew = styled(Button)`
  margin: 20px;
`;

export const List = styled.FlatList`
  margin: 0 20px;
`;
