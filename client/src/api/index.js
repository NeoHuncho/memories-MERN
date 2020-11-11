import axios from 'axios';
const url= 'hhtp://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

