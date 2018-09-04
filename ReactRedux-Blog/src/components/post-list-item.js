import React from 'react'
import CollectionItem from './materializeCSS/collections/collection-item';
import { Link } from 'react-router-dom';
const marginBottomNullstyle = {
  marginBottom :"0"
}

const PostListItem = ({ deleteClickCallBack, post }) => {
  const { id, title, content, author, date } = post;
  return(<CollectionItem>
    <div style={marginBottomNullstyle} className="row">
      <span className="col">{id}</span>
      <span className="col">
      <Link to={`post/${id}`}>{title}</Link>
      </span>
      <a href="#!" onClick={deleteClickCallBack(id)} className="secondary-content"><i className="material-icons red-text darken-2 waves-light">delete_forever</i></a>
    </div>


  </CollectionItem>)
}


export default PostListItem;