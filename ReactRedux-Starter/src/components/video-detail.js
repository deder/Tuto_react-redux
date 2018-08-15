import React, {Component} from 'react';


const VideoDetail = ({title, resume, release_date, youtubeKey}) =>{
        return (
            <div>
                <h1>
                    {title} || {release_date}
                </h1>
                <p>
                    {resume}
                </p>
                <p>
                    {youtubeKey}
                </p>
            </div>
        )
}
export default VideoDetail