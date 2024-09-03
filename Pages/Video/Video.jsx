import React from 'react';
import { useParams } from 'react-router-dom';  // Import useParams
import "./Video.css";
import Playvideo from '../../Components/Playvideo/Playvideo';
import Recommended from '../../Components/Recommended/Recommended';

const Video = () => {
  // Extract videoId and categoryId from URL parameters
  const { videoId, categoryId } = useParams(); 

  return (
    <div className='play-container'>
      <Playvideo videoId={videoId} />  {/* Pass the correct videoId */}
      <Recommended categoryId={categoryId} />  {/* Pass the correct categoryId */}
    </div>
  );
};

export default Video;
