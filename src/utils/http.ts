import axios from 'axios';

axios.defaults.baseURL = 'https://easy-mock.com/mock/5d625f7c9909a25cee00fae9/mapgame';
axios.defaults.timeout = 3600000;
axios.interceptors.request.use(config => {
  config.headers = {
    Authorization:
        `${localStorage.getItem('token') || sessionStorage.getItem('token')}`
  };
  return config;
});

axios.interceptors.response.use(response => {
  if (response.data.code === 0) { alert(response.data.msg) }
  return response;
}, error => {
  if (error.response.data) { alert(error.response.data) }
});

export default axios;
