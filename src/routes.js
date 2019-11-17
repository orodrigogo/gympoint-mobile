import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Checkin from './views/Checkin';
import Order from './views/Order';
import Login from './views/Login';

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
            Order,
          },
          {
            resetOnBlur: true, // toda vez que sai da rota reseta.
            tabBarOptions: {
              activeTintColor: '#ee4e62',
              inactiveTintColor: 'rgba(238, 78, 98, .7)',
              keyboardHidesTabBar: true, // Faz com que o teclado passe por cima do barra de menu.
              style: {
                backgroundColor: '#ffffff',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signIn ? 'App' : 'Sign',
      }
    )
  );
