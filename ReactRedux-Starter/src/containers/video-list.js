import React,{Component} from 'react';
import { ReactDom } from 'react-dom';
import VideoListItem from './../components/video-list-item';

class VideoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos:props.videos
        };
    }
    componentWillReceiveProps(props){
        this.setState({
            videos:props.videos            
        });
    }
    render(){
        const VideoListItems = [];
        for(let video of this.state.videos){
            console.log(video.id)
            VideoListItems.push(<VideoListItem key={video.id} title={video.title} release_date={video.release_date} />);
        }
        return (<ul>
            {VideoListItems}
        </ul>);
    }
}

export default VideoList;
