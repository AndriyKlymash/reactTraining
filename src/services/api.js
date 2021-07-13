import axios from "axios";

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
})

// axios.get('/users');
// axios.get('/posts');