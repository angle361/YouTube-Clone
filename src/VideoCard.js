import { Avatar } from '@material-ui/core';
import React from 'react';
import "./VideoCard.css";

function VideoCard({image, title, channel, comments, reactions, channelImage}) {
    return (
        <div className="videoCard">
            <img src={image} alt="" className="videoCard-image" />
            <div className="videoCard-info">
                <Avatar
                    className="videoCard-avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="video-text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                    {comments} comments · {reactions} reactions
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
