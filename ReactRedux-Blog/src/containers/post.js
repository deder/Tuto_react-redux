import React, { Component } from 'react'
import PostContent from '../components/post-content';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { readPost } from './../actions/index';

class Post extends Component {
  componentWillMount(){
    console.log(this.props.match.params.id);
    this.props.readPost(this.props.match.params.id)
  }
  render() {
      console.log(this.props);
      const post = this.props.post;
    return (
      <div>
        <PostContent {...{post}}></PostContent>
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
  return bindActionCreators({ readPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)