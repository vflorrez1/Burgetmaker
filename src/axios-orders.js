import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-7aeaf.firebaseio.com/'
})

export default instance;