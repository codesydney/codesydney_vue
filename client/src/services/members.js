/**
 * DELETE this comment
 * -------------------
 * Store some example data in an array or JSON object termporarily.
 * This will eventually be replaced when we do the back-end project.
 */
import axios from 'axios';
// The baseURL will be replaced when we have the real back-end
const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getMembers() {
    return apiClient.get('/members');
  }
};
