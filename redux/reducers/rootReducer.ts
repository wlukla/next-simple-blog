import { combineReducers } from 'redux';
import indexReducer from './indexReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  index: indexReducer,
  post: postReducer,
});

export default rootReducer;
