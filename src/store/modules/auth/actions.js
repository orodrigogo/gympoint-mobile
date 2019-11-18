export function signInRequest(idStudent) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { idStudent },
  };
}

export function signInSucess(student) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { student },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
