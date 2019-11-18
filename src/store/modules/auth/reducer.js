import produce from 'immer';

const INITIAL_STATE = {
  student: null,
  loading: false,
  signed: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      // Manipulação quando a Action @auth/SIGN_IN_SUCCESS for disparada.
      case '@auth/SIGN_IN_SUCCESS': {
        draft.student = action.payload.student;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.student = null;
        draft.signed = false;
        break;
      }
      default:
        return state;
    }
  });
}
