import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

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

  async function loadCheckins() {
    const response = await api.get(`students/${student.id}/checkins`);
    setCheckins(response.data);
  }

  useEffect(() => {
    loadCheckins();
  }, []);

  async function handleCheckin() {
    const response = await api
      .post(`students/${student.id}/checkins`)
      .then(loadCheckins())
      .catch(Alert.alert('Você pode fazer somente 3 check-ins por dia!'));
  }

  return (
    <>
      <Header />
      <Container>
        <ButtonNew loading={false} onPress={() => handleCheckin()}>
          Novo check-in
        </ButtonNew>

        <List
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <CardCheckin data={item} />}
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
