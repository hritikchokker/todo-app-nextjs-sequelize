import axios from '../../../environments/instance';
import { Login } from './ActionTypes';

function login(payload) {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const res = await axios.post('/auth/login', payload);
      if (res && res.data && res.token) {
        localStorage.setItem('token', res.token);
        res.data.token = res.token;
        // debugger;
        dispatch(loginSuccess(res.data));
      }
    } catch (err) {
      dispatch(loginFailure(err));
      console.log(err, 'An Error is there in Login !!');
    }
  };
}

const loginRequest = () => {
  return {
    type: Login.LOGIN_REQUEST,
  };
};

const loginSuccess = (data) => {
  // debugger;
  return {
    type: Login.LOGIN_SUCCESS,
    payload: data,
  };
};

const loginFailure = (err) => {
  return {
    type: Login.LOGIN_FAILURE,
    payload: err,
  };
};

export const loginActions = {
  login,
};
