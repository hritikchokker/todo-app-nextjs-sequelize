import { ToDo } from './ActionTypes';

const intialstate = {
  task: '',
  creator: '',
  isImmediate: false,
  tasksList: [],
  taskDetails: null,
  redirectBack: false,
  updateList: false,
};

export function ToDoReducer(state = intialstate, action) {
  const { type, payload } = action;
  switch (type) {
    case ToDo.ADD_TODO: {
      return {
        ...state,
        redirectBack: true,
        updateList: true,
        // tasksList: payload,
      };
    }

    case ToDo.GET_TODO: {
      return {
        ...state,
        tasksList: payload,
        redirectBack: false,
        updateList: false,
      };
    }

    case ToDo.DETAIL_TODO: {
      return {
        ...state,
        taskDetails: payload,
      };
    }

    case ToDo.REMOVE_TODO: {
      return {
        ...state,
        updateList: true,
      };
    }

    case ToDo.UPDATE_TODO: {
      return {
        ...state,
        taskDetails: null,
      };
    }

    default:
      return state;
  }
}
