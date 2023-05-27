import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import "./VideoPlayer.css";


function VideoPlayer() {
    
    const [video, setVideo] = useState(null);
    const url = window.location.href;
    const id = url.split("/").pop();
    const page = url.split("/")[4];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://internship-service.onrender.com/videos?page=${page}`);
                const jsonData = await response.json();
                const data = jsonData.data.posts;
                const video_data = data.find((ele) => ele.postId === id);
                setVideo(video_data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    },[page]);
    
    return video ? (
        <div className='videoContainer'>
            <div className="videoPlayer">
                <video width="640" height="480" controls>
                    <source src={video.submission.mediaUrl} type="video/mp4" />
                </video>


                <div className="videoCard-info">
                    <Avatar
                        className="videoCard-avatar"
                        alt={video.channel}
                        src={video.creator.pic}
                    />
                    <div className="video-text">
                        <h4>{video.submission.title}</h4>
                        <p>{video.creator.handle}</p>
                        <p><span>Description</span></p>
                        <p>{video.submission.description}</p>
                        <p><span>
                        {video.comment.count} comments · {video.reaction.count} reactions
                        </span>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        
    ):(<></>);
}
export default VideoPlayer;