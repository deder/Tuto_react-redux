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

const authorMine = "Frédéric COSTA";


class PostList extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayOnlyMines : false
    }
  }
  renderPost = (post) =>{
    let deleteClickCallBack = this.deleteClickCallBack;
    let props = {deleteClickCallBack, post};
    return (
      <PostListItem key={post.id} {...props} />
    );
  }
  renderPosts = () =>{
    const {posts} = this.props
    let arrayPosts;
    if (this.hasPosts()) {
      if(this.state.displayOnlyMines){
        return this.filterMyPost(posts).map(this.renderPost);
      }else{
        return this.props.posts.map(this.renderPost);
      }
    }
    return "";
  }

  filterMyPost = (postList) =>{
    return postList.filter((post)=>{
      if(post.author == authorMine){
        return true;
      }
      return false;
    });
  }
  componentWillMount() {
    this.props.readAllPost();
  }
  hasPosts = () => {
    if (this.props.posts && this.props.posts.length > 0)
      return true

    return false;
  }
  deleteClickCallBack= id => event =>{
    this.props.deletePost(id);
  };
  handleClickOnlyMines =(event) =>{
    if(event.target.checked){
      this.setState({
        displayOnlyMines:true
      }) 
    }else{
      this.setState({
        displayOnlyMines:false
      }) 
    }
  }
  render() {
    return (
      <div style={relativeStyle}>
        <h1>Liste des posts</h1>
        <p>
          <label>
            <input type="checkbox" onClick={this.handleClickOnlyMines}/>
            <span>Voir seulement mes posts</span>
          </label>
        </p>
        <Link to={'create-post'}>
          <div style={floatingBtnStyle} className="btn-floating halfway-fab waves-effect waves-light red">
           <i className="material-icons">add</i>
          </div>
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
