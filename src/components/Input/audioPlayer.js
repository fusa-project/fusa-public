const AudioPlayer = ({ audio }) => (
  <audio id='audio_tag' controlsList='nodownload' controls>
    <source src={audio} type='audio/wav' />
  </audio>
)
export default AudioPlayer