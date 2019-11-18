import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
`;

export const HelpOrdem = styled.View`
  margin: 20px;
  padding: 15px;
  border-radius: 4px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
`;

export const HeaderOrdem = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.Text`
  text-align: justify;
  margin: 20px 0;
  font-size: 14px;
  color: #666666;
`;

export const TypeOrdem = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444444;
`;

export const TimeOrdem = styled.Text`
  height: 16px;
  font-size: 14px;
  color: #666666;
`;
