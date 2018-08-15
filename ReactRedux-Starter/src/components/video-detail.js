import React, {Component} from 'react';
import Video from './video';



const VideoDetail = ({title, resume, release_date, youtubeKey}) =>{
        return (
            <div>
                <h1>
                    {title} || {release_date}
                </h1>
                <p>
                    {resume}
                </p>
                <Video videoId={youtubeKey}/>
            </div>
        )
}
export default VideoDetail