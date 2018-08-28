import { combineReducers } from 'redux';
import reducerPosts from './reducer-posts';


const rootReducer = combineReducers({
  posts: reducerPosts
});

export default rootReducer;