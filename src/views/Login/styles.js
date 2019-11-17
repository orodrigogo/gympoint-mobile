import { Platform } from 'react-native';

import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enable: Platform.OS === 'ios',
  behavior: 'padding', // quando abre o teclado, jogo todo o conteudo para cima.
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonLoginIn = styled(Button)`
  margin-top: 20px;
`;

export const Logo = styled.Image`
  margin-bottom: 10px;
`;
