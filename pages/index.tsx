import React from 'react';
import { NextPage, NextPageContext } from 'next';

import Layout from '../components/Layout';
import PostsList from '../components/PostsList';

import { fetchPosts } from '../redux/actions/indexActions';

import PostModel from '../models/PostModel';
import { Title } from '../styled-components';

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

Index.getInitialProps = async ({ store }: NextPageContext): Promise<{ postsList: PostModel[] }> => {
  const { dispatch } = store;
  await fetchPosts(dispatch);
  const { postsList } = store.getState().index;

  return { postsList };
};

export default Index;
