import React from 'react';
import PostLink from './PostLink';

interface Props {
  postsLinks: string[];
}

const PostsList: React.FC<Props> = ({ postsLinks }: Props) => {
  return (
    <ul>
      {postsLinks.map((postLink) => (
        <PostLink id={`/posts/${postLink}`} key={postLink} />
      ))}
    </ul>
  );
};

export default PostsList;
