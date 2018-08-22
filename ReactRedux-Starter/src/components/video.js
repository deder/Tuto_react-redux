import React from "react";
import YouTube from "react-youtube"
const Video = ({videoId, width}) => {
    const opts = {
        height: '390',
        width: width,
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0,   
            iv_load_policy: 3,
            modestbranding: 1,
            rel:0,
            showinfo:0
        }
    };
    console.log(videoId)
    return (
        <YouTube videoId={videoId} opts={opts} />
    );
}
export default Video;