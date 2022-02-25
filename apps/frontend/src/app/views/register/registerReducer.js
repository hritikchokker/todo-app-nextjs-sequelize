import { Register } from "./ActionTypes";

const initialState = {
  user: {},
  token: null,
  isloading: false,
};

export function registerReducer(state = initialState, action) {
  switch (action.type) {
    case Register.REGISTER_REQUEST:
      return {
        ...state,
        isloading: true,
      };

    case Register.REGISTER_SUCCESS:
      return {
        ...state,
        isloading: false,
        user: action.payload.data,
        token: action.payload.token,
      };

    case Register.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        token: null,
        user: {},
      };

    default:
      return state;
  }
}
