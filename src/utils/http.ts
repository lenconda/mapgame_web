import axios from 'axios';

// axios.defaults.baseURL = 'https://map.exql.top';
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
