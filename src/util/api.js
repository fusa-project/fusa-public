import axios from 'axios';

const client =  axios.create({
  baseURL: `http://45.79.170.31:8000/`,
  timeout: 5000,
  headers: {'X-Api-Key': 'vOAevn90wlcOUK2IIZj1'}
});

function postAudioData(data){
  return new Promise((resolve, reject) => {
    client.post('/audios', data)
    .then(function ({data}) {
     resolve(data);
    })
    .catch(function (error) {
     resolve();
    });
  });
 }
 
export default postAudioData