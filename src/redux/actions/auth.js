import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';
import Auth0 from 'react-native-auth0';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({email, password});

  try {
    const res = await axios.post(
      'https://unheard-server.herokuapp.com/users/login',
      body,
      config,
    );
    console.log(res.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const signup = (name, email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({name, email, password});
  try {
    const res = await axios.post(
      'https://unheard-server.herokuapp.com/users/signup',
      body,
      config,
    );

    console.log(res.data);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
