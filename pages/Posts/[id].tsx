import React from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import styled from 'styled-components';

import PostModel from '../../models/PostModel';

import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

interface Props {
  post: PostModel;
}

const Post: NextPage<Props> = ({ post }: Props) => {
  const router = useRouter();
  return (
    <Layout>
      <Article>
        <Title>{post.title}</Title>
        <small>id: {router.query.id}</small>
        <p>{post.body}</p>
      </Article>
    </Layout>
  );
};

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const { data } = await axios.get(`https://simple-blog-api.crew.red/posts/${id}`);

  return { post: data };
};

const Article = styled.article`
  border: 1px solid grey;
  padding: 20px;
`;

const Title = styled.h2`
  margin: 15px 25px 0 0;
  float: center;
`;

export default Post;
