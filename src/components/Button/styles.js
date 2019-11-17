import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 90%;
  height: 45px;
  border-radius: 4px;
  background-color: #ee4e62;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

export const Input = styled.TextInput`
  width: 325px;
  height: 45px;
  border-radius: 4px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
`;
