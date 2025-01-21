import axios from 'axios';

// הגדרת כתובת ה-API מתוך משתנה הסביבה
axios.defaults.baseURL=process.env.REACT_APP_API_BASE_URL;

console.log(axios.defaults.baseURL);
console.log(process.env.REACT_APP_API_BASE_URL);

// הוספת interceptor לטיפול בשגיאות
axios.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response || error.message || error);
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    try {
      const result = await axios.get('/items');
      return result.data;
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
      throw error;
    }
  },
  addTask: async (name) => {
    try {
      const result = await axios.post('/items', { name });
      return result.data;
    } catch (error) {
      console.error('Failed to add task:', error);
      throw error;
    }
  },
  setCompleted: async (id, isComplete) => {
    try {
      const result = await axios.put(`/items/${id}`, { isComplete });
      return result.data;
    } catch (error) {
      console.error('Failed to update task:', error);
      throw error;
    }
  },
  deleteTask: async (id) => {
    try {
      const result = await axios.delete(`/items/${id}`);
      return result.data;
    } catch (error) {
      console.error('Failed to delete task:', error);
      throw error;
    }
  }
};
