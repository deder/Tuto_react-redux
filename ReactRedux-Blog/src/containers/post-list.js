import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { readAllPost } from './../actions/index';
import PostListItem from '../components/post-list-item';

const fontLittleStyle = {
  fontSize:"12px"
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
  renderPosts = () => {
    if (this.hasPosts()) {
      return this.props.posts.map((post) => {
        return (
          <PostListItem key={post.id} {...{post}}/>
        );
      });
    }
    return "";
  }
  render() {
    return (
      <div>
        <h1>Liste des posts</h1>
        <div className="row">{this.renderPosts()}</div>
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
  return bindActionCreators({ readAllPost }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList)
