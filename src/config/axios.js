import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://sandy-wave-icebreaker.glitch.me/'
});

export default axiosClient;