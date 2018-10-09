import React from 'react';
import Video from './video';

const VideoDetail = ({title, resume, release_date, youtubeKey}) =>{

        const getVideo = () => {
            if(youtubeKey){
                return <Video width="100%" videoId={youtubeKey}/>
            }else{
                return <img alt="video vignette"  style={{
                    maxHeight:"390"
                }} src="http://www.azamedical.com/boutique/images_produits/no_image2-z.jpg"/>
            }
        }

        return (
            <div className="row">
                <div className="col s12 m12 l12">
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
                        <div className="card-image" style={{
                            padding:"10"
                        }}>
                            {getVideo()}
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