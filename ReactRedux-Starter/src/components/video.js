import React from "react";
import YouTube from "react-youtube"
const Video = ({videoId}) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1,   
            iv_load_policy: 3,
            modestbranding: 1,
            rel:0,
            showinfo:0
        },

    };
    return (
        <YouTube videoId={videoId} opts={opts} />
    );
}
export default Video;