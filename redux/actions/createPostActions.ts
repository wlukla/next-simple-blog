import PostModel from '../../models/PostModel';
import PostsService from '../../services/posts-service';
import { Dispatch, AnyAction } from 'redux';

enum actionTypes {
  SEND_POST_REQUEST = 'SEND_POST_REQUEST',
  SEND_POST_SUCCESS = 'SEND_POST_SUCCESS',
  SEND_POST_FAILURE = 'SEND_POST_FAILURE',
}

const postSendRequested = (): AnyAction => ({
  type: actionTypes.SEND_POST_REQUEST,
});

const postSendError = (error: Error): AnyAction => ({
  type: actionTypes.SEND_POST_FAILURE,
  payload: error,
});

const postSendSuccess = (): AnyAction => ({
  type: actionTypes.SEND_POST_SUCCESS,
});

const sendPost = (dispatch: Dispatch) => async (post: PostModel): Promise<void> => {
  const postsService = new PostsService();
  try {
    dispatch(postSendRequested());
    postsService.sendPost(post);
    dispatch(postSendSuccess());
  } catch (err) {
    dispatch(postSendError(err));
  }
};

export { actionTypes, sendPost };
