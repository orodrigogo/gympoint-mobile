import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

import { Container, Description, SendOrdem } from './styles';
import Header from '~/components/Header';

import api from '~/services/api';

export default function NewOrder({ navigation }) {
  const [ordem, setOrdem] = useState('');
  const student = useSelector(state => state.auth.student);

  async function HandleOrdem() {
    await api.post(`students/${student.id}/help-orders`, { question: ordem });

    Alert.alert('Pedido de ajuda enviado com sucesso!');
    navigation.navigate('Order');
  }

  return (
    <>
      <Header />
      <Container>
        <Description
          placeholder="Inclua seu pedido de auxílio"
          value={ordem}
          onChangeText={setOrdem}
        />
        <SendOrdem onPress={() => HandleOrdem()}>Enviar pedido</SendOrdem>
      </Container>
    </>
  );
}
