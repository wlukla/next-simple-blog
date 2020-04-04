import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

import PostModel from '../../models/PostModel';

import Layout from '../../components/Layout';

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

Post.getInitialProps = async ({ query, store }) => {
  const { dispatch } = store;
  await fetchPostByID(query.id, dispatch);
  const { post } = store.getState().post;

  return { post };
};

const Article = styled.article`
  padding: 20px;
`;

const ArticleTitle = styled.h2`
  margin: 15px 25px 0 0;
`;

const ArticleBody = styled.p`
  margin-top: 40px;
  padding-left: 20px;
  border-left: 4px solid #1f1f1f;
`;

export default Post;
