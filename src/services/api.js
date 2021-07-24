import axios from 'axios';

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
}

let axiosInstance = axios.create(options);

const getUsers = () => {
    return axiosInstance.get('users');
}

const getUser = (id) => {
    return axiosInstance.get('users/' + id);
}

const getPosts = ()=>{
    return axiosInstance('posts');
}

export {
    getUsers,
    getUser,
    getPosts,
    axiosInstance
}
