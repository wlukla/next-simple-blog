import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

const NewHeader: React.FC = () => (
  <Header>
    <Link href="/">
      <Logo as="a">Simple Blog</Logo>
    </Link>
    <Link href="/posts/new">
      <Button>Create a new Post</Button>
    </Link>
  </Header>
);

const Header = styled.header`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f1f1f;
  color: #ffffff;
`;

const Logo = styled.a`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: lightgreen;
  padding: 8px 10px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  color: darkgreen;
`;

export default NewHeader;
