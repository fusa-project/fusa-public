import client from '@util/api'
import moment from 'moment'

const handleRoadsSubmit = async (data, actions) => {
  var user_mail = 'labacam.fusa@gmail.com'
  var user = {
    category: 'citizen',
    username: user_mail
  }

  var upload_timestamp = moment().unix()

  var categories = []
  if (data.labels) {
    for (let category of data.labels) {
      categories.push(
        {
          category_name: category,
          probability: 1.0,
        }
      )
    }
    var labels = [
      {
        username: user_mail,
        version: '',
        timestamp: upload_timestamp,
        categories: categories
      }]
  } else {
    var labels = []
  }

  var full_data = {
    name: data.name,
    description: data.description,
    audio: data.audio,
    video: data.video,
    recorded_at: moment(data.recorded_at).unix(),
    uploaded_at: upload_timestamp,
    latitude: data.latitude,
    longitude: data.longitude,
    user: user,
    labels: labels,
    period: data.period
  }

  var period = data.period;
  var audio = data.audio
  var video = data.video

  return new Promise((resolve, reject) => {
    const promises = [];

    if (audio.data !== '') {
      const audioPromise = client.post('/predictions/audio?period=' + period, audio);
      promises.push(audioPromise);
    }
    if (video.data !== '') {
      const videoPromise = client.post('/predictions/video?period=' + period, video);
      promises.push(videoPromise);
    }
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    Promise.all(promises)
      .then((responses) => {
        for (const response of responses) {
          if (response.status !== 200) {
            reject(responses);
            return;
          }
        }

        actions.resetForm();
        actions.setSubmitting(false);

        if (audio.data !== '') {
          document.getElementById('audio.data').value = '';
        }

        if (video.data !== '') {
          document.getElementById('video.data').value = '';
        }
        resolve(responses);
      })
      .catch((errors) => {
        console.error(errors);
        reject(errors);
      });
  });
}
export default handleRoadsSubmit