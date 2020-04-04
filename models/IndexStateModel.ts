import PostModel from './PostModel';

export default interface IndexStateModel {
  postsList: PostModel[];
  isLoading: boolean;
  isError: boolean;
}
