import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/types';
import {AsyncStorage} from 'react-native';

const initialState = {isRegistered: false, isAUthenticated: false};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case LOGIN_SUCCESS:
      AsyncStorage.setItem('token', payload.token);
      return {...state, ...payload, isAuthenticated: true};
    case REGISTER_SUCCESS:
      return {...state, isRegistered: true};

    case LOGIN_FAIL:
      AsyncStorage.removeItem('token');
      return {...state, isAuthenticated: false};
    case REGISTER_FAIL:
      return {...state, isAUthenticated: false, isRegistered: false};

    default:
      return state;
  }
}
