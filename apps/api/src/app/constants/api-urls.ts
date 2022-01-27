const BASE_URL = '/api';
const URLS = {
  TODO_URLS: {
    ROOT: BASE_URL + '/todo',
    PARAM: BASE_URL + '/todo/:id',
  },
  USER_URLS: {
    ROOT: BASE_URL + '/user',
    PARAM: BASE_URL + '/user/:id',
  },
};
export default URLS;
