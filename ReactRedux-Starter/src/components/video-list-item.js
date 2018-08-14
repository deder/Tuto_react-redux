import React, {Component} from 'react';
import { ReactDom } from 'react-dom';
import moment from 'moment'
moment.locale("fr");
class VideoListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:props.title,
            release_date:props.release_date
        };
    }
    componentWillReceiveProps(props){
        this.setState({
            title:props.title,
            release_date:props.release_date
        });
    }
    render(){
        return (<li>{this.state.title} || Sorti {moment(this.state.release_date,"YYYY-MM-DD").fromNow()}</li>);
    }
}

export default VideoListItem;
