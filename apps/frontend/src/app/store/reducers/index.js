import { combineReducers } from 'redux';
import { ToDoReducer } from '../../views/dashboard/pages/todo/todoRedux/todoReducer';
import { loginReducer } from '../../views/login/loginReducer';
import { registerReducer } from '../../views/register/registerReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  todo: ToDoReducer,
});

export default rootReducer;
