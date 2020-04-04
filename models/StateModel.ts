import IndexStateModel from './IndexStateModel';
import PostStateModel from './PostStateModel';
import CreatePostStateModel from './CreatePostStateModel';

export default interface StateModel {
  index: IndexStateModel;
  post: PostStateModel;
  createPost: CreatePostStateModel;
}
