import React from 'react';
import { NextPage } from 'next';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import { ArticleTitle, Article, ArticleBody, FailureBanner } from '../../styled-components';

import PostModel from '../../models/PostModel';
import StateModel from '../../models/StateModel';

import { fetchPostByID } from '../../redux/actions/postActions';

interface Props {
  post?: PostModel;
  isError?: boolean;
}

const Post: NextPage<Props> = ({ post, isError }) => {
  return (
    <Layout>
      {isError ? (
        <FailureBanner>Something went wrong!</FailureBanner>
      ) : (
        <Article>
          <ArticleTitle>{post.title}</ArticleTitle>
          <small>id: {post.id}</small>
          <ArticleBody>{post.body}</ArticleBody>
        </Article>
      )}
    </Layout>
  );
};

Post.getInitialProps = async ({ query, store }): Promise<{ post: PostModel }> => {
  const { dispatch } = store;
  await fetchPostByID(query.id, dispatch);
  const { post } = store.getState().post;

  return { post };
};

const mapStateToProps = (state: StateModel): { isError: boolean } => ({
  isError: state.post.isError,
});

export default connect(mapStateToProps)(Post);
