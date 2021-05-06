import axios from 'axios';

const api = axios.create({
  baseURL: 'https://magic-box-api.herokuapp.com'
});
api.interceptors.request.use(async (request) => {
  request.headers.common.authorization = sessionStorage.getItem('token');

  return request;
});
export default api;
