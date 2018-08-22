import React from 'react';
import Video from './video';

const VideoDetail = ({title, resume, release_date, youtubeKey}) =>{
        return (
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <div className="card">
                        <div className="card-content">
                            <i className="material-icons circle " style={{
                                padding:"10",
                                marginRight:"10",
                                color:"white",
                                backgroundColor:"#004D40"
                            }}>video_library</i>
                            <h5 style={{
                                display:"inline"
                            }}>{title}</h5>
                        </div>
                        <div className="card-image">
                            <Video width="100%" videoId={youtubeKey}/>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Synopsis :</span>
                            <p>{resume}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default VideoDetail