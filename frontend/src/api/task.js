import axios from './axiosInstance' ;

export const createTask = async (taskData) => {
    const res = await axios.post('/tasks', taskData);
    return res.data;
  };
  
  // GET /api/tasks/:projectId
  export const getTasksByProject = async (projectId) => {
    const res = await axios.get(`/tasks/${projectId}`);
    return res.data;
  };
  
  // PUT /api/tasks/:id
  export const updateTask = async (taskId, updates) => {
    const res = await axios.put(`/tasks/${taskId}`, updates);
    return res.data;
  };
  
  // DELETE /api/tasks/:id
  export const deleteTask = async (taskId) => {
    const res = await axios.delete(`/tasks/${taskId}`);
    return res.data;
  };