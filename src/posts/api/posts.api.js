import axios from '../../common/axios.config';

export const getUser = async (userId) => axios.get(`/users/${userId}`);
export const getPosts = async (userId) => axios.get(`/users/${userId}/posts`);
