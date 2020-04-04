import { actionTypes } from '../actions/indexActions';

const initialState = {
  postsList: [],
  isLoading: true,
  isError: false,
};

type IndexState = typeof initialState;

const counterReducer = (state = initialState, action): IndexState => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.FETCH_POSTS_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.FETCH_POSTS_LIST_SUCCESS:
      return {
        ...state,
        postsList: action.payload,
        isLoading: false,
      };
    case actionTypes.FETCH_POSTS_LIST_FAILURE:
      return {
        ...state,
        isLoading: true,
        isError: true,
      };
    default:
      return { ...state };
  }
};

export default counterReducer;
