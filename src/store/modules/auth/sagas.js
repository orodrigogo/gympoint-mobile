import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { signInSucess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { idStudent } = payload;

    const response = yield call(api.get, `students/${idStudent}`);

    const student = response.data;

    if (!student) {
      Alert.alert('Erro no login', 'ID de cadastro inválido!');
      return;
    }

    yield put(signInSucess(student));
  } catch (error) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export function signOut() {}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
