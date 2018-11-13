import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://szymon-burger.firebaseio.com/'
});

export default instance;