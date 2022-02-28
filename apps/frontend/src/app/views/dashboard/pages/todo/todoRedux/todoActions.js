import axios from '../../../../../utils/instance';
import { ToDo } from './ActionTypes';

export const getList = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/todo');
      // eslint-disable-next-line no-debugger
      debugger;
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
      console.log(data);
      if (res && res.data) {
        dispatch(updateSuccess(res.data));
      }
    } catch (err) {
      console.log('There is an error in Edit', err);
    }
  };
};

const updateSuccess = (id) => {
  return {
    type: ToDo.UPDATE_TODO,
    payload: id,
  };
};

export const getDetails = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/todo/${id}`);
      if (res && res.data) {
        dispatch(DetailSuccess(res.data));
      }
    } catch (err) {
      dispatch(DetailFailure(err));
    }
  };
};

const DetailSuccess = (data) => {
  return {
    type: ToDo.DETAIL_TODO,
    payload: data,
  };
};

const DetailFailure = (err) => {
  return {
    type: ToDo.DETAILFAIL_TODO,
    payload: err,
  };
};
