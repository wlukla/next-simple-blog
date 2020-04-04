import React from 'react';
import { NextPage } from 'next';

import Layout from '../../components/Layout';
import { ArticleTitle, Article, ArticleBody } from '../../styled-components';

import PostModel from '../../models/PostModel';

import { fetchPostByID } from '../../redux/actions/postActions';

interface Props {
  post?: PostModel;
}

const Post: NextPage<Props> = ({ post }) => {
  return (
    <Layout>
      <Article>
        <ArticleTitle>{post.title}</ArticleTitle>
        <small>id: {post.id}</small>
        <ArticleBody>{post.body}</ArticleBody>
      </Article>
    </Layout>
  );
};

Post.getInitialProps = async ({ query, store }): Promise<{ post: PostModel }> => {
  const { dispatch } = store;
  await fetchPostByID(query.id, dispatch);
  const { post } = store.getState().post;

  return { post };
};

export default Post;
