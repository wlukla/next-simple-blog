import React from 'react';
import { NextPage } from 'next';

import styled from 'styled-components';

import PostModel from '../models/PostModel';

import Layout from '../components/Layout';
import PostsList from '../components/PostsList';
import { NextPageContext } from 'next';

import { fetchPosts } from '../redux/actions/indexActions';

interface Props {
  postsList: PostModel[];
}

const Index: NextPage<Props> = ({ postsList }) => {
  return (
    <Layout>
      <Title>Latest Posts:</Title>
      <PostsList posts={postsList} />
    </Layout>
  );
};

const Title = styled.h2`
  margin: 15px 25px;
`;

Index.getInitialProps = async ({ store }: NextPageContext): Promise<any> => {
  const { dispatch } = store;
  await fetchPosts(dispatch);
  const { postsList } = store.getState().index;

  return { postsList };
};

export default Index;
