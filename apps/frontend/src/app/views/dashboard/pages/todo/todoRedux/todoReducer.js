import { ToDo } from './ActionTypes';

const intialstate = {
  task: '',
  creator: '',
  isImmediate: false,
  tasksList: [],
};

export function ToDoReducer(state = intialstate, action) {
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

    case ToDo.DETAIL_TODO: {
      return {
        ...state,
      };
    }

    case ToDo.REMOVE_TODO: {
      return {
        ...state,
      };
    }

    case ToDo.UPDATE_TODO: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
