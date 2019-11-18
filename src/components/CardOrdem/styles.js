import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  border-radius: 4px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
  padding: 15px;
  justify-content: center;
  margin: 5px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Status = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.answer ? '#42cb59' : '#999999')};
`;
export const Time = styled.Text`
  font-size: 14px;
  color: #666666;
`;

export const Content = styled.Text`
  font-size: 14px;
  color: #666666;
  margin-top: 15px;
  text-align: justify;
`;
