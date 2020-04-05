import React from 'react';
import { NextPage, NextPageContext } from 'next';

import Layout from '../components/Layout';
import PostsList from '../components/PostsList';

import { fetchPosts } from '../redux/actions/indexActions';

import PostModel from '../models/PostModel';
import { Title, FailureBanner } from '../styled-components';
import StateModel from '../models/StateModel';
import { connect } from 'react-redux';

interface Props {
  postsList: PostModel[];
  isError?: boolean;
}

const Index: NextPage<Props> = ({ postsList, isError }) => {
  return (
    <Layout>
      {isError ? (
        <FailureBanner>Something went wrong!</FailureBanner>
      ) : (
        <>
          <Title>Latest Posts:</Title>
          <PostsList posts={postsList} />
        </>
      )}
    </Layout>
  );
};

Index.getInitialProps = async ({ store }: NextPageContext): Promise<{ postsList: PostModel[] }> => {
  const { dispatch } = store;
  await fetchPosts(dispatch);
  const { postsList } = store.getState().index;

  return { postsList };
};

const mapStateToProps = (state: StateModel): { isError: boolean } => ({
  isError: state.index.isError,
});

export default connect(mapStateToProps)(Index);
