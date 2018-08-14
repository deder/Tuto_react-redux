import React from 'react';
import { ReactDom } from 'react-dom';

const VideoDetail = ({title, description, release_date}) =>{
    return (
        <div>
            <h1>
                {title} || {release_date}
            </h1>
            <p>
                {description}
            </p>
        </div>
    )
}

export default VideoDetail