import axios from './axiosInstance' ;

export const createProject = async (projectData) => {
    const res = await axios.post('/projects/create', projectData);
    return res.data;
};

// GET /api/projects/
export const getProjects = async () => {
    const res = await axios.get('/projects');
    return res.data;
};