import React from 'react';

const VideoPlayer = ({ video, videoRef }) => (
  <video id='video_tag' ref={videoRef} controlsList='nodownload' controls width='300' height='200'>
    <source src={video} />
  </video>
);

export default VideoPlayer;