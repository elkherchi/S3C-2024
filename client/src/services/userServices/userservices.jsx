import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}users/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stations:', error);
    return [];
  }
};