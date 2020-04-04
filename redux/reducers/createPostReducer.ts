import { actionTypes } from '../actions/createPostActions';
import { AnyAction } from 'redux';

const initialState = {
  isLoading: false,
  isError: false,
  isSent: false,
};

type PostState = typeof initialState;

const postReducer = (state = initialState, action: AnyAction): PostState => {
  switch (action.type) {
    case actionTypes.SEND_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.SEND_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSent: true,
      };
    case actionTypes.SEND_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return { ...state };
  }
};

export default postReducer;
