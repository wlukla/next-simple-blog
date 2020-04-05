import React from 'react';

import PostItem from './PostItem';
import { List } from '../styled-components';

import PostModel from '../models/PostModel';

interface Props {
  posts: PostModel[];
}

const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <List>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </List>
  );
};

export default PostsList;
