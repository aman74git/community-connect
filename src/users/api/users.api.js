import axios from '../../common/axios.config';

export const fetchAllUsers = () => axios.get('/users');
