import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { readAllPost, deletePost } from './../actions/index';
import PostListItem from '../components/post-list-item';
import Collection from '../components/materializeCSS/collections/collection';
import { Link } from 'react-router-dom';

const relativeStyle = {
  position: "relative"
}
const floatingBtnStyle = {
  top : "-10px",
  right: "0"
}




class PostList extends Component {
  componentWillMount() {
    this.props.readAllPost();
  }
  hasPosts = () => {
    if (this.props.posts && this.props.posts.length > 0)
      return true

    return false;
  }
  deleteClickCallBack= id => event =>{
    console.log("delete !!!!!", id );
    this.props.deletePost(id);
  };
  
  renderPosts = () => {
    if (this.hasPosts()) {
      return this.props.posts.map((post) => {
        let deleteClickCallBack = this.deleteClickCallBack;
        let props = {deleteClickCallBack, post};
        return (
          <PostListItem key={post.id} {...props} />
        );
      });
    }
    return "";
  }
  render() {
    return (
      <div style={relativeStyle}>
        <h1>Liste des posts</h1>
        <Link to={'create-post'}>
          <a style={floatingBtnStyle}className="btn-floating halfway-fab waves-effect waves-light red">
           <i className="material-icons">add</i>
          </a>
      </Link>
        <Collection>
          {this.renderPosts()}
        </Collection>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ readAllPost, deletePost }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList)
