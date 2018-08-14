import React,{Component} from 'react';
import { ReactDom } from 'react-dom';
import VideoListItem from './../components/video-list-item';

class VideoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos:["test","tes1","test2","test3"]
        };
    }
    render(){
        const VideoListItems = [];
        for(const video of this.state.videos){
            VideoListItems.push(<VideoListItem key={video} name={video} />);
        }
        return (<ul>
            {VideoListItems}
        </ul>);
    }
}

export default VideoList;
