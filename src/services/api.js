import axiosInstance from './config';

const fetchWorkList = async () => {
    try {
        const response = await axiosInstance.get('works');
        return response.data;
    } catch (error) {
        console.error('Error fetching work list:', error);
        throw error;
    }
};

const fetchProjectDetails = async (projectSlug) => {
    try {
        const response = await axiosInstance.get(projectSlug);
        return response.data;
    } catch (error) {
        console.error('Error fetching project details:', error);
        throw error;
    }
};

export { fetchWorkList, fetchProjectDetails };
