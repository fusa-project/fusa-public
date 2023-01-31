import client from '@util/api'
import moment from 'moment'

const handleSubmit = async (data, actions) => {
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
    format: data.file.type,
    size: data.file.size,
    duration: data.audio_duration,
    recorded_at: moment(data.recorded_at).unix(),
    uploaded_at: upload_timestamp,
    latitude: data.latitude,
    longitude: data.longitude,
    data: data.data,
    recording_device: data.recording_device,
    user: user,
    labels: labels
  }
  return new Promise((resolve, reject) => {
    client
      .post('/audios?classification=true', full_data)
      .then(function (res) {
        if (res.status == 200) {
          actions.resetForm()
          actions.setSubmitting(false)
          document.getElementById('audioFile').value = ''
        }
        resolve(res)
      })
      .catch(function (error) {
	console.log(error)
        resolve(error)
      })
  })
}
export default handleSubmit
