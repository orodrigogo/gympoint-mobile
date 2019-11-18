import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Checkin from './views/Checkin';
import Order from './views/Order';
import Login from './views/Login';

import NewOrder from './views/NewOrder';
import OrdemDetail from './views/OrdemDetail';

import { signOut } from '~/store/modules/auth/actions';

function Logout({ navigation }) {
  const dispatch = useDispatch();
  dispatch(signOut());
  return Login;
}

Logout.navigationOptions = {
  tabBarLabel: 'Sair',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="compare-arrows" size={20} color={tintColor} />
  ),
};

export default (signIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Login,
        }),
        App: createBottomTabNavigator(
          {
            Checkin,
            New: {
              screen: createStackNavigator(
                {
                  Order,
                  NewOrder,
                  OrdemDetail,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#FFF',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: true,
                tabBarLabel: 'Pedir Ajuda',
                tabBarIcon: (
                  <Icon name="chat-bubble-outline" size={20} color="#ee4e62" />
                ),
              },
            },
            Logout,
          },
          {
            resetOnBlur: true, // toda vez que sai da rota reseta.
            tabBarOptions: {
              activeTintColor: '#ee4e62',
              inactiveTintColor: 'rgba(238, 78, 98, .7)',
              keyboardHidesTabBar: true, // Faz com que o teclado passe por cima do barra de menu.
              style: {
                backgroundColor: '#FFF',
              },
            },
          }
        ),
      },
      { initialRouteName: signIn ? 'App' : 'Sign' }
    )
  );
