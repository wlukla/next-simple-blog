import PostModel from './PostModel';

export default interface CreatePostStateModel {
  isSent: boolean;
  isLoading: boolean;
  post: PostModel[];
}
