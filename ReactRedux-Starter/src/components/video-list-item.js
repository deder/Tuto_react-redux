import React, {Component} from 'react';
import { ReactDom } from 'react-dom';
import moment from 'moment'
moment.locale("fr");
const VideoListItem = ({title, release_date}) => {
    return (
        <li>
            {title} || Sorti {moment(release_date,"YYYY-MM-DD").fromNow()}
        </li>
    );
}

export default VideoListItem;
