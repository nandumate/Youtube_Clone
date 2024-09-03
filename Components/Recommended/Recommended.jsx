import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { API_KEY } from '../../data';
import { value_converter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        const response = await fetch(relatedVideo_url);
        const data = await response.json();
        setApiData(data.items);
    };

    useEffect(() => {
        fetchData();
    }, [categoryId]);

    return (
        <div className='recommended'>
            {apiData && apiData.length > 0 ? (
                apiData.map((item, index) => (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{value_converter(item.statistics.viewCount)} Views</p>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No data available.</p>  // Fallback UI if apiData is empty
            )}
        </div>
    );
};

export default Recommended;
