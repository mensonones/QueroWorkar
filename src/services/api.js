import axios from 'axios';

const api = axios.create({
  baseURL: '//172.18.0.1:3000/'
});

export default api;
