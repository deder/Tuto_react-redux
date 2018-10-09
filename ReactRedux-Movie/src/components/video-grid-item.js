import React, { Component } from 'react';
import moment from 'moment'
import IhmConfig from '../configs/ihm.config';
import CardSmall from './card-small';
import CardLarge from './card-large';
moment.locale("fr");

class VideoGridItem extends Component {
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
            return <CardSmall onClick={this.state.onClickCard} image={`${IhmConfig.IMAGE_BASE_URL}${this.state.poster_path}`} title={this.state.title} />
        } else {
            return <CardLarge onClick={this.state.onClickCard} image={`${IhmConfig.IMAGE_BASE_URL}${this.state.poster_path}`} title={this.state.title} />
        }
    }
    render() {
        return (this.getCardComponent());
    }
}


export default VideoGridItem;