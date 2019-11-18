import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #f5f5f5;
`;
export const Description = styled.TextInput.attrs({
  multiline: true,
})`
  width: 335px;
  height: 300px;
  border-radius: 4px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
  margin: 20px 0;
  padding: 15px;
`;
export const SendOrdem = styled(Button)``;
