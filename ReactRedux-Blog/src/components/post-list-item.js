import React from 'react'


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


const PostListItem = ({ post }) => {
  const { title, content, author, date } = post;
  console.log(title);
  return(
    <div style={relativeStyle} className="row col s12">
      <a style={floatingBtnStyle} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
      <div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text row">
            <span className="card-title col s8">{title}</span>
            <span style={fontLittleStyle} className="card-title col s4 right-align">{date}</span>
            <p>{content}</p>
            <span style={fontLittleStyle} className="card-title col s12 right-align">{author}</span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default PostListItem;