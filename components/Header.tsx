import React from 'react';
import Link from 'next/link';

import { Header, Logo, Button } from '../styled-components';

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

export default NewHeader;
