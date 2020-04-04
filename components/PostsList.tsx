import React from 'react';
import styled from 'styled-components';
import PostLink from './PostLink';

import PostModel from '../models/PostModel';
interface Props {
  posts: PostModel[];
}

const PostsList: React.FC<Props> = ({ posts }: Props) => {
  return (
    <List>
      {posts.map((post) => (
        <PostLink id={`/posts/${post.id}`} title={post.title} key={post.id} />
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default PostsList;
