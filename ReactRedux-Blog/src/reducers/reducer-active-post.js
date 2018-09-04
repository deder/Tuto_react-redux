import { AT_POSTS } from './../actions/action-types';

const reducerActivePost =  (state={}, action) => {
  switch(action.type){
    case AT_POSTS.READ :
      return action.payload;
  }
  
  return state;
}

export default reducerActivePost;