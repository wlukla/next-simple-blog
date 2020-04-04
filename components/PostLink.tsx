import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  id: string;
  title: string;
}

const PostLink: React.FC<Props> = ({ id, title }: Props) => (
  <Item>
    <Link href="posts/`[id]" as={`${id}`}>
      <Card>Title: {title}</Card>
    </Link>
  </Item>
);

const Item = styled.li`
  margin: 10px;
  width: 50%;
`;

const Card = styled.a`
  display: block;
  padding: 10px 30px;
  min-height: 30px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.75);
  font-weight: bold;
  cursor: pointer;
`;

export default PostLink;
