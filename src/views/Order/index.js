import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import CardOrdem from '~/components/CardOrdem';

import { Container, ButtonNew, List } from './styles';

import api from '~/services/api';

function Order({ navigation, isFocused }) {
  const student = useSelector(state => state.auth.student);
  const [orders, setOrders] = useState([]);

  async function loadOrders() {
    const response = await api.get(`students/${student.id}/help-orders`);
    setOrders(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadOrders();
    }
  }, [isFocused]);

  return (
    <>
      <Header />
      <Container>
        <ButtonNew onPress={() => navigation.navigate('NewOrder')}>
          Novo pedido de auxílio
        </ButtonNew>
        <List
          data={orders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <CardOrdem
              data={item}
              onPress={() => navigation.navigate('OrdemDetail', { item })}
            />
          )}
        />
      </Container>
    </>
  );
}

export default withNavigationFocus(Order);
