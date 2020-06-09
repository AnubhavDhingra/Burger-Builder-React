import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-3e5a0.firebaseio.com/',
});

export default instance;