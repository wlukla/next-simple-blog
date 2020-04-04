import PostModel from '../../models/PostModel';
import PostsService from '../../services/posts-service';
import { Dispatch, AnyAction } from 'redux';

enum actionTypes {
  FETCH_POST_REQUEST = 'FETCH_POST_REQUEST',
  FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
  FETCH_POST_FAILURE = 'FETCH_POST_FAILURE',
}

const postRequested = (): AnyAction => ({
  type: actionTypes.FETCH_POST_REQUEST,
});

const postError = (error: Error): AnyAction => ({
  type: actionTypes.FETCH_POST_FAILURE,
  payload: error,
});

const postLoaded = (post: PostModel): AnyAction => ({
  type: actionTypes.FETCH_POST_SUCCESS,
  payload: post,
});

const fetchPostByID = async (postId, dispatch: Dispatch): Promise<void> => {
  const postsService = new PostsService();
  try {
    dispatch(postRequested());
    const post = await postsService.getPostById(postId);
    dispatch(postLoaded(post));
  } catch (err) {
    dispatch(postError(err));
  }
};

export { actionTypes, fetchPostByID };
