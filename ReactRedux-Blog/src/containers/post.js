import React, { Component } from 'react'
import PostContent from '../components/post-content';

export default class Post extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
          Numéro de post : {this.props.match.params.id}
        <PostContent></PostContent>
      </div>
    )
  }
}
