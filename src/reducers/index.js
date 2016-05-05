import { combineReducers } from 'redux';
import CommentReducer from './comments-reducer';

const rootReducer = combineReducers({
  comments: CommentReducer
});

export default rootReducer;
