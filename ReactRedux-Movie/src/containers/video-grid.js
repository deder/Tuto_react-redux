import React from 'react';
import VideoGridItem from './../components/video-grid-item';

const VideoGrid = ({videos, onClickCard}) => {
    const VideoGridItems = [];
    let indexItem = 0;
    for(let video of videos){
        VideoGridItems.push(<VideoGridItem onClickCard={onClickCard(video)} index={indexItem} key={video.id} title={video.title} release_date={video.release_date} poster_path={video.poster_path} video={video} />);
        indexItem++
    }
    return (
        <div className="row">
            <div className="col s12" style={{
            }}>
                <span style={{
                    padding:"24px",
                    paddingLeft:0,
                    paddingTop:0,
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
                {VideoGridItems}
            </div>
        </div>
    );
}
export default VideoGrid;
