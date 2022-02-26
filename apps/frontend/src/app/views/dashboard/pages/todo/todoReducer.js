import { ToDo } from './ActionTypes';

const intialstate = {
  task: '',
  creater: '',
  isImmediate: false,
  tasksList: [],
};

export function TODoReducer(state = intialstate, action) {
  const { type, payload } = action;
  switch (type) {
    case ToDo.ADD_TODO: {
      return {
        ...state,
        // tasksList: payload,
      };
    }

    case ToDo.GET_TODO: {
      return {
        ...state,
        tasksList: payload,
      };
    }

    case ToDo.REMOVE_TODO: {
      return {
        ...state,
      };
    }

    case ToDo.UPDATE_TODO: {
      return {};
    }

    default:
      return state;
  }
}
