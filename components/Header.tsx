import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/posts/new">
      <a>Create a new Post</a>
    </Link>
  </div>
);

export default Header;
