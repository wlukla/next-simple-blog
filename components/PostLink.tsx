import React from 'react';
import Link from 'next/link';

import { Item, Card } from '../styled-components';

interface Props {
  id: string;
  title: string;
}

const PostLink: React.FC<Props> = ({ id, title }) => (
  <Item>
    <Link href="posts/`[id]" as={`${id}`}>
      <Card>Title: {title}</Card>
    </Link>
  </Item>
);

export default PostLink;
