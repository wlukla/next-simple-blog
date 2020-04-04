import { combineReducers } from 'redux';
import indexReducer from './indexReducer';
import postReducer from './postReducer';
import createPostReducer from './createPostReducer';

const rootReducer = combineReducers({
  index: indexReducer,
  post: postReducer,
  createPost: createPostReducer,
});

export default rootReducer;
