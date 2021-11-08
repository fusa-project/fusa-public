const AudioPlayer = ({ audio, audioRef }) => (
  <audio id='audio_tag' ref={ audioRef } controlsList='nodownload' controls>
    <source src={audio} />
  </audio>
)
export default AudioPlayer