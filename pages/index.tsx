import React from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import styled from 'styled-components';

import PostModel from '../models/PostModel';

import Layout from '../components/Layout';
import PostsList from '../components/PostsList';

interface Props {
  posts: PostModel[];
}

const Index: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <Title>Latest Posts:</Title>
      <PostsList posts={posts} />
    </Layout>
  );
};

const Title = styled.h2`
  margin: 15px 25px;
`;

Index.getInitialProps = async () => {
  const { data } = await axios.get('https://simple-blog-api.crew.red/posts');

  return {
    posts: data,
  };
};

export default Index;
