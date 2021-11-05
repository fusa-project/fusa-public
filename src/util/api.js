import axios from 'axios';

const client =  axios.create({
  baseURL: `http://45.79.170.31:8000/`,
  headers: {'X-Api-Key': 'vOAevn90wlcOUK2IIZj1'}
});

export default client