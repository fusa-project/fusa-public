import axios from 'axios';

const client =  axios.create({
  baseURL: `http://45.79.170.31:8000/`,
  timeout: 5000,
  headers: {'X-Api-Key': 'vOAevn90wlcOUK2IIZj1'}
});

async function postAudioData(data){
  await client.post('/audios', data)
  .then(function (response) {
    return response
  })
  .catch(function (error) {
    return error
  });
}

export default postAudioData