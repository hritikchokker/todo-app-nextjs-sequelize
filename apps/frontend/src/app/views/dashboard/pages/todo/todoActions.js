import axios from '../../../../utils/axiosInstance/AxiosInstance';
import { ToDo } from './ActionTypes';

export const getList = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/todo`);
      if (res && res.data) {
        dispatch(getSuccess(res.data));
      }
    } catch (err) {
      dispatch(getFailure(err));
    }
  };
};

const getSuccess = (data) => {
  return {
    type: ToDo.GET_TODO,
    payload: data,
  };
};

const getFailure = (err) => {
  return {
    type: ToDo.FAIL_TODO,
    payload: err,
  };
};

export const getAdd = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('/todo', data);
      console.log(data);
      if (res && res.data) {
        dispatch(addSuccess(res.data));
        dispatch(getList());
      }
    } catch (err) {
      console.log('An Error', err);
    }
  };
};

const addSuccess = (data) => {
  return {
    type: ToDo.ADD_TODO,
    payload: data,
  };
};

export const getRemove = (taskId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`/todo/${taskId}`);
      if (res && res.data) {
        // dispatch(removeSuccess(res.data));
        dispatch(getList());
      }
    } catch (err) {
      console.log('An Error', err);
    }
  };
};

export const getUpdate = (id, data) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`/todo/${id}`, data);
      if (res && res.data) {
        dispatch(updateSuccess(res.data));
      }
    } catch (err) {
      console.log('There is an error', err);
    }
  };
};

const updateSuccess = (id) => {
  return {
    type: ToDo.UPDATE_TODO,
    payload: id,
  };
};
