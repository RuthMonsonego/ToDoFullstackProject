import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

export default {
  getTasks: async () => {
    try {
      const result = await axios.get(`${apiUrl}/items`);
      return result.data;
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
      throw error;
    }
  },
  addTask: async (name) => {
    try {
      const result = await axios.post(`${apiUrl}/items`, { name });
      return result.data;
    } catch (error) {
      console.error('Failed to add task:', error);
      throw error;
    }
  },
  setCompleted: async (id, isComplete) => {
    try {
      const result = await axios.put(`${apiUrl}/items/${id}`, { isComplete });
      return result.data;
    } catch (error) {
      console.error('Failed to update task:', error);
      throw error;
    }
  },
  deleteTask: async (id) => {
    try {
      const result = await axios.delete(`${apiUrl}/items/${id}`);
      return result.data;
    } catch (error) {
      console.error('Failed to delete task:', error);
      throw error;
    }
  }
};
