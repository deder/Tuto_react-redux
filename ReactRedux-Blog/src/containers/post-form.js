import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import { createPost } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'jodit/build/jodit.min.css';
import 'jodit/build/jodit.min.js';
import JoditEditor from "jodit-react";
import { withRouter } from "react-router-dom";


const floatingBtnStyle = {
  top : "15px",
  left: "15px",
  position: "absolute"
}


const formConfig = {
  form: "createPostForm",
  fields: ['title','content', 'author' ]
}

class PostForm extends Component {

  render() {
    const {fields, handleSubmit} = this.props;

    console.log(this.props)
    return (
    <div>
      <Link to={"/"} >
        <div className="btn-floating waves-effect waves-light red" style={floatingBtnStyle}>
          <i className="material-icons">arrow_back</i>
        </div>
      </Link>
      <div className="row">
        <h1>Nouveau post</h1>
        <form className="col s12" onSubmit={handleSubmit(this.createPost)}>
          <div className="row">
            <div className="input-field col s12">
              <input type="text" {...fields.title} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <JoditEditor {...fields.content}/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s2 offset-s10 right-align">
              <input type="text" {...fields.author}/>
            </div>
          </div>
          <div className="row">
              <button className="btn waves-effect waves-light offset-s10 col s2" type="submit" name="action">Créer
                  <i className="material-icons right">add</i>
              </button>
          </div>

        </form>
      </div>   
    </div>)
  }

  createPost = (post) => {
    this.props.createPost(post);
    this.props.history.push("/");
  }

}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({createPost}, dispatch)
})


export default connect(null,mapDispatchToProps)(reduxForm(formConfig)(withRouter(PostForm)))