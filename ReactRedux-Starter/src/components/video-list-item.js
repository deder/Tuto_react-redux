import React, { Component } from 'react';
import { ReactDom } from 'react-dom';
import moment from 'moment'
import IhmConfig from '../configs/ihm.config';
import CollectionItem from './collection-item';
moment.locale("fr");

class VideoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            release_date: props.release_date,
            title: props.title,
            index: props.index,
            poster_path: props.poster_path,
            onClickCard:props.onClickCard
        };
    }
    isSmallCard = () => {
        return (this.state.index > 0);
    }
    getCardComponent = () => {
        if (this.isSmallCard()) {
            return <CollectionItem onClick={this.state.onClickCard} image={`${IhmConfig.IMAGE_BASE_URL}${this.state.poster_path}`} title={this.state.title} />
        } else {
            return <CollectionItem onClick={this.state.onClickCard} image={`${IhmConfig.IMAGE_BASE_URL}${this.state.poster_path}`} title={this.state.title} />
        }
    }
    render() {
        return (this.getCardComponent());
    }
}
export default VideoListItem;