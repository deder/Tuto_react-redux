import React, {Component} from 'react';
import { ReactDom } from 'react-dom';

class VideoListItem extends Component {
    constructor({name, outputDate}){
        super({name, outputDate});
        this.state = {
            name,
            outputDate
        };
    }
    render(){
        return (<li>{this.state.name} || {this.state.outputDate}</li>);
    }
}

export default VideoListItem;
