import axiosInstance from './services/config';

const postRequest = async (url, data) => {
    try {
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Error making a post request:', error);
        throw error;
    }
};

export default postRequest;
