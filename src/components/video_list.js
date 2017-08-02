//This component doesn't require state. 

import React from 'react';
import VideoListItem from './video_list_item';
// instead of class= for this, React requires to use ClassName=""
// In a class based component, props are accessible anywhere in the component.
// in a function component, props is an argument.
const VideoList = (props) => { 

  // Iterates through each of the videos in props
  // Returns VideoListItems
  //etag is unique to each video.
  const videoItems = props.videos.map((video) =>{
    return <VideoListItem key={video.etag} video={video}/>
  });

  //Will render each of items in videoItems array.
  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;