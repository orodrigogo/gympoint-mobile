import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, ButtonLoginIn, Logo } from './styles';

import logo from '~/assets/logo.png';
import Input from '~/components/Input';

import { signInRequest } from '~/store/modules/auth/actions';

// const loading = useSelector(state => state.auth.loading);

export default function Login() {
  const dispath = useDispatch();

  const [idStudent, setIdStudent] = useState('');

  async function handleSubmit() {
    await dispath(signInRequest(idStudent));
  }

  return (
    <Container>
      <Logo source={logo} />

      <Input
        icon="account-circle"
        keyboardType="numeric"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Informe seu ID de cadastro"
        value={idStudent}
        onChangeText={setIdStudent}
      />
      <ButtonLoginIn loading={false} onPress={() => handleSubmit()}>
        Entrar no sistema
      </ButtonLoginIn>
    </Container>
  );
}
