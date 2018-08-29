import React, { Component } from 'react'
import PostContent from '../components/post-content';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { readPost, deletePost } from './../actions/index';

class Post extends Component {
  componentWillMount(){
    console.log(this.props.match.params.id);
    this.props.readPost(this.props.match.params.id)
  }
  deletePostHandler = ()=>{
    this.props.deletePost(this.props.match.params.id);
    this.props.history.push('/');
  }
  render() {
      const post = this.props.post;
      const deletePostHandler = this.deletePostHandler;
      const params = {
        post,
        deletePostHandler
      };
    return (
      <div>
        <PostContent {...params}></PostContent>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    post: state.post
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ readPost, deletePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)