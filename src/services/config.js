import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://kroppa.kroppalab.com/cms/api/v1/get-json?f=',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;
