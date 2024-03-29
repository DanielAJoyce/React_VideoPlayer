import React from 'react';

// this will declare video as props.video

const VideoListItem =({video, onVideoSelect})=>{
const imageUrl = video.snippet.thumbnails.default.url;

  // {video} the same as const video = props.video;
  // {onVideoSelect} same as onVideoSelect = props.onVideoSelect
  return(

    //When clicked, onVideoSelect will apply to video
    <li onClick={ () => onVideoSelect(video)} className="list-group-item" >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
