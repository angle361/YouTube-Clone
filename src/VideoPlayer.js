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
        // <div>
        //     <ReactPlayer url= "https://cdn.gro.care/4dc9fddff1c8_1683731818849.mp4" />
        //     <video width="320" height="240" controls>
        //         <source src="https://cdn.gro.care/4dc9fddff1c8_1683731818849.mp4" type="video/mp4" />
        //     </video>
        // </div>
    );
}
export default VideoPlayer;