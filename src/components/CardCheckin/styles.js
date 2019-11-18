import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border: solid 1px #dddddd;
  background-color: #ffffff;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin: 5px 0;
`;
export const CheckinId = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444444;
`;
export const CheckinTime = styled.Text`
  font-size: 14px;
  color: #666666;
`;
