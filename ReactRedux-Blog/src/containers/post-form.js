import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Link, BrowserRouter } from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import { createPost } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Editor from './../components/wysiwyg/editor';

const floatingBtnStyle = {
  top : "15px",
  left: "15px",
  position: "absolute"
}

const validate = (values) =>{
  const errors = {};
  console.log(values)
  if(!values.title){
    errors.title = "Veuillez remplir le titre";
  }
  if(!values.content){
    errors.content = "Veuillez remplir le contenu"; 
  }    
  if(!values.author){
    errors.author = "Veuillez remplir le nom d'auteur";
  }
  return errors
}

const addValidOrInvalidClass = (type,fields,errors) => {
  if( fields[type].touched && errors[type]){
    return "invalid";
  }else if( fields[type].touched ){
    return "valid";
 }
 return "";
}

const formConfig = {
  form: "createPostForm",
  fields: ['title','content', 'author' ],
  validate: validate,
  initialValues :{
    author:"Frédéric COSTA"
  }
}

class PostForm extends Component {

  render() {
    const {fields, handleSubmit, errors} = this.props;
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
              <input type="text" {...fields.title} placeholder="Titre..." className={addValidOrInvalidClass("title",fields,errors)}  />
              <span className="helper-text red-text" >{fields.title.touched && errors.title}</span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <Editor {...fields.content} placeholder="Contenu..." className={addValidOrInvalidClass("content",fields,errors)}  />
              <span className="helper-text red-text" >{fields.content.touched && errors.content}</span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s2 offset-s10 right-align">
              <input type="text" {...fields.author} placeholder="Auteur..." className={addValidOrInvalidClass("author",fields,errors)}  />
              <span className='helper-text red-text' >{fields.author.touched && errors.author}</span>
            </div>
          </div>
          <div className="row">
              <button disabled={this.props.invalid} className="btn waves-effect waves-light offset-s10 col s2" type="submit" name="action">Créer
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