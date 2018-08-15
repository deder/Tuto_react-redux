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
        for(let {id, title, overview, release_date} of this.state.videos){
            VideoListItems.push(<VideoListItem key={id} title={title} resume={overview} release_date={release_date} />);
        }
        return (<ul>
            {VideoListItems}
        </ul>);
    }
}

export default VideoList;
