import { combineReducers } from 'redux';
import reducerPosts from './reducer-posts';
import reducerActivePost from './reducer-active-post';


const rootReducer = combineReducers({
  posts: reducerPosts,
  post: reducerActivePost
});

export default rootReducer;