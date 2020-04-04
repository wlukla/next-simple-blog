import { actionTypes } from '../actions/postActions';

const initialState = {
  post: null,
  isLoading: true,
  isError: false,
};

const postReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
      };
    case actionTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        isLoading: true,
        isError: true,
      };
    default:
      return { ...state };
  }
};

export default postReducer;
