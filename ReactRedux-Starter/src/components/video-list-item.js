import React, {Component} from 'react';
import { ReactDom } from 'react-dom';

import moment from 'moment'
import IhmConfig from '../configs/ihm.config';
moment.locale("fr");
const VideoListItem = ({title, release_date, poster_path}) => {
    return (
        <li>
            <img width="100px" src={`${IhmConfig.IMAGE_BASE_URL}${poster_path}`} />
            {title} || Sorti {moment(release_date,"YYYY-MM-DD").fromNow()}
        </li>
    );
}

export default VideoListItem;
