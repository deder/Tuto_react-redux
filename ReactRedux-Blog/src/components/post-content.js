import React from 'react'
import parser from 'html-react-parser';

const fontLittleStyle = {
  fontSize:"12px"
}

const relativeStyle = {
  position: "relative"
}
const floatingBtnStyle = {
  top : "-10px",
  right: "0"
}


const PostContent = ({ post, deletePostHandler }) => {
  let { title, content, author, date } = post;
  content = new String(content); 
  return(
    <div style={relativeStyle} className="row col s12">
      <a style={floatingBtnStyle} onClick={deletePostHandler} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
      <div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text row">
            <span className="card-title col s8">{title}</span>
            <span style={fontLittleStyle} className="card-title col s4 right-align">{date}</span>
            <div className="col s12">{parser(`${content}`)}</div>
            <span style={fontLittleStyle} className="card-title col s12 right-align">{author}</span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default PostContent;