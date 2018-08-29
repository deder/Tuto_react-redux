import { AT_POSTS } from './../actions/action-types';

const reducerPosts =  (state=[], action) => {
  switch(action.type){
    case AT_POSTS.READ_ALL :
      return action.payload;
  }
  return state;
}

export default reducerPosts;