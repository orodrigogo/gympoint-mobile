import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Header from '~/components/Header';
import CardCheckin from '~/components/CardCheckin';

import { Container, ButtonNew, List } from './styles';

function Checkin() {
  const [checkins, setCheckins] = useState([]);
  const student = useSelector(state => state.auth.student);

  useEffect(() => {
    async function loadCheckins() {
      const response = await api.get(`students/${student.id}/checkins`);
      setCheckins(response.data);
    }

    loadCheckins();
  }, []);

  async function handleCheckin() {}

  async function handleDetails() {}

  return (
    <>
      <Header />
      <Container>
        <ButtonNew loading={false} onPress={() => handleCheckin()}>
          Entrar no sistema
        </ButtonNew>

        <List
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <CardCheckin onCancel={() => handleDetails(item.id)} data={item} />
          )}
        />
      </Container>
    </>
  );
}

Checkin.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="access-time" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Checkin);
