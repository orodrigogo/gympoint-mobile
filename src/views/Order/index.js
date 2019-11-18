import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import CardOrdem from '~/components/CardOrdem';

import { Container, ButtonNew } from './styles';

function Order() {
  async function handleOrder() {}

  return (
    <>
      <Header />
      <Container>
        <ButtonNew loading={false} onPress={() => handleOrder()}>
          Novo pedido de auxílio
        </ButtonNew>
        <CardOrdem />
      </Container>
    </>
  );
}

Order.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="chat-bubble-outline" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Order);
