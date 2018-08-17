import React,{Component} from 'react';
import VideoListItem from './../components/video-list-item';

const VideoList = ({videos}) => {
    const VideoListItems = [];
    let indexItem = 0;
    for(let {id, title, release_date, poster_path} of videos){
        VideoListItems.push(<VideoListItem index={indexItem} key={id} title={title} release_date={release_date} poster_path={poster_path} />);
        indexItem++
    }
    return (
        <div className="row">
            <div className="col s12" style={{
            }}>
                <span style={{
                    padding:"24px",
                    paddingLeft:0,
                    display: "block",
                    fontSize: "28px",
                    fontWeight: "bold",
                    color:"grey",
                    opacity:0.7
                }}>
                    Films populaires
                </span>
            </div>
            <div className="col s12 row">
                {VideoListItems}
            </div>
        </div>

    );
}
export default VideoList;
