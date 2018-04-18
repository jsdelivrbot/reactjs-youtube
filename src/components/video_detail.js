import React from 'react';

const VideoDetail = ({video}) => {
// check if there is a video
if (!video) {
  return <div>loading...</div>;
}

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail con-md-8">
    <div className="embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src={url}></iframe>
    <div classnName="details"></div>
    <div>{video.snippet.title}</div>
    <div>{video.snippet.description}</div>
    </div>
    </div>
  );
};

export default VideoDetail;
