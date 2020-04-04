import React from 'react';

import PostLink from './PostLink';
import { List } from '../styled-components';

import PostModel from '../models/PostModel';

interface Props {
  posts: PostModel[];
}

const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <List>
      {posts.map((post) => (
        <PostLink id={`/posts/${post.id}`} title={post.title} key={post.id} />
      ))}
    </List>
  );
};

export default PostsList;
