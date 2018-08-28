import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostList from './containers/post-list';
import PostForm from './containers/post-form';
export default class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={PostList} />
                <Route path='/create-post' component={PostForm} />
            </Switch>
        </BrowserRouter>
    )
  }
}
