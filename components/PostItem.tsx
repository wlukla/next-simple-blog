import React from 'react';
import Link from 'next/link';
import PostModel from '../models/PostModel';

import { Item, Card } from '../styled-components';

interface Props {
  post: PostModel;
}

const PostItem: React.FC<Props> = ({ post }) => {
  const { id, title, body } = post;
  return (
    <Item>
      <Link href="posts/[id]" as={`posts/${id}`}>
        <Card>
          <h3>Title: {title}</h3>
          <p>Contents: {`${body.slice(0, 20)}...`}</p>
        </Card>
      </Link>
    </Item>
  );
};

export default PostItem;
