import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
  align-items: center;
`;

export const ButtonNew = styled(Button)`
  margin: 20px;
`;

export const List = styled.FlatList`
  width: 90%;
`;
