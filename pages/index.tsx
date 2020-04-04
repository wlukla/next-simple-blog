import React from 'react';
import { NextPage } from 'next';
import axios from 'axios';

import Layout from '../components/Layout';
import PostsList from '../components/PostsList';

interface IndexProps {
  postsLinks: string[];
}

const Index: NextPage<IndexProps> = ({ postsLinks }: IndexProps) => {
  return (
    <Layout>
      <h2>Latest Posts:</h2>
      <PostsList postsLinks={postsLinks} />
    </Layout>
  );
};

interface Post {
  id: number;
  title: string;
  body: string;
}

Index.getInitialProps = async () => {
  const { data } = await axios.get('https://simple-blog-api.crew.red/posts');

  return {
    postsLinks: data.map((entry: Post) => entry.id.toString()),
  };
};

export default Index;
