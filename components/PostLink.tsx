import React from 'react';
import Link from 'next/link';

interface Props {
  id: string;
}

const PostLink: React.FC<Props> = ({ id }: Props) => (
  <li>
    <Link href="posts/[id]" as={`${id}`}>
      <a>{id}</a>
    </Link>
  </li>
);

export default PostLink;
