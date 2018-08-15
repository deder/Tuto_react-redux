import React,{Component} from 'react';
import VideoListItem from './../components/video-list-item';

const VideoList = ({videos}) => {
    const VideoListItems = [];
    for(let {id, title, release_date, poster_path} of videos){
        VideoListItems.push(<VideoListItem key={id} title={title} release_date={release_date} poster_path={poster_path} />);
    }
    return (<ul>
        {VideoListItems}
    </ul>);

}
export default VideoList;
