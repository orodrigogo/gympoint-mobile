import React from 'react';
import { Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import { Container } from './styles';

function Order() {
  return <Header />;
}

Order.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="chat-bubble-outline" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Order);
