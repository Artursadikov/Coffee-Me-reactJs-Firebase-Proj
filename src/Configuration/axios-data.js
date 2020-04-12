import axios from 'axios';

const instance = axios.create({
    baseURL: "https://coffe-me.firebaseio.com/"
});

export default instance;