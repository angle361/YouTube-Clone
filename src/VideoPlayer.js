import React from 'react';
import ReactPlayer from 'react-player';
import { useStateValue } from './StateProvider';
import { Avatar } from '@material-ui/core';
import "./VideoPlayer.css";


// Render a YouTube video player
function VideoPlayer() {
    const [{ user }, dispatch] = useStateValue();
    console.log(user);
    const url = window.location.href;
    const id = url.split("/").pop();
    console.log(id);
    const video = user.find((ele) => ele.postId === id);
    console.log(video);
    return (
        <div>
            <div className="videoPlayer">
                <ReactPlayer url= {video.submission.mediaUrl} playIcon />
                <div className="videoCard-info">
                    <Avatar
                        className="videoCard-avatar"
                        alt={video.channel}
                        src={video.creator.pic}
                    />
                    <div className="video-text">
                        <h4>{video.submission.title}</h4>
                        <p>{video.creator.handle}</p>
                        <p>Description</p>
                        <p>{video.submission.description}</p>
                        <p>
                        {video.comment.count} comments · {video.reaction.count} reactions
                        </p>
                    </div>
                </div>
            </div>
            {/* <ReactPlayer url= "https://youtu.be/I_MPfuS7R9I" /> */}
        </div>
    );
}
export default VideoPlayer;