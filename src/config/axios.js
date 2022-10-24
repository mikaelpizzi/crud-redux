import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/mikaelpizzi/crud-redux-server/'
});

export default axiosClient;