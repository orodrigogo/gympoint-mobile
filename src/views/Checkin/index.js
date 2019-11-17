import React from 'react';
import { Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import { Container } from './styles';

function Checkin() {
  return <Header />;
}

Checkin.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="access-time" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Checkin);
