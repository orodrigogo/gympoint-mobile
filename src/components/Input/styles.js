import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  height: 45px;
  border-radius: 4px;
  border: solid 1px #dddddd;
  background-color: #ffffff;

  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  color: #000;
  margin-left: 10px;
`;
