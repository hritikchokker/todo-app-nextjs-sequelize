import axios from '../../utils/instance';
import { Register } from './ActionTypes';

function register(payload) {
  return async (dispatch) => {
    dispatch(registerRequest());
    try {
      const res = await axios.post('/auth/register', payload);
      // eslint-disable-next-line no-debugger
      if (res && res.token) {
        localStorage.setItem('token', `Bearer ${res.token}`);
        dispatch(registerSuccess(res.data));
      }
    } catch (err) {
      dispatch(registerFailure(err, 'There is an error in Register'));
    }
  };
}

const registerRequest = () => {
  return {
    type: Register.REGISTER_REQUEST,
  };
};

const registerSuccess = (data) => {
  return {
    type: Register.REGISTER_SUCCESS,
    payload: data,
  };
};
const registerFailure = (err) => {
  return {
    type: Register.REGISTER_FAILURE,
    payload: err,
  };
};

export const registerActions = {
  register,
};
