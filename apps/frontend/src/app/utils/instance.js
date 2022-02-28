import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3333/api',
  timeout: 6000,
  headers: {
    'content-Type': 'application/json',
    Accept: 'application/json',
  },
});

instance.interceptors.request.use(
  function (config) {
    // debugger;
    if (localStorage.getItem('token')) {
      // config.headers.Authorization = JSON.parse(localStorage.getItem("token"));
      config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response && response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
