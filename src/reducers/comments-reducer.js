import { SAVE_COMMENT } from '../actions/types';
const INITIAL_STATE = ['this is the first comment', 'really cool second comment'];

export default function(state = INITIAL_STATE, action={}){
    switch(action.type){
      case SAVE_COMMENT:
        if(action.payload){
          return state.concat(action.payload);
        }else{
          return state;
        }
      default:
        return state;
      }
}
