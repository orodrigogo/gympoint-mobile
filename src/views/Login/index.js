import React from 'react';

import { Container, ButtonLoginIn, Logo } from './styles';

import logo from '~/assets/logo.png';
import Input from '~/components/Input';

export default function Login() {
  return (
    <Container>
      <Logo source={logo} />

      <Input
        icon="account-circle"
        keyboardType="numeric"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Informe seu ID de cadastro"
      />
      <ButtonLoginIn loading={false}>Entrar no sistema</ButtonLoginIn>
    </Container>
  );
}
