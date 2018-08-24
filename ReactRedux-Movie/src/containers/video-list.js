import React from 'react';
import VideoListItem from './../components/video-list-item';

const VideoList = ({videos, onClickCard}) => {
    const VideoListItems = [];
    let indexItem = 0;
    for(let video of videos){
        VideoListItems.push(<VideoListItem onClickCard={onClickCard(video)} index={indexItem} key={video.id} title={video.title} release_date={video.release_date} poster_path={video.poster_path} video={video} />);
        indexItem++
    }
    return (
        <ul className="collection">
            {VideoListItems}
        </ul>
    );
}
export default VideoList;
