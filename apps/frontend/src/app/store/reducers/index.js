import { combineReducers } from 'redux';
import { loginReducer } from '../../views/login/loginReducer';
import { registerReducer } from '../../views/register/registerReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
});

export default rootReducer;
